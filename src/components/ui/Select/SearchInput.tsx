import styles from "./styles/Search.module.css";

import React from "react";

type SearchInputProps = {
    value: string;
    onChange: (value: string) => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
};

const SearchInput = ({ value, onChange, inputRef }: SearchInputProps) => {
    return (
        <div className={styles.searchWrapper}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Search options..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`${styles.searchInput} ${
                    document.activeElement === inputRef.current ? styles.searchInputFocus : ""
                }`}
                aria-label="Search options"
                autoComplete="off"
            />
        </div>
    );
};

export default SearchInput;
