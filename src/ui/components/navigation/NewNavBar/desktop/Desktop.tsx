"use client";

import styles from "./Desktop.module.css";

import useNavigationBar from "@/ui/hooks/useNavigationBar";
import IconWithLink from "@/ui/components/primitives/IconWithLink";
import { List } from "@components/layout";
import NavLink from "../../NavLink";
import { SwitchLanguageButton, ThemeButton } from "@primitives/buttons";
import { useTranslations } from "next-intl";

const DesktopNavigationBar = () => {
  const { navigationRoutes } = useNavigationBar();
  const t = useTranslations(`Metadata.pages`);
  
  const translatedRoutes = navigationRoutes.map(route => {
    return t(`${route.toLowerCase()}.name`);
  });

  console.log(translatedRoutes);
  
  return (
    <nav className={styles.navBar}>
      <IconWithLink icon="curio" href="/" size="gigantic" />
      <List className={styles.links} gap={"medium"}>
        {navigationRoutes.map((route, index) => (
          <List.Item key={index}>
              <NavLink to={route} label={translatedRoutes[index]} />
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
