import {PageableResponse} from "@/types/PageableResponse";
import {onMounted, reactive, ref, toRefs} from "vue";
import {Company} from "@/types/Company";
import {loadCompanies} from "@/repositories/company";
import {CompanyRequestParams} from "@/types/CompanyRequestParams";

export function apiCompany(initialLoading: boolean = false) {
    let loading = ref(initialLoading);
    let params: CompanyRequestParams = reactive({
        page: 1,
        perPage: 15
    })
    let state: PageableResponse<Company> = reactive({
        items: [],
        totalItems: 0,
        totalPages: 0
    });

    async function get() {
        try {
            loading.value = true
            const users = await loadCompanies(params);
            state.items = users.items;
            state.totalPages = users.totalPages;
        } catch (e) {
        } finally {
            loading.value = false;
        }
    }

    onMounted(() => {
        get().then();
    })

    return {
        ...toRefs(state),
        get,
        loading,
        params
    };
}
