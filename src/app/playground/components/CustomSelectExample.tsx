"use client"

import Select, { Option } from "@/components/ui/Select/";
import { useState } from "react";

export const CustomSelectExample = ({ hasSearch }: { hasSearch: boolean }) => {
    const [selected, setSelected] = useState<string | number | null>(null);

    const data: Option[] = [
        { value: "test1", label: "test1" },
        { value: "test2", label: "test2" },
        { value: "test3", label: "test3" },
        { value: "test4", label: "test4" },
        { value: "test5", label: "test5" },
        { value: "test6", label: "test6" },
        { value: "test7", label: "test7" },
        { value: "test8", label: "test8" },
        { value: "test9", label: "test9" },
        { value: "test10", label: "test10" },
        { value: "test11", label: "test11" },
        { value: "test12", label: "test12" },
        { value: "test13", label: "test13" },
        { value: "test14", label: "test14" },
        { value: "test15", label: "test15" },
        { value: "test16", label: "test16" },
        { value: "test17", label: "test17" },
        { value: "test18", label: "test18" },
        { value: "test19", label: "test19" },
        { value: "test20", label: "test20" },
        { value: "test21", label: "test21" },
        { value: "test22", label: "test22" },
        { value: "test23", label: "test23" },
        { value: "test24", label: "test24" },
        { value: "test25", label: "test25" },
        { value: "test26", label: "test26" },
        { value: "test27", label: "test27" },
        { value: "test28", label: "test28" },
        { value: "test29", label: "test29" },
        { value: "test30", label: "test30" },
        { value: "test31", label: "test31" },
        { value: "test32", label: "test32" },
        { value: "test33", label: "test33" },
        { value: "test34", label: "test34" },
        { value: "test35", label: "test35" },
        { value: "test36", label: "test36" },
        { value: "test37", label: "test37" },
        { value: "test38", label: "test38" },
        { value: "test39", label: "test39" },
        { value: "test40", label: "test40" },
        { value: "test41", label: "test41" },
        { value: "test42", label: "test42" },
        { value: "test43", label: "test43" },
        { value: "test44", label: "test44" },
        { value: "test45", label: "test45" },
        { value: "test46", label: "test46" },
        { value: "test47", label: "test47" },
        { value: "test48", label: "test48" },
        { value: "test49", label: "test49" },
        { value: "test50", label: "test50" }
    ];


    return (
        <Select options={data} onChange={({ value }) => {
            setSelected(value);
        }} value={selected} hasSearch={hasSearch}/>
        )
}