const home_route = require('./pages/home/routes');
const route = [
    ...home_route,
    // {
    //              path: '/app1',
    //              microApp: 'app1',
    //            },
]
const routes = [
    {
        exact: true,
        path: '/',
        redirect: '/home'
    },
    {
        path: '/',
        component: '@/layouts/index',
        routes: route
    }
]
module.exports = routes;