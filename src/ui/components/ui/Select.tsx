"use client"

import { useGate } from "@/hooks/useGate"
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";

export type SelectProps<TOption extends string> = {
    options: TOption[],
    hasSearch?: boolean,
    defaultOption: TOption,
    placeholder?: string,
    disabled?: boolean,
    
    onSelect: (option: TOption) => void,
}


export const Select = <TOption extends string>({ options, disabled, onSelect }: DropdownProps<TOption>) => {
    const search = useSearch(options);
    const gate = useGate();
    const cursor = useCursor(options);

    const [focusedIndex, setFocusedIndex] = useState<number | null>(null) 


    const selectRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            gate.close();
            setFocusedIndex(null);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    const handleOptionSelect = useCallback((option: TOption) => {
        onSelect(option);
        gate.close();
        setFocusedIndex(null);
    }, [onSelect]);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            if (disabled) return;

            if (!gate.isOpen && (event.key === "Enter" || event.key === " ")) {
                gate.open();
                
                event.preventDefault();
                setTimeout(() => inputRef.current?.focus(), 0);
                
                return;
            }

            if (event.key === "Escape") {
                gate.close();
                search.clear();
                
                setFocusedIndex(null);
               
                return;
            }

            if (!gate.isOpen) return;

            switch (event.key) {
                case "ArrowDown":
                    event.preventDefault();
                    cursor.moveDown();
                    break;
                case "ArrowUp":
                    event.preventDefault();
                    cursor.moveUp();
                    break;
                case "Enter":
                    event.preventDefault();
                    if (focusedIndex !== null) {
                        handleOptionSelect(options[focusedIndex]);
                    }
                    break;
            }
        }, [disabled, options, focusedIndex, gate.isOpen, handleOptionSelect]);


    return (
        <div>This component is in developing</div>
    )
}