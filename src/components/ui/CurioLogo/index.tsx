"use client"

import { Icon } from "@/components/ui/Icon";
import Link from "next/link";


export const CurioLogo = () => {
    return (
        <Link href="/">
            <Icon src="/logos/curio.webp" alt="curio-logotype" style={{
                width: "clamp(8vw, 8rem, 10rem)",
                height: "50px"
            }} />
        </Link>
    )
}