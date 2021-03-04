<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>所有用户</span>
        </a-menu-item>

        <a-menu-item key="2">
          <a-icon type="user" />
          <span>添加用户</span>
          <router-link to="/create"></router-link>
        </a-menu-item>

        <a-menu-item key="3">
          <a-icon type="user" />
          <span>修改信息</span>
          <router-link to="put"></router-link>
        </a-menu-item>

        <a-menu-item key="4">
          <a-icon type="user" />
          <span>删除用户</span>
          <router-link to="newdelete"></router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header> 
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
       >
       <table border="1" collspacing='0' width='80%'>
           <tr>
               <th>用户名</th>
               <th>密&emsp;码</th>
           </tr>
           <tr v-for="item in user_list" :key="item.id">
               <th>{{item.username}}</th>
               <th>**********</th>
           </tr>
       </table>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Axios from 'axios';
export default {
  data() {
    return {
      collapsed: false,
      user_list:[],
    };
  },
  methods:{
      get_user(){
          Axios({
              url:'http://127.0.0.1:8000/newapp/userinfo/',
              method:'get',
          }).then(resp=>{
              console.log(resp.data)
              this.user_list = resp.data
          })
      }
  },
  created(){
      this.get_user()
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
