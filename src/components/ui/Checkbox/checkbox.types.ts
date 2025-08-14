import { CheckboxOptionProps } from "./checkbox-option";
import { Include, Options } from "@/shared/utility.types";
import { ComponentProps } from "react";
import { ListProps } from "@/components/layout/List";

export type CheckboxProps = {
    options: Options<CheckboxOptionProps>;
} & ComponentProps<"input"> & Include<ListProps, "listProps">;