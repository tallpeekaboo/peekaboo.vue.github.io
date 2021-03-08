<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      v-model="collapsed"
    >
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :selectedKeys="[$route.path]">
        <a-menu-item key="/showuser">
          <a-icon type="user" />
          <span class="nav-text">所有用户</span>
          <router-link to='/showuser'></router-link>
        </a-menu-item>

        <a-menu-item key="/create">
          <a-icon type="video-camera" />
          <span class="nav-text">添加用户</span>
          <router-link to='/create'></router-link>
        </a-menu-item>
        <a-menu-item key="/put">
          <a-icon type="upload" />
          <span class="nav-text">修改用户</span>
          <router-link to='/put'></router-link>
        </a-menu-item>
        <a-menu-item key="/newdelete">
          <a-icon type="user" />
          <span class="nav-text">删除用户</span>
          <router-link to='/newdelete'></router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout key="1">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data(){
    return{
      collapsed:false
    }
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
