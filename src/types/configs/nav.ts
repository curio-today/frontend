import { FeedItem } from "../pages/feed-item";
import { Platform } from "../platform";

export type NavigationConfig = {
    [platform in Platform]: {
        items: Array<FeedItem>;
    }
}