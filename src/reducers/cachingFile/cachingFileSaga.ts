import {
  takeLatest,
  fork,
  select,
  take,
  call,
  put,
  all,
} from 'redux-saga/effects';
import {
  types as cachingFileTypes,
  selectors as cachingFileSelectors,
  actions as cachingFileActions,
  CACHE_SHELF_LIFE,
} from './index';
import {
  cacheFileByUrl,
  deleteFileByUrl,
  CACHE_STATUS,
} from '../../services/fileCachingService';
import {CacheItem} from './types';

function* runCacheOne(actionObj) {
  const deleting = yield select(cachingFileSelectors.selectDeleting);
  if (deleting) return;

  const {payload: ourl} = actionObj;
  const isExpired = yield select(state =>
    cachingFileSelectors.selectIsExpiredByUrl(state, ourl),
  );
  if (isExpired) {
    const [status, url, cachepath] = yield call(cacheFileByUrl, ourl);
    const timestamp = new Date().getTime();
    yield put(
      cachingFileActions.setCacheOne({
        timestamp,
        url,
        cachepath,
        status,
      }),
    );
  } else {
  }
}

function* pruneOne(url) {
  const isExpired = yield select(state =>
    cachingFileSelectors.selectIsExpiredByUrl(state, url),
  );
  console.log(`pruneOne isExpired ${isExpired} `);
  if (isExpired) {
    const bool = yield call(deleteFileByUrl, url);
    if (bool) {
      yield put(cachingFileActions.setPruneOne(url));
    }
    console.log(`pruneOne ${bool} ${url} `);
  }
}

function* runPruneExpiredAll() {
  yield put(cachingFileActions.setDeleting(true));
  const cached: {[key: string]: CacheItem} = yield select(
    cachingFileSelectors.selectCached,
  );
  const now = new Date().getTime();
  const delPromises = Object.keys(cached)
    .filter(key => {
      return now - cached[key].timestamp > CACHE_SHELF_LIFE;
    })
    .map(key => {
      const {url} = cached[key];
      return call(pruneOne, url);
    });
  console.log('delPromises', delPromises);
  yield all(delPromises);
  yield put(cachingFileActions.setDeleting(false));
}

export default [
  //
  takeLatest(cachingFileTypes.RUN_CACHE_ONE, runCacheOne),
  takeLatest(cachingFileTypes.RUN_PRUNE_EXPIRED_ALL, runPruneExpiredAll),
  //
];
