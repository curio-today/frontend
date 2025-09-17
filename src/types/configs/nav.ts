import { FeedItem } from "../pages/feed-item";
import { Platform } from "../platform";

/**
 * Represents the configuration for navigation items per platform.
 *
 * @typedef {Object} NavigationConfig
 * @property {Platform} - A key representing each platform (mobile or desktop).
 * @property {Array<FeedItem>} [platform].items - An array of feed items for the platform.
 *
 * @template Platform - A union type representing supported platform names (e.g., 'web', 'mobile').
 */
export type NavigationConfig = {
    [platform in Platform]: {
        items: FeedItem[];
    }
}