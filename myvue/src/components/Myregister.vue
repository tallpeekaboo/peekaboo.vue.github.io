<template>
  <div>
    <!-- 头部开始 -->
    <Head></Head>
    <!-- 头部结束 -->

    <!-- 表单区域 -->
    <div class="udlite-container partners">
      <van-cell-group>
        <van-field
          v-model="username"
          label="用户名"
          placeholder="请输入用户名"
        ></van-field>        
        
        <van-field
          v-model="gender"
          label="性别"
          placeholder="请输入性别"
        ></van-field>

        <van-field
          v-model="phone"
          label="电话号"
          placeholder="请输入电话号码"
        ></van-field>

        <van-field
          v-model="email"
          label="邮箱"
          placeholder="请输入邮箱"
        ></van-field>

        <van-field
          v-model="password"
          label="密码"
          placeholder="请输入密码"
        ></van-field>

        <van-field
          v-model="password1"
          label="确认密码"
          placeholder="请输入确认密码"
        ></van-field>

        <van-button type="primary" @click="submit">注&emsp;册</van-button>
        <van-button type="info" @click="reset">重&emsp;置</van-button>
      </van-cell-group>
    </div>

    <!--  尾部开始-->
    <Tail></Tail>
    <!-- 尾部结束 -->
  </div>
</template>

<script>
import axios from "axios";
import Head from "./head.vue";
import Tail from "./tail.vue";
export default {
  data() {
    return {
      username: "",
      password: "",
      password1: "",
      phone:"",
      gender:"",
      email:"",
    };
  },
  components: { Head, Tail },
  methods: {
    submit() {
      if (
        (this.username == "")
      ) {
        this.$toast("用户名不能为空");
        return false;
      }     
      
      if (
        (this.phone == "")
      ) {
        this.$toast("手机号不能为空");
        return false;
      }      
      
      if (
        (this.email == "")
      ) {
        this.$toast("邮箱不能为空");
        return false;
      }    
      
      if (
        (this.gender == "")
      ) {
        this.$toast("性别不能为空");
        return false;
      }     
      
      if (
        (this.password == "")
      ) {
        this.$toast("密码不能为空");
        return false;
      }

      if (
        (this.password1 == "")
      ) {
        this.$toast("请重新输入密码");
        return false;
      }      

      axios({
        url: "http://127.0.0.1:8000/register/",
        method: "post",
        data: {
          username: this.username,
          password: this.password,
          password1: this.password1,
          phone:this.phone,
          gender:this.gender,
          email:this.email,
        },
      }).then((resp) => {
        console.log(resp.data);
        this.$toast(resp.data.msg)
      })
    },
    reset(){
        this.username = '',
        this.password = '',
        this.password1 = '',
        this.phone = '',
        this.gender = '',
        this.email = ''
      }
  },
  created() {
    
  },
};
</script>

<style scoped>
</style>
