import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { SearchBar } from "../search-bar"

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    if (key === "placeholder") return "Search..."
    return key
  },
}))

const mockSetQuery = jest.fn()
const mockOnKeyDown = jest.fn()

jest.mock("@/hooks/use-search", () => ({
  useSearch: () => ({
    query: "initial query",
    setQuery: mockSetQuery,
    onKeyDown: mockOnKeyDown,
  }),
}))

jest.mock("../filter-button", () => ({
  FilterButton: () => <button>Filter</button>,
}))

describe("SearchBar", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test("renders search input with translated placeholder", () => {
    render(<SearchBar />)

    const input = screen.getByPlaceholderText("Search...")
    expect(input).toBeInTheDocument()
  })

  test("renders initial query value from useSearch", () => {
    render(<SearchBar />)

    const input = screen.getByDisplayValue("initial query")
    expect(input).toBeInTheDocument()
  })

  test("calls setQuery when input value changes", () => {
    render(<SearchBar />)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "new value" } })

    expect(mockSetQuery).toHaveBeenCalledTimes(1)
    expect(mockSetQuery).toHaveBeenCalledWith("new value")
  })

  test("calls onKeyDown when a key is pressed in the input", () => {
    render(<SearchBar />)

    const input = screen.getByRole("textbox")
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" })

    expect(mockOnKeyDown).toHaveBeenCalledTimes(1)
  })

  test("renders FilterButton", () => {
    render(<SearchBar />)

    expect(screen.getByText("Filter")).toBeInTheDocument()
  })
})
