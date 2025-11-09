import { ComponentProps } from "react";

export type SpanProps = ComponentProps<"span">;

export const Span = (props: SpanProps) => {
    return <span {...props}></span>
}

export default Span;