"use client";

import { useNavigationBar } from "@/hooks/useNavigationBar";
import styles from "./Desktop.module.css";

import { NavigationBarActionButtons, NavigationBarLinks } from "./components";
import IconWithLink from "@/ui/components/primitives/IconWithLink";

const DesktopNavigationBar = () => {
  const { navigationLinks } = useNavigationBar();

  return (
    <nav className={styles.navBar}>
      <IconWithLink icon="curio" href="/"/>
      <NavigationBarLinks navigationLinks={navigationLinks} />
      <NavigationBarActionButtons />
    </nav>
  
};

export default DesktopNavigationBar;
