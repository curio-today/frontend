import { Api } from "@/configs"
import Primitive from "./primitive"

export type QueryParams = Partial<{
    [K in keyof typeof Api.query.stringfier]: Primitive;
}>

