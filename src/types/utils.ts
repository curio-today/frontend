export type Options<T> = T[];

/**
 * Include props from another component under a new key.
 *
 * @template Props - props of another component.
 * @template KeyName - The new key name under which the props will appear.
 *
 * @example
 * type Icon = {
 *     type: IconType,
 *     variant: IconVariant,
 * };
 *
 * type Button = {
 *     title: string
 * } & Include<Icon, "icon">
 */
export type Include<Props, KeyName extends string> = {
    readonly [Key in KeyName]: Props;
};