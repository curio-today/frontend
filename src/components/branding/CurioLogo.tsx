"use client"

import { Icon } from "@/components/ui/Icon";
import Link from "next/link";


const CurioLogo = () => {
    return (
        <Link href="/">
            <Icon src="/logos/curio.webp" alt="curio-logotype" style={{
                width: "clamp(4vw, 6rem, 10rem)",
                height: "80px"
            }} />
        </Link>
    )
}

export default CurioLogo;