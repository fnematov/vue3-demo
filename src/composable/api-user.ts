import {PageableResponse} from "@/types/PageableResponse";
import {User} from "@/types/User";
import {onMounted, reactive, ref, toRefs} from "vue";
import {loadUsers} from "@/repositories/user";
import {UserRequestParams} from "@/types/UserRequestParams";

export function apiUser(initialLoading: boolean = false) {
    let loading = ref(initialLoading);
    let params: UserRequestParams = reactive({
        page: 1,
        perPage: 15
    })
    const state: PageableResponse<User> = reactive({
        items: [],
        totalItems: 0,
        totalPages: 0
    });

    async function get() {
        try {
            loading.value = true
            const users = await loadUsers(params);
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
