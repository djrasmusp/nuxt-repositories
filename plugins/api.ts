const loading = ref<boolean>(true);
export default defineNuxtPlugin((nuxtApp) => {
    const api = $fetch.create({
        baseURL: 'http://localhost:59594'
    })

    return {
        provide: {
            api
        }
    }
})
