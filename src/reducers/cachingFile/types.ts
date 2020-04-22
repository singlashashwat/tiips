export interface CacheItem {
  url: string;
  timestamp: number;
  cachepath: string | null;
  status: string;
}

export interface StateShape {
  cached: {[key: string]: CacheItem};
  deleting: boolean;
}
