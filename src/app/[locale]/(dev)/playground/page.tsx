import { fetchEndpoint } from "@/utils/api/fetch-endpoint";
import { redirect } from "next/navigation";

export default async function Playground() {
    const data = await fetchEndpoint({
        endpoint: "posts",
        view: "detail",
        id: "s"
    })
    
    console.log(data);

    return null;
}