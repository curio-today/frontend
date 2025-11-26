"use client";

import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
    KeyboardEvent,
} from "react";

import styles from "./styles/Select.module.css";

import Dropdown from "./Dropdown";
import Trigger from "./Trigger";
import { Container } from "@primitives";
import { PropsWithDisabled } from "@/lib/types/ui/PropsWithDisabled";

import { SelectProvider } from "./SelectContext";

export type SelectProps = PropsWithDisabled<{
    items: Record<string, string>;
    selectedItem: string;
    
    hasSearch?: boolean;
    placeholder?: string;
    
    onChange: (option: string) => void;
}>;


const Select = ({
    items,
    selectedItem,
    placeholder = "Select an option...",
    disabled = false,
    hasSearch = true,
    onChange,
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("engl");
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    const selectRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredItems: string[] = Object.entries(items)
        .filter(([key, value]) => value.toLowerCase().includes(searchTerm.toLowerCase()))
        .flatMap(([key, value]) => value)


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                resetState()
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const resetState = () => {
        setIsOpen(false);
        setSearchTerm("");
        setFocusedIndex(null);
    }

    const handleOnItemSelected = useCallback(
        (item: string) => {
            onChange(item);
            resetState();
        },
        [onChange]
    );

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            if (disabled) return;

            if (!isOpen && (event.key === "Enter" || event.key === " ")) {
                setIsOpen(true);
                event.preventDefault();
                setTimeout(() => inputRef.current?.focus(), 0);
                return;
            }

            if (event.key === "Escape") {
                resetState();
                return;
            }

            if (!isOpen) return;

            switch (event.key) {
                case "ArrowDown":
                    event.preventDefault();
                    setFocusedIndex((prev) => {
                        if (prev === null || prev === filteredItems.length - 1) return 0;
                        return prev + 1;
                    });
                    break;
                case "ArrowUp":
                    event.preventDefault();
                    setFocusedIndex((prev) => {
                        if (prev === null || prev === 0) return filteredItems.length - 1;
                        return prev - 1;
                    });
                    break;
                case "Enter":
                    event.preventDefault();
                    if (focusedIndex !== null) {
                        handleOnItemSelected(filteredItems[focusedIndex]);
                    }
                    break;
            }
        },
        [disabled, filteredItems, focusedIndex, isOpen, handleOnItemSelected]
    );

    const toggleDropdown = useCallback(() => {
        if (disabled) return;

        setIsOpen((prev) => {
            const newState = !prev;
            if (newState) {
                setTimeout(() => inputRef.current?.focus(), 0);
            } else {
                setSearchTerm("");
                setFocusedIndex(null);
            }
            return newState;
        });
    }, [disabled]);

    return (
        <SelectProvider value={{
            searchTerm: searchTerm,
            filteredItems: filteredItems,
            selectedItem: selectedItem
        }}>
            <Container
                ref={selectRef}
                className={styles.container}
                tabIndex={disabled ? -1 : 0}
                onKeyDown={handleKeyDown}
                role="combobox"
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                aria-disabled={disabled}
                aria-controls="custom-select-listbox"
                aria-activedescendant={
                    selectedItem ? `custom-select-option-${selectedItem}` : undefined
                }
            >
                <Trigger
                    placeholder={placeholder}
                    open={isOpen}
                    disabled={disabled}
                    onToggle={toggleDropdown}
                />

                {isOpen && !disabled && (
                    <Dropdown
                        onSearchChanged={setSearchTerm}
                        focusedIndex={focusedIndex}
                        onItemSelected={handleOnItemSelected}
                        onItemHovered={setFocusedIndex}
                        value={selectedItem}
                        inputRef={inputRef}
                        hasSearch={hasSearch}
                    />
                )}
            </Container>
        </SelectProvider>
    );
};

export default Select;