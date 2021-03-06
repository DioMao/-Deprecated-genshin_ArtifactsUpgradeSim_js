const routes = [
    {
        path: '/',
        redirect: '/artifact-box'
    },
    {
        path: '/artifact-box',
        name: 'artifact-box',
        component: app.component('artifact-box'),
    },
    {
        path: '/artifact-:index',
        name: 'upgrade',
        component: app.component('artifact-upgrade'),
        props: true
    },
    // {
    //     path: '/artifactShow',
    //     name: '',
    //     component: app.component('artifact-show')
    // }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})