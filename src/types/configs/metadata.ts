import { Metadata } from "next";
import { AvailableRoutePath } from "../navigation";

export type MetadataConfig = {
    prefix: string,
    siteName: string,
    delimiter: string,

    static: Partial<{
        [route in AvailableRoutePath]: Metadata        
    }>
}

export default MetadataConfig;