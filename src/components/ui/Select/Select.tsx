"use client";

import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
    KeyboardEvent,
} from "react";

import styles from "./Select.module.css";

import Dropdown from "./parts/Dropdown";
import Trigger from "./parts/Trigger";
import { Option as OptionType } from "./Select";

export type Option = {
    label: string;
    value: string | number;
};

export type SelectProps = {
    options: Option[];
    hasSearch?: boolean;
    value: string | number | null;
    onChange: (option: Option) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
};

const Select = ({
                    options,
                    value,
                    onChange,
                    placeholder = "Select an option...",
                    disabled = false,
                    hasSearch = true,
                    className = "",
                }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

    const selectRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const selectedOption = options.find((option) => option.value === value) || null;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchTerm("");
                setFocusedIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleOptionSelect = useCallback(
        (option: OptionType) => {
            onChange(option);
            setIsOpen(false);
            setSearchTerm("");
            setFocusedIndex(null);
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
                setIsOpen(false);
                setSearchTerm("");
                setFocusedIndex(null);
                return;
            }

            if (!isOpen) return;

            switch (event.key) {
                case "ArrowDown":
                    event.preventDefault();
                    setFocusedIndex((prev) => {
                        if (prev === null || prev === filteredOptions.length - 1) return 0;
                        return prev + 1;
                    });
                    break;
                case "ArrowUp":
                    event.preventDefault();
                    setFocusedIndex((prev) => {
                        if (prev === null || prev === 0) return filteredOptions.length - 1;
                        return prev - 1;
                    });
                    break;
                case "Enter":
                    event.preventDefault();
                    if (focusedIndex !== null) {
                        handleOptionSelect(filteredOptions[focusedIndex]);
                    }
                    break;
            }
        },
        [disabled, filteredOptions, focusedIndex, isOpen, handleOptionSelect]
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
        <div
            ref={selectRef}
            className={`${styles.container} ${className}`}
            tabIndex={disabled ? -1 : 0}
            onKeyDown={handleKeyDown}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-disabled={disabled}
            aria-controls="custom-select-listbox"
            aria-activedescendant={
                selectedOption ? `custom-select-option-${selectedOption.value}` : undefined
            }
        >
            <Trigger
                selectedOption={selectedOption}
                placeholder={placeholder}
                disabled={disabled}
                isOpen={isOpen}
                onToggle={toggleDropdown}
            />

            {isOpen && !disabled && (
                <Dropdown
                    filteredOptions={filteredOptions}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    focusedIndex={focusedIndex}
                    onOptionSelect={handleOptionSelect}
                    onOptionHover={setFocusedIndex}
                    value={value}
                    inputRef={inputRef}
                    hasSearch={hasSearch}
                />
            )}
        </div>
    );
};

export default Select;
