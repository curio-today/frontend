import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ArticleCard, { ArticleCardProps } from ".";

const mockProps: ArticleCardProps = {
    id: "1",
    title: "Test Article",
    subtitle: "This is a test subtitle",
    content: {
        root: {
            children: [],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
        }
    },
    slug: "test-article",
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    _status: "published",
    badge: {
        name: 'Amazes'
    },
    source: "Test Source",
    cover: {
        focalX: 0.5,
        focalY: 0.5,
        quality: "high",
        filename: "cover.jpg",
        mimeType: "image/jpeg",
        filesize: 1024,
        alt: "Test cover image",
        thumbnailURL: "https://example.com/cover-thumb.jpg",
        url: "https://example.com/cover.jpg"
    }
};


describe("ArticleCard", () => {
    it("sets correct aria-labels for accessibility", () => {
        render(<ArticleCard {...mockProps} />);
        const link = screen.getByRole("link", { name: /read full article: Test Article/i });
        expect(link).toBeInTheDocument();

        const subtitle = screen.getByLabelText("This is a test subtitle");
        expect(subtitle).toBeInTheDocument();

        const date = screen.getByLabelText("Published on 1/1/2023");
        expect(date).toBeInTheDocument();
    });

    it("sets correct dateTime attribute on <time>", () => {
        render(<ArticleCard {...mockProps} />);
        const time = screen.getByText("1/1/2023");
        expect(time).toHaveAttribute("dateTime", new Date(mockProps.createdAt).toDateString());
    });

    it("renders the article title and subtitle", () => {
        render(<ArticleCard {...mockProps} />);
        expect(screen.getByText("Test Article")).toBeInTheDocument();
        expect(screen.getByText("This is a test subtitle")).toBeInTheDocument();
    });

    it("renders the correct background style with cover image", () => {
        render(<ArticleCard {...mockProps} />);
        const link = screen.getByRole("link", { name: /read full article/i });
        expect(link).toHaveStyle(
            `background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
                url(${mockProps.cover.url}) lightgray 50% / cover no-repeat`
        );
    });

    it("sets the correct href using getArticleUrl", () => {
        render(<ArticleCard {...mockProps} />);
        const link = screen.getByRole("link", { name: /read full article/i });
        // getArticleUrl is imported, but we can check the href contains the slug and badge
        expect(link).toHaveAttribute("href");
        expect(link.getAttribute("href")).toContain(mockProps.slug);
        expect(link.getAttribute("href")).toContain(mockProps.badge.name);
    });

    it("sets the correct id and tabIndex on the link", () => {
        render(<ArticleCard {...mockProps} />);
        const link = screen.getByRole("link", { name: /read full article/i });
        expect(link).toHaveAttribute("id", mockProps.slug);
        expect(link).toHaveAttribute("tabIndex", "0");
    });

    it("sets aria-labelledby on section and id on title", () => {
        render(<ArticleCard {...mockProps} />);
        const section = screen.getByLabelText(/read full article/i).querySelector("section");
        expect(section).toHaveAttribute("aria-labelledby", `${mockProps.slug}-title`);
        const title = screen.getByText(mockProps.title);
        expect(title).toHaveAttribute("id", `${mockProps.slug}-title`);
    });
});