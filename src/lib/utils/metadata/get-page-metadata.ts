import { AvailableRoutePath } from "@/lib/types/navigation";
import { Metadata as MetadataConfig } from "@@/metadata.config";
import { Metadata } from "next";

type Params = {
    pageName: AvailableRoutePath | (string & {}),
    metadata: {
        description: string,
        keywords: Metadata["keywords"],
        locale: string,
    }
}

export async function getPageMetadata({
    pageName,
    metadata,
}: Params): Promise<Metadata> {
    const title = `${MetadataConfig.prefix} ${MetadataConfig.delimiter} ${pageName}`;

    return {
        title,
        openGraph: {
            title,
            description: metadata.description,            
            siteName: MetadataConfig.siteName,
            locale: metadata.locale,
        },
        ...metadata
    };
}