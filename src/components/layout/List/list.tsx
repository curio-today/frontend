import { Children } from "react";
import { ListProps, listVariants } from "../../navigation/list.types";

/**
 * Use <ul> and <li> for lists!
 * @deprecated
 * @constructor
 */
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