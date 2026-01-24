"use client"

import { useEffect, useState } from "react";
import { ShareDialog } from "../core/share-dialog";

/**
 * ShareHandler is a client-side component that monitors user behavior to trigger
 * a share prompt. It detects when a user switches tabs, blurs the window, or
 * attempts to take a screenshot/open dev tools via keyboard shortcuts.
 * 
 * @returns {JSX.Element | null} The ShareItem component if triggered, otherwise null.
 */
export function ShareHandler() {
    const [open, setOpen] = useState(false);

    /**
     * Sets the share prompt state to open.
     */
    function showShareItem() {
        setOpen(true);
    }

    useEffect(() => {
        /**
         * Handles window blur events (e.g., user clicking outside the browser).
         */
        const onBlur = () => showShareItem();

        /**
         * Handles visibility changes (e.g., user switching tabs or minimizing the browser).
         */
        const onVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                showShareItem();
            }
        };

        /**
         * Handles specific key presses that might indicate an intent to capture or inspect content.
         * @param {KeyboardEvent} e - The keyboard event.
         */
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "PrintScreen" || e.key === "F12") {
                showShareItem();
            }
        };

        window.addEventListener("blur", onBlur);
        document.addEventListener("visibilitychange", onVisibilityChange);
        document.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("blur", onBlur);
            document.removeEventListener("visibilitychange", onVisibilityChange);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, []);

    return open ? <ShareDialog /> : null;
}
