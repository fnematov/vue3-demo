import {RequestParams} from "@/types/RequestParams";

export interface UserRequestParams extends RequestParams {
    id?: number | null;
    firstName?: string | null;
    lastName?: string | null;
    gender?: string | null;
}
