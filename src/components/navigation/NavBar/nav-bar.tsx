import dynamic from "next/dynamic";

import { Mobile_NavLinkData, Desktop_NavLinkData } from "@/configs/nav.config";
import { Server_isMobile } from "@/lib/Platform";

const Mobile = dynamic(() => import("./components/mobile"));
const Desktop = dynamic(() => import("./components/desktop/"));


async function NavBar() {
    return await Server_isMobile() ? <Mobile data={Mobile_NavLinkData}/> : <Desktop headings={Desktop_NavLinkData}/>;
}

export default NavBar;