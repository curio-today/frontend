import { renderHook, act } from "@testing-library/react"

import { useClipboard } from "@/hooks/use-clipboard"

describe("useClipboard", () => {
  it("copies text to clipboard", async () => {
    const writeText = jest.fn()

    Object.assign(navigator, {
      clipboard: { writeText },
    })

    const { result } = renderHook(() => useClipboard())

    await act(async () => {
      await result.current.copy("hello")
    })

    expect(writeText).toHaveBeenCalledWith("hello")
  })
})
