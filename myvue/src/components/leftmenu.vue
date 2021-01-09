<template>
  <div>
      <a-menu theme="dark" mode="inline" :default-selected-keys=defaulted>
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>用户管理</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>菜单2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>菜单3</span>
        </a-menu-item>
      </a-menu>
    </div>
</template>


 
<script>



export default {
  data () {
    return {
      msg: "这是一个变量",
      defaulted:[this.menu_number+""]
    }
  },
  //接收参数
  props:['menu_number'],
  //注册组件标签
  components:{


  },
  mounted:function(){
   
  
},
  methods:{

     
  }
}


</script>
 
<style scoped>

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