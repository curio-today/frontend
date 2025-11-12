import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";

const listVariants = cva("flex list-none gap-4", {
    variants: {
        orientation: {
            horizontal: "flex-row",
            vertical: "flex-col",
        },
        gap: {
            small: "gap-2",
            medium: "gap-8",
            large: "gap-16",
            huge: "gap-24",
        }
    },
    defaultVariants: {
        orientation: "horizontal",
        gap: "medium"
    }
});


export type ListProps = VariantProps<typeof listVariants> & ComponentProps<"ul">;

const Item = ({ children, ...rest }: ComponentProps<"li">) => 
    <li {...rest}>{children}</li>

export const List = ({ gap, orientation, className, children, ...rest } : ListProps) => {
    return (
        <ul className={listVariants({ orientation, gap, className })} {...rest}>
            {children}
        </ul>
    );
}

List.Item = Item;

export default List;