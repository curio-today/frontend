"use server";

import { AvailableRoutePath } from "@/types/navigation";
import { isMobile } from "@/utils/isMobile";
import dynamic from "next/dynamic";

export type NavigationBarProps = {
  navigationLinks: AvailableRoutePath[];
};

const MobileNavigationBar = dynamic(() => import("./mobile/"));
const DesktopNavigationBar = dynamic(() => import("./desktop/"));

export default async function NavigationBar() {
  const headers: NavigationBarProps["navigationLinks"] = [
    "amazes",
    "amuses",
    "informs",
    "inspires",
  ];

  if (await isMobile()) {
    return <MobileNavigationBar navigationLinks={headers} />;
  }

  return <DesktopNavigationBar navigationLinks={headers} />;
}
