import dynamic from "next/dynamic";

import { Mobile_NavLinkData, Desktop_NavLinkData } from "@/consts/NavLinkData";
import { Server_isMobile } from "@/lib/Platform";

const Mobile = dynamic(() => import("./mobile"));
const Desktop = dynamic(() => import("./desktop"));


async function NavBar() {
    return await Server_isMobile() ? <Mobile data={Mobile_NavLinkData}/> : <Desktop data={Desktop_NavLinkData}/>;
}

export default NavBar;