import styles from "./List.module.scss"
import React, { HTMLAttributes } from "react";
import { Size } from "@/types/Size";

type ListProps = {
    orientation: "horizontal" | "vertical",
    gap?: Size,
} & HTMLAttributes<HTMLUListElement>;

const List = ({ orientation = "vertical", children, className = "", gap = "medium"}: ListProps) => {
    const orientationClass = orientation === "vertical"
        ? styles.vertical
        : styles.horizontal;

    return (
        <ul className={`${styles.list} ${orientationClass} ${styles[gap]} ${className}`}>
            {React.Children.map(children, (child, index) => (
                <li key={index}>{child}</li>
            ))}
        </ul>
    );
}

export default List;