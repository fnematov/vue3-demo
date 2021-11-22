import {User} from "@/types/User";
import {getData} from "@/services/request";
import {RequestParams} from "@/types/RequestParams";
import {PageableResponse} from "@/types/PageableResponse";

export async function loadUsers(params: RequestParams): Promise<PageableResponse<User>> {
    const users = await getData<User[]>('users.json');
    if (!params.page) params.page = 1;
    if (!params.perPage) params.perPage = 15;

    return {
        totalItems: users.length,
        totalPages: Math.ceil(users.length / params.perPage),
        items: users.slice((params.page - 1) * params.perPage, params.page * params.perPage),
    }
}
