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
            placeholder="请输入用户名/手机号"
            ></van-field>        

            <van-field
            v-model="password"
            label="密码"
            placeholder="请输入密码"
            ></van-field>

            <van-button type="primary" @click="submit">登&emsp;录</van-button>
            <van-button type="info">重&emsp;置</van-button>
        </van-cell-group>
        </div>
        <!-- 尾部开始 -->
        <Tail></Tail>
        <!-- 尾部结束 -->
    </div>
</template>

<script>
import axios from 'axios'
import Head from './head.vue'
import Tail from './tail.vue'
export default {
    data() {
        return {
            username:'',
            password:"",
        }
    },
    components:{Head,Tail},
    methods: {
        submit(){
            if(this.username == ''){
                this.$toast('用户名不能为空')
            }
            
            if(this.password == ''){
                this.$toast('密码不能为空')
            }
            axios({
                url:'http://127.0.0.1:8000/login/',
                method:'post',
                data:{
                   username:this.username,
                   password:this.password, 
                }
            }).then(resp=>{
                console.log(resp.data)
                this.$toast(resp.data.msg)
            })
        }
    },
    created() {

    }
}
</script>

<style scoped>

</style>
