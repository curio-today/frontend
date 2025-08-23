import { describe, it, expect, vi, beforeEach, Mock} from "vitest";
import { render, screen } from "@testing-library/react";
import ArticlesFeed from "./";
import type { Article } from "@/shared/network/content.types";
import { useInfiniteFetching } from "@/components/ui/InfiniteScroll";

// Mock dependencies
vi.mock("next/dynamic", () => ({
    default: (importFn: any) => importFn,
}));
vi.mock("@/components/ui/ArticleCard", () => ({
    __esModule: true,
    default: (props: any) => <div data-testid="article-card">{props.title}</div>,
}));
vi.mock("@/components/ui/InfiniteScroll", async () => {
    const actual = await vi.importActual<any>("@/components/ui/InfiniteScroll");
    return {
        ...actual,
        useInfiniteFetching: vi.fn(),
        default: ({ data, hasMore, loadMore, children }: any) => (
            <div data-testid="infinite-scroll">
                {children(data)}
                {hasMore && <button onClick={loadMore}>Load More</button>}
            </div>
        ),
    };
});
vi.mock("@/components/layout/Grid", () => ({
    __esModule: true,
    default: ({ children }: any) => <div data-testid="grid">{children}</div>,
    Row: ({ children, ...props }: any) => (
        <div data-testid="grid-row" {...props}>
            {children}
        </div>
    ),
}));
vi.mock("@/lib/api/feed.lib", () => ({
    getArticles: vi.fn(),
}));

const mockArticles: Article[] = [
    { slug: "article-1", title: "Article 1" } as Article,
    { slug: "article-2", title: "Article 2" } as Article,
];

describe("ArticlesFeed", () => {
    const mockOptions = { limit: 10 };

    beforeEach(() => {
        (useInfiniteFetching as unknown as Mock).mockReturnValue({
            data: mockArticles,
            hasMore: true,
            loadMore: vi.fn(),
        });
    });


    it("renders no articles if data is empty", () => {
        (useInfiniteFetching as unknown as Mock).mockReturnValue({
            data: [],
            hasMore: false,
            loadMore: vi.fn(),
        });
        render(<ArticlesFeed options={mockOptions} />);
        expect(screen.queryAllByTestId("grid-row")).toHaveLength(0);
    });
});