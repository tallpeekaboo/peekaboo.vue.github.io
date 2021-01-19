<template>
  <div>
    <!-- 头部开始 -->
    <Head></Head>
    <!-- 头部结束 -->

    <table border="1" cellspacing="0" width="80%">
      <tr>
        <th>头&emsp;像</th>
        <th>用户名</th>
        <th>密&emsp;码</th>
        <th>性&emsp;别</th>
        <th>手机号</th>
        <th>邮&emsp;箱</th>
        <th>修改密码</th>
        <th>上传头像</th>
        <th>删除头像</th>
      </tr>
      <tr v-for="item in user_list" :key="item.id">
        <th>
          <van-image
            round
            width="10rem"
            height="10rem"
            :src="'http://127.0.0.1:8000/' + item.img"
          />
        </th>
        <th>{{ item.username }}</th>
        <th>**********</th>
        <th>{{ item.gender }}</th>
        <th>{{ item.phone }}</th>
        <th>{{ item.email }}</th>
        <th><van-button type="warning" @click="update()">修改</van-button></th>
        <th class="udlite-container partners">
          <van-uploader :after-read="afterRead" />
        </th>
        <th>
          <van-button type="danger" @click="del" v-show="item.img != null"
            >删除头像</van-button
          >
        </th>
      </tr>
    </table>

    <!-- 尾部开始 -->
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
      token: localStorage.getItem("token"),
      user_list: [],
    };
  },
  components: { Head, Tail },
  methods: {
    update() {
      var password = prompt("请输入新密码");
      if (password == "") {
        this.$toast("新密码不能为空");
        return;
      }
      if (password === null) {
        this.$toast("取消修改");
        return;
      }
      var password1 = prompt("确认密码");
      if (password1 === null) {
        this.$toast("取消修改");
        return;
      }
      if (password != password1) {
        this.$toast("两次密码输入不正确");
        return;
      } else
        axios({
          url: "http://127.0.0.1:8000/user/",
          method: "put",
          params: {
            token: this.token,
          },
          data: {
            password: password,
          },
        }).then((resp) => {
          console.log(resp.data);
          this.$toast(resp.data.msg);
          localStorage.removeItem("username");
          localStorage.removeItem("token");
          this.$router.push("mylogin");
        });
    },
    afterRead(file) {
      // 定义参数
      let data = new FormData();
      data.append("file", file.file); // 创建实例

      const axiosInstance = this.axios.create({ withCredentials: false });

      axiosInstance({
        method: "put",
        url: "http://127.0.0.1:8000/upimg/?token=" + this.token,
        data: data,
      }).then((resp) => {
        console.log(resp.data);
        this.$router.go(0);
      });
    },
    del() {
      axios({
        url: "http://127.0.0.1:8000/downimg/",
        method: "put",
        params: {
          token: this.token,
        },
      }).then((resp) => {
        console.log(resp.data);
        this.$toast(resp.data.msg);
        this.$router.go(0);
      });
    },
  },
  created() {
    axios({
      url: "http://127.0.0.1:8000/user/",
      method: "get",
      params: {
        token: this.token,
      },
    }).then((resp) => {
      console.log(resp.data);
      this.user_list = resp.data;
    })
  },
};
</script>

<style scoped>
</style>
