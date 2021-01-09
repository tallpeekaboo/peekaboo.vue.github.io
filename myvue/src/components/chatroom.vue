<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      
      <leftmenu :menu_number='2' />

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
        
       
        <div v-for="item in msglist">
          
          {{ item }}

        </div>


        <a-button type="primary" @click="openbox">咨询客服</a-button>


        <a-modal v-model="show" @ok="myok">
            
            <p>客服：说了什么</p>
            <p>客户：说了什么</p>

        </a-modal>



      </a-layout-content>
    </a-layout>
  </a-layout>
  
</template>


 
<script>

//导入组件
import leftmenu from './leftmenu.vue';


export default {
  data () {
    return {
      show:false,
      //聊天记录
      msglist:[],
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

    'leftmenu':leftmenu,
  },
  mounted:function(){

    var _this = this;

    //判断浏览器是否支持websocket
    if("WebSocket" in window){

       console.log("支持");
       //生成websocket链接
       var ws = new WebSocket("ws://localhost:8000/websocketlink/");

       //发送链接请求
       ws.onopen = function(){

          ws.send("test");


       }

       //发送消息
       ws.onmessage = function(evt){

          //将获取信息打印
          var received_msg = evt.data;

          //alert(received_msg);
          _this.msglist.push(received_msg);

       }

       //捕获断开链接
       ws.onclose = function(){

          console.log("链接已经关闭");
       }


    }


  	
   
  
},
  methods:{
    myok:function(){

        this.show = false;
    },
    openbox:function(){
        this.show = true;
    },
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