"use server";

import { AvailableRoutePath } from "@/types/navigation";
import { isMobile } from "@/utils/isMobile";
import NavigationBarProvider from "@/providers/NavigationBarProvider";

import dynamic from "next/dynamic";



export type NavigationBarProps = {
  navigationLinks: AvailableRoutePath[];
};

const MobileNavigationBar = dynamic(() => import("./mobile/"), {
  ssr: true,
  loading: () => <h1>Loading...</h1>
});
const DesktopNavigationBar = dynamic(() => import("./desktop/"), {
  ssr: true,
  loading: () => <h1>Loading...</h1>
});

export default async function NavigationBar() {
  return (
    <NavigationBarProvider>
        {await isMobile() ? null : <DesktopNavigationBar /> }
    </NavigationBarProvider>
  )
}
