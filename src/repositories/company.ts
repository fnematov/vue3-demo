import {getData} from "@/services/request";
import {Company} from "@/types/Company";
import {RequestParams} from "@/types/RequestParams";
import {PageableResponse} from "@/types/PageableResponse";

export async function loadCompanies(params: RequestParams): Promise<PageableResponse<Company>> {
    const companies = await getData<Company[]>('companies.json');
    if (!params.page) params.page = 1;
    if (!params.perPage) params.perPage = 15;

    return {
        totalItems: companies.length,
        totalPages: Math.ceil(companies.length / params.perPage),
        items: companies.slice((params.page - 1) * params.perPage, params.page * params.perPage),
    }
}
