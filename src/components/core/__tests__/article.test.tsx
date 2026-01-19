import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import {
  Article,
  ArticleActions,
  ArticleMetadata,
  ArticleCover,
  ArticleBadge,
  ArticleHead,
  ArticleHeadline,
  ArticleLead,
  ArticleContent,
} from "@/components/core/article"

jest.mock("@/components/core/image-with-focal", () => ({
  ImageWithFocal: (props: any) => (
    <img
      data-testid="image-with-focal"
      alt={props.alt}
      src={props.src}
    />
  ),
}))

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ href, children }: any) => (
    <a href={href}>{children}</a>
  ),
}))

jest.mock("@/components/ui/badge", () => ({
  Badge: ({ children }: any) => <div data-testid="badge">{children}</div>,
}))

jest.mock("@/constants/categories", () => ({
  CATEGORY_ID_SLUG_MAP: {
    news: "news",
  },
}))

describe("Article layout components", () => {
  it("renders Article with children", () => {
    render(
      <Article>
        <div>content</div>
      </Article>
    )

    expect(screen.getByText("content")).toBeInTheDocument()
  })

  it("renders ArticleActions with children", () => {
    render(
      <ArticleActions>
        <span>actions</span>
      </ArticleActions>
    )

    expect(screen.getByText("actions")).toBeInTheDocument()
  })

  it("renders ArticleMetadata with children", () => {
    render(
      <ArticleMetadata>
        <span>meta</span>
      </ArticleMetadata>
    )

    expect(screen.getByText("meta")).toBeInTheDocument()
  })

  it("renders ArticleHead with children", () => {
    render(
      <ArticleHead>
        <span>head</span>
      </ArticleHead>
    )

    expect(screen.getByText("head")).toBeInTheDocument()
  })

  it("renders ArticleHeadline text", () => {
    render(<ArticleHeadline>headline</ArticleHeadline>)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("headline")
  })

  it("renders ArticleLead text", () => {
    render(<ArticleLead>lead</ArticleLead>)
    expect(screen.getByText("lead")).toBeInTheDocument()
  })

  it("renders ArticleContent with children", () => {
    render(
      <ArticleContent>
        <p>paragraph</p>
      </ArticleContent>
    )

    expect(screen.getByText("paragraph")).toBeInTheDocument()
  })
})

describe("ArticleCover", () => {
  it("renders image and source", () => {
    render(
      <ArticleCover
        cover={{
          url: "/image.jpg",
          alt: "alt text",
          focalX: 0.5,
          focalY: 0.5,
        }}
        source="image source"
      />
    )

    expect(screen.getByTestId("image-with-focal")).toHaveAttribute(
      "src",
      "/image.jpg"
    )
    expect(screen.getByText("image source")).toBeInTheDocument()
  })
})

describe("ArticleBadge", () => {
  it("renders non-clickable badge", () => {
    render(
      <ArticleBadge id="news" name="News" />
    )

    expect(screen.getByTestId("badge")).toHaveTextContent("News")
  })

  it("renders clickable badge with link", () => {
    render(
      <ArticleBadge id="news" name="News" isClickable />
    )

    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "/news")
    expect(link).toHaveTextContent("News")
  })
})