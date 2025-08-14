import { Children } from "react";
import { ListProps, listVariants } from "./list.types";

const List = ({ gap, orientation, className, children, ...rest } : ListProps) => {
    return (
        <ul className={listVariants({ orientation, gap, className })} {...rest}>
            {Children.map(children, (child, index) => (
                <li key={index}>{child}</li>
            ))}
        </ul>
    );
}

export default List;