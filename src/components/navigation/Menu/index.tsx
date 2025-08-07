import './index.scss'
import { TextProps } from "@/shared/props/TextProps";
import { HTMLAttributes, ReactNode } from "react";

type MenuItemProps = TextProps & {
    href: string;
}
type MenuProps = {
    gap?: number;
    orientation: "horizontal" | "vertical";
    children: ReactNode;
} & HTMLAttributes<HTMLUListElement>;

export const Menu = ({ children, orientation, className = "", ...props}: MenuProps) => {
    return (
        <ul className={`${className} menu ${orientation}`} {...props}>
            {children}
        </ul>
    )
}


const MenuItem = ({ text, href }: MenuItemProps) => {
    return (
      <li className="menu-item" tabIndex={0}>
          <a href={href}>{text}</a>
      </li>
    );
}



Menu.Item = MenuItem;