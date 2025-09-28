import { Navigation } from "@@/navigation.config";
import { ExtractPaths } from "../generics/extract-paths";

/**
 * Union type of all valid route paths defined in `Navigation.routes`.
 *
 * This type is automatically inferred using the `ExtractPaths` utility, ensuring
 * that only existing routes from the central `Navigation` configuration can be
 * referenced throughout the app.
 *
 * Benefits:
 * - Provides compile-time safety for route usage
 * - Guarantees consistency with `Navigation.routes`
 * - Enables IDE autocompletion for available paths
 *
 * @example
 * // If Navigation.routes contains { playground: {}, feed: { amazes: {} } }
 * type AvailableRoutePath = "playground" | "feed" | "feed/amazes";
 *
 * // ✅ Valid
 * const route: AvailableRoutePath = "feed/amazes";
 *
 * // ❌ Error: Type '"invalid"' is not assignable to type 'AvailableRoutePath'
 * const invalid: AvailableRoutePath = "invalid";
 */
export type AvailableRoutePath = ExtractPaths<typeof Navigation.routes>;
