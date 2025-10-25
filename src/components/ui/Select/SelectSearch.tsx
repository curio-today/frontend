import styles from "./styles/Search.module.css";

import { RefObject } from "react";

type Props = {
    term: string;
    searchRef: RefObject<HTMLInputElement | null>;

    onChange: (value: string) => void;
};

const SelectSearch = ({ term, searchRef, onChange  }: Props) => {
    return (
        <div className={styles["search-wrapper"]}>
            <input
                ref={searchRef}
                type="text"
                placeholder="Search options..."
                value={term}
                onChange={(e) => onChange(e.target.value)}
                className={styles["search"]}
                aria-label="Search options"
                autoComplete="off"
            />
        </div>
    );
};

export default SelectSearch;
