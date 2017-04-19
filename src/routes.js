/*jshint esversion: 6 */ /*jshint -W030 */

export default [

    {
        path: '/about/',
        component: require('./assets/vue/pages/about.vue')
    }, {
        path: '/todo/',
        component: require('./assets/vue/todo/todoFirebase.vue')
    }, {
        path: '/form/',
        component: require('./assets/vue/pages/form.vue')
    }, {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: require('./assets/vue/pages/dynamic-route.vue')
    }
];
