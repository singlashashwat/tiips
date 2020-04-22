import RNFetchBlob from 'rn-fetch-blob';
import _ from 'lodash';
import {Platform} from 'react-native';
const SHA1 = require('crypto-js/sha1');

const STATUS = {
  CACHE_UNCACHEABLE: 'CACHE_UNCACHEABLE',
  CACHE_DOWNLOADING: 'CACHE_DOWNLOADING',
  CACHE_SUCCESS: 'CACHE_SUCCESS',
  CACHE_FAILED: 'CACHE_FAILED',
  CACHE_FAILED_NOT_COMPLETE: 'CACHE_FAILED_NOT_COMPLETE',
  CACHE_DELETING: 'CACHE_DELETING',
};

const getfileExt = url =>
  url.substring(url.lastIndexOf('.') + 1) === url
    ? null
    : `.${url.substring(url.lastIndexOf('.') + 1)}`;
const getBASE_DIR = () => `${RNFetchBlob.fs.dirs.CacheDir}/ood-videos-cache/`;
const getCachedFileName = url => `${SHA1(url)}${getfileExt(url)}`;
const getCachedFilePath = url => `${getBASE_DIR()}${getCachedFileName(url)}`;
const getTmpPath = url =>
  `${getBASE_DIR()}${SHA1(url)}${_.uniqueId()}${getfileExt(url)}`;

const isCacheable = url => {
  return (
    _.isString(url) &&
    (_.startsWith(url.toLowerCase(), 'http://') ||
      _.startsWith(url.toLowerCase(), 'https://'))
  );
};

const activeDownloads = {};

// url: String source url
// return promise that is resolved to the [STATUS, url, cachedFilePath] in file system
// only when the caching completed successfully; otherwise return promise
// resolved to [STATUS]
function cacheOneFile(url) {
  const tmpPath = getTmpPath(url);
  const cachedFileName = getCachedFileName(url);
  const path = getCachedFilePath(url);
  if (!isCacheable(url)) {
    return Promise.resolve([STATUS.CACHE_UNCACHEABLE, url, null]);
  }
  if (activeDownloads[url]) {
    // active downloading; abort
    return Promise.resolve([STATUS.CACHE_DOWNLOADING, url, null]);
  }
  activeDownloads[url] = true;
  return RNFetchBlob.fs
    .exists(path)
    .then(exists => {
      console.log('activeDownloads', activeDownloads);
      // console.log('getCachePathFromUri exists', exists)
      if (exists) {
        delete activeDownloads[url];
        return [STATUS.CACHE_SUCCESS, url, path];
      } else {
        return RNFetchBlob.config({path: tmpPath})
          .fetch('GET', url, {})
          .then(rsp => {
            console.log('rsp', rsp);
            const respInfo = rsp.respInfo;
            const status = Math.floor(respInfo.status / 100);
            if (status == 2) {
              return RNFetchBlob.fs.stat(tmpPath).then(fileStats => {
                console.log('fileStats', fileStats);
                // Verify if the content was fully downloaded!
                if (
                  (rsp.respInfo.headers['Content-Length'] &&
                    rsp.respInfo.headers['Content-Length'] == fileStats.size) ||
                  (rsp.respInfo.headers['content-length'] &&
                    rsp.respInfo.headers['content-length'] == fileStats.size)
                ) {
                  // cached; return cachedFileName
                  return RNFetchBlob.fs.mv(tmpPath, path).then(() => {
                    delete activeDownloads[url];
                    return [STATUS.CACHE_SUCCESS, url, path];
                  });
                } else {
                  // content not complete
                  delete activeDownloads[url];
                  RNFetchBlob.fs.unlink(tmpPath);
                  return [STATUS.CACHE_FAILED_NOT_COMPLETE, url, null];
                }
              });
            } else {
              // fetch failed; rm
              RNFetchBlob.fs.unlink(tmpPath);
              delete activeDownloads[url];
              return [STATUS.CACHE_FAILED, url, null];
            }
          })
          .catch(e => {
            // failed
            RNFetchBlob.fs.unlink(tmpPath);
            delete activeDownloads[url];
            console.log(e);
            return [STATUS.CACHE_FAILED, url, null];
          }); // fetch failed to return falsy value
      }
    })
    .catch(e => {
      delete activeDownloads[url];
      console.log(e);
      return [STATUS.CACHE_FAILED, url, null];
    });
}

function deleteOneFile(url) {
  const filePath = getCachedFilePath(url);
  return RNFetchBlob.fs
    .stat(filePath)
    .then(res => {
      return res && res.type === 'file';
    })
    .then(exists => {
      if (exists) {
        return RNFetchBlob.fs.unlink(filePath).then(() => {
          console.log('deleted ', filePath);
          return true;
        });
      } else {
        return false;
      }
    })
    .catch(err => {
      console.log(err);
      return false;
      // swallow error to always resolve
    });
}

export const cacheFileByUrl = url => cacheOneFile(url);

export const deleteFileByUrl = url => deleteOneFile(url);
// export const getCachedFileNameByUrl = url => getCachedFileName(url);
export const getPathByUrl = url => {
  return `file://${getCachedFilePath(url)}`;
  // if (Platform.OS === 'android') {
  //   return `file://${getPath(url)}`
  // } else {
  //   return getPath(url)
  // }
};

export const CACHE_STATUS = STATUS;

// function isExistFile(url) {
//   const path = url.startsWith('http') ? getCachedFilePath(url) : url;
//   return RNFetchBlob.fs
//     .exists(path)
//     .then(exist => exist)
//     .catch(e => {
//       return false;
//     });
// }
