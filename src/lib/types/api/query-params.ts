import { Api } from "@@/api.config"
import Primitive from "./primitive"

export type QueryParams = Partial<{
    [K in keyof typeof Api.query.stringfier]: Primitive;
}>

