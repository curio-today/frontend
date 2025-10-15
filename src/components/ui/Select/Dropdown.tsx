import React from "react";
import styles from "../Select.module.css";
import Option from "./parts/Option";
import SearchInput from "./parts/SearchInput";
import { Option as OptionType } from "./Select";

type DropdownProps = {
    filteredOptions: OptionType[];
    searchTerm: string;
    onSearchChange: (value: string) => void;
    focusedIndex: number | null;
    onOptionSelect: (option: OptionType) => void;
    onOptionHover: (index: number) => void;
    value: string | number | null;
    inputRef: React.RefObject<HTMLInputElement | null>;
    hasSearch: boolean;
};

const Dropdown = ({
                      filteredOptions,
                      searchTerm,
                      onSearchChange,
                      focusedIndex,
                      onOptionSelect,
                      onOptionHover,
                      value,
                      inputRef,
                      hasSearch,
                  }: DropdownProps) => {
    return (
        <div id="custom-select-listbox" role="listbox" className={styles.dropdown}>
            {hasSearch &&
                <SearchInput value={searchTerm} onChange={onSearchChange} inputRef={inputRef} />
            }

            <div className={styles.optionsList}>
                {filteredOptions.length > 0 ? (
                    filteredOptions.map((option, index) => {
                        const isSelected = option.value === value;
                        const isFocused = index === focusedIndex;
                        return (
                            <Option
                                key={option.value}
                                option={option}
                                isSelected={isSelected}
                                isFocused={isFocused}
                                onSelect={onOptionSelect}
                                onHover={() => onOptionHover(index)}
                            />
                        );
                    })
                ) : (
                    <div className={styles.noOptions}>No options found</div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
