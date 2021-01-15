import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import myindex from '@/components/myindex'
import add_worktype from '@/components/add_worktype'
import chatroom from '@/components/chatroom'
import client from '@/components/client'
import home from '@/components/home'
// import item from '@/components/item'
import leftmenu from '@/components/leftmenu'
import login from '@/components/login'
import register from '@/components/register'
import server from '@/components/server'
import worktype from '@/components/worktype'


import Myregister from "@/components/Myregister";
import Mylogin from "@/components/Mylogin";
import myhome from "@/components/myhome";

Vue.use(Router)

var routes = [
  {
    path: "/",
    name: "index",
    component: index
  },
  {
    path: "/myindex",
    name: "myindex",
    component: myindex
  },
  {
    path: "/myregister",
    name: "Myregister",
    component: Myregister
  },
  {
    path: "/mylogin",
    name: "Mylogin",
    component: Mylogin
  },
  {
    path: "/myhome",
    name: "myhome",
    component: myhome,
    // 拦截器使用
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("username")) {
        console.log("登录了");
        next();
      } else {
        next("/mylogin");
      }
    }
  }
];

export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})
