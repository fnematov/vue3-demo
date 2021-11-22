import {getData} from "@/services/request";
import {RequestParams} from "@/types/RequestParams";
import {PageableResponse} from "@/types/PageableResponse";

export async function loadData<T>(url: string, params: RequestParams): Promise<PageableResponse<T>> {
    const users = await getData<T[]>(url);
    if (!params.page) params.page = 1;
    if (!params.perPage) params.perPage = 15;

    return {
        totalItems: users.length,
        totalPages: Math.ceil(users.length / params.perPage),
        items: users.slice((params.page - 1) * params.perPage, params.page * params.perPage),
    }
}
