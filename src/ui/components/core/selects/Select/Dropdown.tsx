import styles from "./styles/Select.module.css";

import Option from "./Option";
import SearchInput from "./SearchInput";


import { Container } from "@primitives";
import { useSelect } from "./SelectContext";

type DropdownProps = {
    focusedIndex: number | null;
    value: string | number | null;
    inputRef: React.RefObject<HTMLInputElement | null>;
    hasSearch: boolean;
    onItemSelected: (option: string) => void;
    onItemHovered: (index: number) => void;
    onSearchChanged: (value: string) => void;
};

const Dropdown = ({
    onSearchChanged: onSearchChange,
    focusedIndex,
    onItemSelected: onOptionSelect,
    onItemHovered: onOptionHover,
    value,
    inputRef,
    hasSearch,
}: DropdownProps) => {
    const { searchTerm, filteredItems } = useSelect();

    return (
        <Container id="custom-select-listbox" role="listbox" className={styles.dropdown}>
            {hasSearch &&
                <SearchInput 
                    value={searchTerm} 
                    onChange={onSearchChange} 
                    inputRef={inputRef} 
                />
            }

            <Container className={styles.optionsList}>
                {filteredItems ? (
                    filteredItems.map((option, index) => {
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
            </Container>
        </Container>
    );
};

export default Dropdown;