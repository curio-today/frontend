import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SearchForm } from "@/components/ui/search-form"

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}))

jest.mock("lucide-react", () => ({
  Search: () => <svg data-testid="search-icon" />,
}))

jest.mock("next/form", () => ({
  __esModule: true,
  default: ({ children, ...props }: any) => (
    <form {...props}>{children}</form>
  ),
}))

describe("SearchForm", () => {
  const user = userEvent.setup()

  const getHiddenInput = () =>
    document.querySelector('input[type="hidden"][name="q"]') as HTMLInputElement

  it("renders with empty query by default", () => {
    render(<SearchForm />)

    const input = screen.getByPlaceholderText("placeholder")
    const hiddenInput = getHiddenInput()

    expect(input).toHaveValue("")
    expect(hiddenInput).toBeInTheDocument()
    expect(hiddenInput.value).toBe("")
  })

  it("renders with initial query", () => {
    render(<SearchForm initQuery="react" />)

    const input = screen.getByPlaceholderText("placeholder")
    const hiddenInput = getHiddenInput()

    expect(input).toHaveValue("react")
    expect(hiddenInput.value).toBe("react")
  })

  it("disables submit button when query is empty", () => {
    render(<SearchForm />)

    expect(screen.getByRole("button")).toBeDisabled()
  })

  it("enables submit button when query is not empty", async () => {
    render(<SearchForm />)

    await user.type(
      screen.getByPlaceholderText("placeholder"),
      "nextjs"
    )

    expect(screen.getByRole("button")).toBeEnabled()
  })

  it("keeps hidden input in sync with typing", async () => {
    render(<SearchForm />)

    await user.type(
      screen.getByPlaceholderText("placeholder"),
      "testing"
    )

    const hiddenInput = getHiddenInput()
    expect(hiddenInput.value).toBe("testing")
  })

  it("uses /search as form action", () => {
    render(<SearchForm />)

    expect(screen.getByRole("button").closest("form")).toHaveAttribute(
      "action",
      "/search"
    )
  })
})
