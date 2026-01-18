import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, type HTMLMotionProps } from "motion/react"
import * as React from "react"

import { Separator } from "@/components/core/separator"
import { cn } from "@/lib/utils"

const MotionSeparator = motion(Separator)

function ItemGroup({ className, ...props }: HTMLMotionProps<"div">) {
    return (
        <motion.div
            role="list"
            data-slot="item-group"
            className={cn("group/item-group flex flex-col", className)}
            {...props}
        />
    )
}

function ItemSeparator({
    className,
    ...props
}: React.ComponentProps<typeof MotionSeparator>) {
    return (
        <MotionSeparator
            data-slot="item-separator"
            orientation="horizontal"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={cn("my-0", className)}
            {...props}
        />
    )
}

const itemVariants = cva(
    "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                outline: "border-border",
                muted: "bg-muted/50",
            },
            size: {
                default: "p-4 gap-4 ",
                sm: "py-3 px-4 gap-2.5",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

type ItemProps = HTMLMotionProps<"div"> &
    VariantProps<typeof itemVariants> & {
        asChild?: boolean
    }

function Item({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
}: ItemProps) {
    const classes = cn(itemVariants({ variant, size, className }))

    const animationProps = {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 8 },
        transition: { duration: 0.25, ease: "easeOut" as const },
    }

    if (asChild) {
        const MotionSlot = motion(Slot)
        return (
            <MotionSlot
                data-slot="item"
                data-variant={variant}
                data-size={size}
                className={classes}
                {...(animationProps as any)}
                {...props}
            >
                {props.children}
            </MotionSlot>
        )
    }

    return (
        <motion.div
            data-slot="item"
            data-variant={variant}
            data-size={size}
            className={classes}
            {...animationProps}
            {...props}
        />
    )
}

const itemMediaVariants = cva(
    "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
                image:
                    "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function ItemMedia({
    className,
    variant = "default",
    ...props
}: HTMLMotionProps<"div"> & VariantProps<typeof itemMediaVariants>) {
    return (
        <motion.div
            data-slot="item-media"
            data-variant={variant}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className={cn(itemMediaVariants({ variant, className }))}
            {...props}
        />
    )
}

function ItemContent({ className, ...props }: HTMLMotionProps<"div">) {
    return (
        <motion.div
            data-slot="item-content"
            initial={{ opacity: 0, x: 4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className={cn(
                "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
                className
            )}
            {...props}
        />
    )
}

function ItemTitle({ className, ...props }: HTMLMotionProps<"div">) {
    return (
        <motion.div
            data-slot="item-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className={cn(
                "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
                className
            )}
            {...props}
        />
    )
}

function ItemDescription({ className, ...props }: HTMLMotionProps<"p">) {
    return (
        <motion.p
            data-slot="item-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.25 }}
            className={cn(
                "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
                "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
                className
            )}
            {...props}
        />
    )
}

function ItemActions({ className, ...props }: HTMLMotionProps<"div">) {
    return (
        <motion.div
            data-slot="item-actions"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className={cn("flex items-center gap-2", className)}
            {...props}
        />
    )
}

function ItemHeader({ className, ...props }: HTMLMotionProps<"div">) {
    return (
        <motion.div
            data-slot="item-header"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className={cn(
                "flex basis-full items-center justify-between gap-2",
                className
            )}
            {...props}
        />
    )
}

function ItemFooter({ className, ...props }: HTMLMotionProps<"div">) {
    return (
        <motion.div
            data-slot="item-footer"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className={cn(
                "flex basis-full items-center justify-between gap-2",
                className
            )}
            {...props}
        />
    )
}

export {
    Item,
    ItemMedia,
    ItemContent,
    ItemActions,
    ItemGroup,
    ItemSeparator,
    ItemTitle,
    ItemDescription,
    ItemHeader,
    ItemFooter,
}
