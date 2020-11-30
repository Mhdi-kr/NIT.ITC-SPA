export default {
    head: {
        title: 'view',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    axios: {
        // TODO base url
        baseURL: 'http://curli.ir:8080/api/v1/',
    },
    router: {
        middleware: ['auth'],
    },
    auth: {
        redirect: {
            login: '/user/login',
            logout: '/user/logout',
            callback: '/user/login',
            home: '/user/panel/overview',
        },
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: '/user/login',
                        method: 'post',
                        propertyName: 'user.token',
                    },
                    // logout: { url: '/api/auth/logout', method: 'post' },
                    user: { url: '/user/me', method: 'get', propertyName: false },
                },
                tokenRequired: true,
                tokenType: 'Bearer',
                globalToken: true,
            },
        },
    },
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '@/assets/global.scss',
        '@/assets/animations.scss',
        '@/assets/gradients.scss',
    ],
    plugins: ['@/plugins/element-ui'],
    components: true,
    buildModules: [],
    modules: [
        '@nuxtjs/auth',
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
    ],
    axios: {},
    build: {
        transpile: [/^element-ui/],
    },
}