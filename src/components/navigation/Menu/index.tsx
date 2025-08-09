import './index.scss'
import { TextProps } from "@/shared/props/TextProps";
import { HTMLAttributes, ReactNode } from "react";
import Link from "next/link";

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
          <Link href={href}>{text}</Link>
      </li>
    );
}



Menu.Item = MenuItem;