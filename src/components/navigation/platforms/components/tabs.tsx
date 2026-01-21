import { Button, ButtonProps } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import { ComponentProps, ComponentType } from "react";

type TabsProps = ComponentProps<"header">;
type TabIcon = ComponentType<LucideProps>;

type TabsStateProps = {
    isSelected?: boolean
}

type TabsCustomizationProps = {
    icon: TabIcon,
    label: string,
}


type TabsButtonProps = TabsStateProps & TabsCustomizationProps & ButtonProps
type TabsCategoryItemProps = {
    title: string;
    href: string;
    description: string;
} & Pick<TabsCustomizationProps, "icon"> & TabsStateProps



export const Tabs = ({ className, children }: TabsProps) => {
    return (
        <header className={cn("p-1 bg-background w-full h-25 fixed flex bottom-0 left-0 z-50 items-center justify-between outline-solid outline-1", className)}>
            {children}
        </header>
    )
}

export const TabsButton = ({ children, label, icon: Icon, className, isSelected = false, ...props }: TabsButtonProps) => {
    return (
        <Button
            className={cn(className, "flex flex-col justify-center p-0 w-20 h-20", isSelected ? 'text-primary bg-accent' : 'text-secondary')}
            variant="link"
            disabled={isSelected}
            {...props}
        >
            {Icon && <Icon className="size-5" />}
            {label && <small className="text-xs">{label}</small>}
            {children}
        </Button>

    )
}


export const TabsCategoryItem = ({ href, title, description, isSelected = false, icon: Icon }: TabsCategoryItemProps) => {
    return (
        <Link href={href} className={cn("transition-colors gap-4 flex flex-row items-center w-full h-20 bg-accent p-4 rounded-md", isSelected ? "outline-solid outline-1 outline-primary bg-accent" : "")}>
            <Icon className={cn("transition-colors size-6", isSelected && "text-primary")} />
            <Separator orientation="vertical" />
            <div>
                <h1 className={cn("transition-colors text-xl", isSelected && "text-primary")}>{title}</h1>
                <h2 className="text-secondary text-sm">{description}</h2>
            </div>
        </Link>
    )
}
