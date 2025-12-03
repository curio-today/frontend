import { cache } from "react";

export const fetchWithCache = cache(fetch);

export default cache(fetch);