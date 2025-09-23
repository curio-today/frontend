"use client";

import { useNavigationBar } from "@/hooks/useNavigationBar";
import styles from "./Desktop.module.css";

import { NavigationBarActionButtons, NavigationBarLinks } from "./components";
import CurioLogo from "@/components/branding/CurioLogo";

const DesktopNavigationBar = () => {
  const { navigationLinks } = useNavigationBar();

  return (
    <nav className={styles.navBar}>
      <CurioLogo />
      <NavigationBarLinks navigationLinks={navigationLinks} />
      <NavigationBarActionButtons />
    </nav>
  );
};

export default DesktopNavigationBar;
