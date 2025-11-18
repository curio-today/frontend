import styles from "./styles/Dropdown.module.css";

import Option from "./Option";
import SelectSearch from "./SelectSearch";
import { Option as OptionType } from "./Select";
import { ComponentProps } from "react";
import { useSelectComponentContext } from "./hooks";

type SelectDropdownProps = {
    filteredOptions: OptionType[];
    onSearchChange: (value: string) => void;
    focusedIndex: number | null;
    onOptionSelect: (option: OptionType) => void;
    onOptionHover: (index: number) => void;
    value: string | number | null;

    hasSearch: boolean;
}

const SelectDropdown = ({ filteredOptions, onSearchChange, focusedIndex, onOptionSelect, onOptionHover, value, hasSearch }: SelectDropdownProps) => {
    const { inputRef, searchTerm } = useSelectComponentContext();

    return (
        <div role="listbox" className={styles.dropdown}>
            {hasSearch && 
                <SelectSearch term={searchTerm} onChange={onSearchChange} inputRef={inputRef} /> 
            }
            { filteredOptions.length > 0 : }
            
        </div>
    );
};

type OptionsListProps = {
    options: OptionType[]
}

const OptionsList = ({ options }: OptionsListProps) => {
    return (
        <div className={styles["options-list"]}>
                {options.length > 0 ? (
                    options.map((option, index) => {
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
                    <div className={styles["options-list.empty"]}>No options found</div>
                )}
            </div>
    )
}


export default SelectDropdown;

