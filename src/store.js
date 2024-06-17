import { reactive } from 'vue'

export const store = reactive({
    isBiggerCursor: false,
    isCursorHidden: false,
    loading: true,
    base_api_url: 'http://127.0.0.1:8000',
})
