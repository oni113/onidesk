import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoPage from '@/components/TodoPage'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
    //mode : 'history',
    routes: [
        {
            path : '*',
            redirect : '/login'
        },
        {
            path: '/',
            redirect : '/login'
        },
        {
            path : '/todos',
            name : 'TodoPage',
            component : TodoPage,
            meta : {
                requiresAuth : true
            }
        },
        {
            path : '/login',
            name : 'Login',
            component : Login
        },
        {
            path : '/signup',
            name : 'SignUp',
            component : SignUp
        }
    ]
})
