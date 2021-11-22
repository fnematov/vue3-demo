import {PageRequestParams} from "@/types/PageRequestParams";

export interface CompanyRequestParams extends PageRequestParams {
    id?: number | null;
    companyName?: string | null;
    email?: string | null;
    countryCode?: string | null;
}
