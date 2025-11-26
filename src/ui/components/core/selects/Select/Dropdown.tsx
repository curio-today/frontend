import styles from "./styles/Select.module.css";

import Option from "./Option";
import SearchInput from "./SearchInput";

type DropdownProps = {
    filteredOptions: string[];
    searchTerm: string;
    onSearchChange: (value: string) => void;
    focusedIndex: number | null;
    onOptionSelect: (option: string) => void;
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
                        const isSelected = option === value;
                        const isFocused = index === focusedIndex;
                        return (
                            <Option
                                key={option}
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