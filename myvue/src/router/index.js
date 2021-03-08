import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import myindex from '@/components/myindex'
import add_worktype from '@/components/add_worktype'
import chatroom from '@/components/chatroom'
import client from '@/components/client'
import home from '@/components/home'
// import item from "@/components/item";
import leftmenu from '@/components/leftmenu'
import login from '@/components/login'
import register from '@/components/register'
import server from '@/components/server'
import worktype from '@/components/worktype'


import Myregister from "@/components/Myregister";
import Mylogin from "@/components/Mylogin";
import myhome from "@/components/myhome";
import ding_login from "@/components/ding_login";
import gitee_login from "@/components/gitee_login";
import mycate from "@/components/mycate";
import showcate from "@/components/showcate";
import add_course from "@/components/add_course";
import courselist from "@/components/courselist";
import courseinfo from "@/components/courseinfo";
import ant_reg from "@/components/ant_reg";
import ant_log from "@/components/ant_log";
import ant_index from "@/components/ant_index";
import create from "@/components/user/create";
import newdelete from "@/components/user/newdelete";
import put from "@/components/user/put";
import showuser from "@/components/user/showuser";

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
    path: "/ant_log",
    name: "ant_log",
    component: ant_log
  },
  {
    path: "/ant_reg",
    name: "ant_reg",
    component: ant_reg
  },
  {
    path: "/ant_index",
    name: "ant_index",
    component: ant_index,
    children: [
      {
        path: "/create",
        name: "create",
        component: create
      },
      {
        path: "/newdelete",
        name: "newdelete",
        component: newdelete
      },
      {
        path: "/put",
        name: "put",
        component: put
      },
      {
        path: "/showuser",
        name: "showuser",
        component: showuser
      }
    ]
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
    path: "/dinglogin",
    name: "ding_login",
    component: ding_login
  },
  {
    path: "/mycate",
    name: "mycate",
    component: mycate
  },
  {
    path: "/showcate",
    name: "showcate",
    component: showcate
  },
  {
    path: "/add_course",
    name: "add_course",
    component: add_course
  },
  {
    path: "/courseinfo",
    name: "courseinfo",
    component: courseinfo
  },
  {
    path: "/courselist",
    name: "courselist",
    component: courselist
  },
  {
    path: "/giteelogin",
    name: "gitee_login",
    component: gitee_login
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
