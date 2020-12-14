export default {
    head: {
        title: 'itc.nit.ac.ir',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    modules: ['@nuxtjs/axios', '@nuxtjs/auth', '@nuxtjs/pwa'],
    router: {
        // middleware: ['auth'],
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
                    user: false,
                },
                tokenRequired: true,
                tokenType: 'Bearer',
                globalToken: true,
                autoFetchUser: false,
            },
        },
    },
    axios: {
        // TODO base url
        baseURL: 'https://curli.ir:9191/api/v1',
    },
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '@/assets/global.scss',
        '@/assets/animations.scss',
        '@/assets/gradients.scss',
        '@/assets/typography.scss',
        '@/assets/responsive.scss',
    ],
    plugins: ['@/plugins/element-ui'],
    components: true,
    buildModules: [],
    build: {
        transpile: [/^element-ui/],
    },
}