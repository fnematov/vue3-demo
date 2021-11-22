import {PageableResponse} from "@/types/PageableResponse";
import {onMounted, reactive, ref, toRefs} from "vue";
import {RequestParams} from "@/types/RequestParams";
import {loadData} from "@/repositories/data";

export function api<T>(url: string, initialLoading: boolean = false) {
    let loading = ref(initialLoading);
    let params: RequestParams = reactive({
        page: 1,
        perPage: 15
    })
    const state: PageableResponse<T> = reactive({
        items: [],
        totalItems: 0,
        totalPages: 0
    });

    async function get() {
        try {
            loading.value = true
            const users = await loadData<T>(url, params);
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
