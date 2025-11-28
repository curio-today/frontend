import { LayoutContext } from "@/contexts/layout-context";
import { useContext } from "react";

export const useLayout = () => useContext(LayoutContext);