import dynamic from "next/dynamic";

import { headers } from "next/headers";
import { NavLinkData } from "@/components/navigation/NavBar/data";

const Mobile = dynamic(() => import("./mobile"));
const Desktop = dynamic(() => import("./desktop"));



async function NavBar() {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";

    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);

    return isMobile ? <Mobile data={NavLinkData}/> : <Desktop data={NavLinkData}/>;
}

export default NavBar;