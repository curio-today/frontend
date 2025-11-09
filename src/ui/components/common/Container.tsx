import { ComponentProps } from "react";

export type ContainerProps = ComponentProps<"div">;

export const Container = (props: ContainerProps) => {
    return <div {...props}></div>
}

export default Container;