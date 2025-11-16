"use client";

import styles from "./Desktop.module.css";

import useNavigationBar from "@/ui/hooks/useNavigationBar";
import IconWithLink from "@/ui/components/primitives/IconWithLink";
import { List } from "@components/layout";
import NavLink from "../../NavLink";
import { SwitchLanguageButton, ThemeButton } from "@primitives/buttons";

const DesktopNavigationBar = () => {
  const { navigationRoutePaths } = useNavigationBar();

  return (
    <nav className={styles.navBar}>
      <IconWithLink icon="curio" href="/" size="gigantic" />
      <List className={styles.links} gap={"medium"}>
        {navigationRoutePaths.map((route, index) => (
          <List.Item key={index}>
              <NavLink to={route} label={route.toUpperCase()} />
          </List.Item>
        ))
        }
      </List>
      <List>
        <List.Item>
          <SwitchLanguageButton />
        </List.Item>
        <List.Item>
          <ThemeButton />
        </List.Item>
      </List>
    </nav>
  )
};

export default DesktopNavigationBar;
