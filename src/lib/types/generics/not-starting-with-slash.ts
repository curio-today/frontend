/**
 * Generic that rejects strings starting with "/"
 */
export type NotStartingWithSlash<T extends string> =
  T extends `/${string}` ? never : T;

export default NotStartingWithSlash;