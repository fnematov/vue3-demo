import {PageRequestParams} from "@/types/PageRequestParams";

export interface UserRequestParams extends PageRequestParams {
    id?: number | null;
    firstName?: string | null;
    lastName?: string | null;
    gender?: string | null;
}
