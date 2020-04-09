import { Ref } from '@vue/composition-api'
export type HttpBase = {
    data: Ref<any>;
    loading: Ref<boolean>;
    error: Ref<any>;
    fetch: () => Promise<any>;
}