import './index.scss'
import { TextProps } from "@/shared/props/TextProps";
import { ReactNode } from "react";

type MenuItemProps = TextProps & {
    href: string;
}
type MenuProps = {
    children: ReactNode;
};

export const Menu = ({ children }: MenuProps) => {
    return (
        <ul className="menu">
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