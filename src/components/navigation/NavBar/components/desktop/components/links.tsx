"use client"

import styles from "./links.module.css";
import { NavBarProps } from "@/components/navigation/NavBar";
import Text from "@/components/ui/Text";
import NavLink from "@/components/navigation/NavLink";

import { motion } from "framer-motion";
import { useState, useTransition, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Namespaces } from "@/configs/translation.config";

const itemVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Links = ({ headings }: NavBarProps) => {
    const [visibleItems, setVisibleItems] = useState<Array<typeof headings[0]>>([]);
    const [isPending, startTransition] = useTransition();
    const t = useTranslations(Namespaces.messages);

    useEffect(() => {
        startTransition(() => {
            setVisibleItems(headings);
        });
    }, [headings]);

    return (
        <nav aria-label="Navigation links" className={styles.links}>
            {visibleItems.map((link, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                >
                    <NavLink href={link.href}>
                        <Text variant="p">{link.label}</Text>
                    </NavLink>
                </motion.div>
            ))}

            {isPending && <div>{t("loading")}</div>}
        </nav>
    );
};

export default Links;