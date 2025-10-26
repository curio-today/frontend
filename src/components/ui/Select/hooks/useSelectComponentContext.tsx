import { useContext } from "react";
import { SelectContext } from "../contexts/SelectContext";

export const useSelectComponentContext = () => useContext(SelectContext)

export default useSelectComponentContext;