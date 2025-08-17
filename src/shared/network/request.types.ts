import { Asset } from "@/shared/network/asset.types";
import { Endpoint } from "@/shared/network/network.types";


export type FetchOptions = {
    endpoint: Endpoint,
    page: number;
    limit: number;
} & Pick<Asset, "_status">
