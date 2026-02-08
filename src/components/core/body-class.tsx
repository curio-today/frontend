"use client";

import { useEffect } from "react";

type BodyClassProps = {
    className: string;
}

/**
 * A declarative way to add classes to the <body> tag.
 * Automatically removes the classes when the component unmounts.
 */
export function BodyClass({ className }: BodyClassProps) {
    useEffect(() => {
        const classes = className.split(" ").filter(Boolean);
        if (classes.length === 0) return;

        document.body.classList.add(...classes);

        return () => {
            document.body.classList.remove(...classes);
        };
    }, [className]);

    return null;
}
