import { IsPlainObject } from "./is-plain-object";

export type ExtractPaths<T, Prev extends string = ""> = {
  [K in keyof T]: IsPlainObject<T[K]> extends true
    ? `${Prev}${K & string}` | ExtractPaths<T[K], `${Prev}${K & string}/`> | `${K & string}`
    : never;
}[keyof T];