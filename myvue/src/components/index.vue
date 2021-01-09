<template>
  <div>

    你好啊，这里是在线教育平台

    <br />

   <van-button type="primary">主要按钮</van-button>


   <van-cell-group>
  <van-field  label="文本" placeholder="请输入用户名" />
</van-cell-group>
    
  </div>
  
</template>


 
<script>

import md5 from 'js-md5';

export default {
  data () {
    return {
      msg: "这是一个变量",
      
    }
  },
  //注册组件标签
  components:{


  },
  mounted:function(){

   this.$toast('内容');

  	
   
  
},
  methods:{

  

     
  }
}


</script>
 
<style scoped>



</style>