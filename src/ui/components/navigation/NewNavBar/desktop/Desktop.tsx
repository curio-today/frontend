"use client";

import styles from "./Desktop.module.css";

import useNavigationBar from "@/ui/hooks/useNavigationBar";
import { NavigationBarActionButtons, NavigationBarLinks } from "./components";
import IconWithLink from "@/ui/components/primitives/IconWithLink";
import { List } from "@components/layout";
import NavLink from "../../NavLink";
import { Header } from "@typography";

const DesktopNavigationBar = () => {
  const { navigationRoutePaths } = useNavigationBar();

  return (
    <nav className={styles.navBar}>
      <IconWithLink icon="curio" href="/" size="gigantic" />
      <List className={styles.links} gap={"medium"}>
        {navigationRoutePaths.map((route, index) => (
          <List.Item key={index}>
              <NavLink to={route}>
                <Header variant="h2">{route}</Header>
              </NavLink>
          </List.Item>
        ))
        }
      </List>
      {/* <NavigationBarLinks navigationLinks={navigationLinks} /> */}
      {/* <NavigationBarActionButtons /> */}
    </nav>
  )
};

export default DesktopNavigationBar;
