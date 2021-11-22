import {RequestParams} from "@/types/RequestParams";

export interface CompanyRequestParams extends RequestParams {
    id?: number | null;
    companyName?: string | null;
    email?: string | null;
    countryCode?: string | null;
}
