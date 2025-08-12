import { CheckboxOptionProps } from "../parts/CheckboxOption";
import { ListProps } from "@/components/layout/List";

export type CheckboxProps = {
    options: CheckboxOptionProps[];
} & Partial<ListProps>;

