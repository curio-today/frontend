import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ShareButton } from "@/components/core/share-button"

// ====== Mocks ======

const copyMock = jest.fn()

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/test-path"),
}))

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}))

jest.mock("@/hooks/use-mobile", () => ({
  useIsMobile: jest.fn(() => false),
}))

jest.mock("@/hooks/use-clipboard", () => ({
  useClipboard: () => ({
    copy: copyMock,
  }),
}))

jest.mock("@/components/core/copy-to-clipboard-button", () => ({
  CopyToClipboardButton: ({ text }: { text: string }) => (
    <button data-testid="copy-button">{text}</button>
  ),
}))

// lucide-react icon mock
jest.mock("lucide-react", () => ({
  Share: () => <svg data-testid="share-icon" />,
}))


// ====== Tests ======

describe("ShareButton", () => {
  const user = userEvent.setup()
  const expectedLink = "https://curio.today/test-path"

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders the share button with label and icon", () => {
    render(<ShareButton />)

    expect(screen.getByRole("button", { name: "button" })).toBeInTheDocument()
    expect(screen.getByTestId("share-icon")).toBeInTheDocument()
  })

  it("copies the link immediately when share button is clicked", async () => {
    render(<ShareButton />)

    await user.click(screen.getByRole("button", { name: "button" }))

    expect(copyMock).toHaveBeenCalledTimes(1)
    expect(copyMock).toHaveBeenCalledWith(expectedLink)
  })

  it("opens the dialog when clicking the share button", async () => {
    render(<ShareButton />)

    await user.click(screen.getByRole("button", { name: "button" }))

    expect(screen.getByText("title")).toBeInTheDocument()
    expect(screen.getByText("description")).toBeInTheDocument()
  })

  it("renders the generated link inside the input", async () => {
    render(<ShareButton />)

    await user.click(screen.getByRole("button", { name: "button" }))

    const input = screen.getByDisplayValue(expectedLink)

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute("readonly")
  })

  it("passes the correct link to CopyToClipboardButton", async () => {
    render(<ShareButton />)

    await user.click(screen.getByRole("button", { name: "button" }))


    expect(screen.getByTestId("copy-button")).toHaveTextContent(
      expectedLink
    )
  })

  // it("closes the dialog when clicking the close button", async () => {
  //   render(<ShareButton />)

  //   await user.click(screen.getByRole("button", { name: "button" }))

  //   const closeButton = screen.getByRole("button", { name: "buttons.close" })
  //   await user.click(closeButton)

  //   expect(
  //     screen.queryByText("title")
  //   ).not.toBeInTheDocument()
  // })
})
