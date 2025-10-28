import { getPageMetadataWithTranslation } from "@/utils/get-page-metadata-with-translation";
import { Metadata } from "next";
import SearchInput from "@/components/ui/SearchInput"


export async function generateMetadata(): Promise<Metadata> {
    const metadata = await getPageMetadataWithTranslation("feed");
    if (metadata) {
        return metadata;
    }

    return {};
}



export default async function SearchPage() {
    const searchQuery: string = "";

    return (
        <main>
            <SearchInput defaultValue={searchQuery}/>
        </main>
    )
}