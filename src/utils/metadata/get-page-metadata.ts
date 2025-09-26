import { AvailableRoutePath } from "@/types/navigation";
import { Metadata as MetadataConfig } from "@/configs";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Params = {
    pageName: string,
    metadata: Omit<Metadata, "title">
}

export async function getPageMetadata({
    pageName,
    metadata,
}: Params): Promise<Metadata> {

    return {
        title: `${MetadataConfig.siteName} ${MetadataConfig.delimiter} ${pageName}`,
        ...metadata
    };
}