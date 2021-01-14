<template>
    <div>
        <!-- 头部开始 -->
        <Head></Head>
        <!-- 头部结束 -->

        <!-- 表单区域 -->
        <div class="udlite-container partners">
        <van-cell-group>
            <van-tabs v-model="active">

            <van-tab title="用户名登录">
            <van-field v-model="username" label="用户名" placeholder="请输入用户名"></van-field>        
            </van-tab>

            <van-tab title="手机号登录">
            <van-field v-model="username" label="手机号" placeholder="请输入手机号"></van-field>        
            </van-tab>

            <van-tab title="邮箱登录">
            <van-field v-model="username" label="邮箱" placeholder="请输入邮箱"></van-field>        
            </van-tab>

            </van-tabs>

            <van-field v-model="password" label="密码" placeholder="请输入密码"></van-field>
            
            <!-- 验证码 -->
            <van-cell-group>
                <drag-verify :width='width' :height="height" :text="text" ref="Verify">

                </drag-verify>
            </van-cell-group>

            <van-cell-group>
                
                <img :src="src" @click="changecode">

            </van-cell-group>

            <!-- 图片验证码 -->
            <van-field v-model="code" label="验证码" placeholder="请输入验证码"></van-field> 



            <van-button type="primary" @click="submit">登&emsp;录</van-button>
            <van-button type="info" @click="reset">重&emsp;置</van-button>
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

import dragVerify from 'vue-drag-verify'

export default {
    data() {
        return {
            username:'',
            password:"",
            active:0,
            width:320,
            height:42,
            text:'请 您 拖 动 滑 块',
            code:"",
            src:"http://127.0.0.1:8000/mycode/",
        }
    },
    components:{Head,Tail,dragVerify},
    methods: {
        submit(){
            if(this.username == ''){
                this.$toast('用户名不能为空')
            }
            
            if(this.password == ''){
                this.$toast('密码不能为空')
            }

            if(this.code == ''){
                this.$toast('验证码不能为空')
                return
            }
            if(this.$refs.Verify.isPassing == true){
                this.axios.post('http://127.0.0.1:8000/login/',this.qs.stringify({
                    'username':this.username,'password':this.password,'active':this.active,'code':this.code
                })).then(resp=>{
                    console.log(resp.data)
                    alert(resp.data.msg)
                    if(resp.data.code == 200){
                        sessionStorage.setItem('username',this.username)
                        sessionStorage.setItem('token',resp.data.token)
                        this.$router.push('myindex')
                    }
                })
            }else{
                this.$toast('请先拖动滑块验证')
            }
        },
        reset(){
            this.username = '',
            this.password = ''
        },

        //变更验证码
        changecode(){
            
            var num = Math.ceil(Math.random()*10);

            this.src = this.src + "?num=" + num;
        },
    },
    created() {

    }
}
</script>

<style scoped>

img{
    cursor:pointer;
}


</style>
