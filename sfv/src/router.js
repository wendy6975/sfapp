import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/tabbar/home.vue'
import News from './components/home/news.vue'
import Notes from './components/home/notes.vue'

import My from './components/tabbar/my.vue'
import Login from './components/tabbar/login.vue'
import Register from './components/tabbar/register.vue'
import Vip from './components/tabbar/vip.vue'
import Up from './components/home/up.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',redirect:'Home'},
        {path:'/Home',component:Home,children:[
            {path:'/Home/',component:News},
            {path:'/Home/Notes',name:'notes',component:Notes},
            
        ]},
        {path:'/My',component:My},
        {path:'/Login',component:Login},
        {path:'/Vip',component:Vip},
        {path:'/Register',component:Register},
    ]
})