import { Metadata as MetadataConfig } from "@/configs";
import { AvailableRoutePath } from "@/types/navigation";
import { Metadata } from "next";

export async function getStaticMetadata(routePath: AvailableRoutePath): Promise<Metadata> {
    const metadata = MetadataConfig.static[routePath];
    
    if (!metadata) {
        throw Error("Selected route path is not available in your metadata config (@/configs/metadata.ts). Implement selected routepath to metadata config")
    }
    
    return metadata;
}