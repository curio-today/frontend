import styles from "./List.module.scss"
import React, { HTMLAttributes } from "react";

type ListProps = {
    orientation: "horizontal" | "vertical",
} & HTMLAttributes<HTMLUListElement>;

const List = ({ orientation = "vertical", children, className}: ListProps) => {
    const orientationClass = orientation === "vertical"
        ? styles.vertical
        : styles.horizontal;

    return (
        <ul className={`${styles.list} ${orientationClass} ${className}`}>
            {React.Children.map(children, (child, index) => (
                <li key={index}>{child}</li>
            ))}
        </ul>
    );
}

export default List;