import '@testing-library/jest-dom'

jest.mock("@/components/core/dialog", () => ({
  Dialog: ({ children }: any) => <div className="dialog">{children}</div>,
  DialogTrigger: ({ children }: any) => <div className="trigger">{children}</div>,
  DialogContent: ({ children }: any) => <div className="content">{children}</div>,
  DialogHeader: ({ children }: any) => <div className="header">{children}</div>,
  DialogTitle: ({ children }: any) => <div className="title">{children}</div>,
  DialogDescription: ({ children }: any) => <div className="description">{children}</div>,
  DialogFooter: ({ children }: any) => <div className="footer">{children}</div>,
  DialogClose: ({ children }: any) => <div className="close">{children}</div>,
}))