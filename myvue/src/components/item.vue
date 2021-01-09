<template>
  <div>

    <header class="top-header">
        <nav class="navbar header-nav navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html"><img src="../assets/img/logo.png" alt="image"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbar-wd">
                    <ul class="navbar-nav">
                        <li><a class="nav-link active" href="index.html">Home</a></li>
                        <li><a class="nav-link" href="about.html">Aboutus</a></li>
                        <li><a class="nav-link" href="services.html">Services</a></li>
                        <li><a class="nav-link" href="#">Blog</a></li>
            <li><a class="nav-link" href="contact.html">Contact us</a></li>
                        <li><a class="nav-link active" style="background:#f2184f;color:#fff;" href="#">Sinup now</a></li>
                    </ul>
                </div>
                <div>
                   123
                </div>
            </div>
        </nav>
    </header>
    <!-- End header -->

  
  <!-- section -->
    <div class="section layout_padding">
        <div class="container">
          

          内容页内容

          <van-button round type="info">圆形按钮</van-button>


          <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)"
  >渐变色按钮</van-button>



        <van-form >
  <van-field
   
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field

    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>


        </div>
    </div>
  <!-- end section -->
  
  

    <div class="footer_bottom">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="crp">© 2019 Business . v3u.cn</p>
                    <ul class="bottom_menu">
                        <li><a href="#">Term of Service</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <a href="#" id="scroll-to-top" class="hvr-radial-out"><i class="fa fa-angle-up"></i></a>

  	
    
  </div>
  
</template>


 
<script>


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

  	
   
  
},
  methods:{

  

     
  }
}


</script>
 
<style scoped>

.layout_padding{
  margin:30px;
}

</style>