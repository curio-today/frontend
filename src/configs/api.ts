import { ApiConfig } from "@/types/configs";

export const Api = {
    baseUrl: "https://admin.curio.today/api",
    
    endpoints: {
        posts: {
            list: "/posts",
            detail: (id) => `/posts/${id}`
        },
    },

    query: {
        stringfier: {
            limit: (value) => `limit=${value}`,
            locale: (value) => `locale=${value}`,
            page: (value) => `page=${value}`,
            slug: (value) => `where[slug][equals]=${value}`,
            _status: (value) => `where[_status][equals]=${value}`,
            heading: (value) => `where[heading][equals]=${value}`
        }
    }
} as const satisfies ApiConfig;
 
export default Api;