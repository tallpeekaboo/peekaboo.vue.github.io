<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['2']">
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
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />

        <div style="float:right">123123</div>


      </a-layout-header>

      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '500px' }">
        
        <a-table bordered :data-source="dataSource" :columns="columns">


          <template slot="operation" slot-scope="text,record">
  <a-popconfirm
    v-if="dataSource.length"
    title="确定删除?"
    @confirm="() => onDelete(record.uid)"
  >
    <a href="javascript:;">删除</a>
  </a-popconfirm>
</template>


        </a-table>



      </a-layout-content>
    </a-layout>
  </a-layout>
  
</template>


 
<script>

import md5 from 'js-md5';


export default {
  data () {
    return {
      msg: "这是一个变量",
      collapsed: false,
      //列
      columns:[
        {title:"uid",dataIndex:"uid"},
        {title:"username",dataIndex:"username"},
        //指定操作列
        {title:'operation',dataIndex:'operation',
        scopedSlots:{customRender:'operation'}
        }
      ],
      //数据
      dataSource:[
        {key:'1',uid:1,username:"小红"},
        {key:'2',uid:2,username:"小王"}
      ]
      
    }
  },
  //注册组件标签
  components:{


  },
  mounted:function(){

    var ed2020 = "2020";

    var sign = md5('price=500&goodid=3,1'+ed2020);

    console.log(sign);

  	
   
  
},
  methods:{

    //删除操作
    onDelete(key) {
      console.log(key);
    }
     
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