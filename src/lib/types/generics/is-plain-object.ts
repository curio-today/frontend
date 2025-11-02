export type IsPlainObject<T> = T extends object
  ? T extends (...args: any[]) => any
    ? false
    : true
  : false;