import { Navigation } from "@/configs/navigation";
import { ExtractPaths } from "../generics/extract-paths";


export type AvailableRoutePath = ExtractPaths<typeof Navigation.routes>;
