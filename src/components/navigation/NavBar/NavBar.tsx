import dynamic from "next/dynamic";

import { NavLinkData } from "@/components/navigation/NavBar/data";
import { Server_isMobile } from "@/lib/Platform";

const Mobile = dynamic(() => import("./mobile"));
const Desktop = dynamic(() => import("./desktop"));


async function NavBar() {
    return await Server_isMobile() ? <Mobile data={NavLinkData}/> : <Desktop data={NavLinkData}/>;
}

export default NavBar;