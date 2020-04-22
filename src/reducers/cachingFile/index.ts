import {CACHE_STATUS} from '../../services/fileCachingService';
const NAME = 'cachingFile';
import {StateShape, CacheItem} from './types';

export const types = {
  RUN_CACHE_ONE: `${NAME}/RUN_CACHE_ONE`,
  RUN_PRUNE_EXPIRED_ALL: `${NAME}/RUN_PRUNE_EXPIRED_ALL`,

  SET_PRUNE_ONE: `${NAME}/SET_PRUNE_ONE`,
  SET_CACHE_ONE: `${NAME}/SET_CACHE_ONE`,
  SET_DELETING: `${NAME}/SET_DELETING`,
};

const SEC = 1000;
const MIN = SEC * 60;
const DAY = MIN * 60 * 24;
export const CACHE_SHELF_LIFE = DAY * 1;
// export const CACHE_SHELF_LIFE = SEC * 3;

const initialState: StateShape = {
  cached: {},
  deleting: false,
};

export const selectors = {
  selectCached: state => state[NAME].cached,
  selectDeleting: state => state[NAME].deleting,
  selectIsExpiredByUrl: (state, url) => {
    const cachedObj = state[NAME].cached[url];
    if (!cachedObj) {
      return true;
    } else {
      const timestamp = cachedObj.timestamp;
      const now = new Date().getTime();
      return now - cachedObj.timestamp > CACHE_SHELF_LIFE;
    }
  },
  selectCacheOne: (state, url) => {
    const cachedObj = state[NAME].cached[url];

    if (cachedObj && cachedObj.status === CACHE_STATUS.CACHE_SUCCESS) {
      const now = new Date().getTime();
      const notExpired = now - cachedObj.timestamp <= CACHE_SHELF_LIFE + MIN;
      if (notExpired) {
        return cachedObj.cachepath;
      } else {
        url;
      }
    } else {
      return url;
    }
  },
};

export const actions = {
  // saga
  runCacheOne: url => ({
    type: types.RUN_CACHE_ONE,
    payload: url,
  }),
  runPruneExpiredAll: () => ({
    type: types.RUN_PRUNE_EXPIRED_ALL,
  }),
  setCacheOne: (cachitems: CacheItem) => ({
    type: types.SET_CACHE_ONE,
    payload: cachitems,
  }),
  setPruneOne: (url: string) => ({
    type: types.SET_PRUNE_ONE,
    payload: url,
  }),
  setDeleting: bool => ({
    type: types.SET_DELETING,
    payload: {deleting: bool},
  }),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DELETING: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case types.SET_PRUNE_ONE: {
      let {cached} = state;
      const {payload: url} = action;
      delete cached[url];
      return {
        ...state,
        cached,
      };
    }
    case types.SET_CACHE_ONE: {
      let {cached} = state;
      const {payload: cacheItem} = action;
      const url = cacheItem.url;
      cached[url] = cacheItem;
      return {
        ...state,
        cached,
      };
    }
    default:
      return state;
  }
};
