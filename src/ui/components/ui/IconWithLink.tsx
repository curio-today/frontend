import Icon, { IconProps } from "@/ui/components/ui/Icon";
import { AvailableRoutePath } from "@/lib/types/navigation";
import Link from "next/link";

export type IconWithLinkProps = {
    href: AvailableRoutePath,
} & IconProps

export const IconWithLink = ({ href, ...iconProps }: IconWithLinkProps) => {
    return (
        <Link href="/">
            <Icon {...iconProps} />
        </Link>
    )
}

export default IconWithLink