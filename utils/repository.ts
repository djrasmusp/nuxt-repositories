import type { NitroFetchRequest, $Fetch } from 'nitropack'

export const repository = <T> (fetch: $Fetch<T, NitroFetchRequest>, options = {}) => ({
    async getIndex(): Promise<any> {
        return fetch<any>('/umbraco/delivery/api/v2/content/item/', {
            ...options
        })
    },

    async getTest(node: string = ''): Promise<any> {
        return fetch<any>('/umbraco/delivery/api/v2/content/item/' + node, {
            ...options
        })
    }
})