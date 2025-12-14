import { renderHook, act } from "@testing-library/react"

import { useChangeLocale } from "../use-change-locale"

const replaceMock = jest.fn()
const refreshMock = jest.fn()

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: replaceMock,
    refresh: refreshMock,
  }),
}))

jest.mock("@/i18n/navigation", () => ({
  usePathname: () => "/about"
}))


describe("useChangeLocale", () => {
  beforeEach(() => {
    replaceMock.mockClear()
    refreshMock.mockClear()
  })

  it("replaces route and refreshes when locale changes", () => {
    const { result } = renderHook(() => useChangeLocale())

    act(() => {
      result.current("ru")
    })

    expect(replaceMock).toHaveBeenCalledWith(
      "/ru/about",
      { scroll: false }
    )
    expect(refreshMock).toHaveBeenCalled()
  })

  it("does nothing when locale is the same", () => {
    const { result } = renderHook(() => useChangeLocale())

    act(() => {
      result.current("en")
    })

    expect(replaceMock).not.toHaveBeenCalled()
    expect(refreshMock).not.toHaveBeenCalled()
  })
})