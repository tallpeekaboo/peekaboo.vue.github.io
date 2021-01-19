<template>
    <div>

        <Head></Head>
        <div class="udlite-container partners">
            <van-cell-group>
                <van-tabs>

                    <van-tab title="Gitee用户名登录">
                    <van-field v-model="username" label="用户名" placeholder="请输入Gitee用户名"></van-field>        
                    </van-tab>

                </van-tabs>

            </van-cell-group>
             <van-button type="primary" @click="login">登&emsp;录</van-button>
        </div>

        <Tail></Tail>

    </div>
</template>

<script>
import axios from 'axios'

import Head from './head.vue'

import Tail from './tail.vue'

export default {
    data() {
        return {
            username:''
        }
    },
    components:{Head,Tail},
    methods: {
        login(){
            axios({
                url:'http://127.0.0.1:8000/gitee_login/',
                method:'post',
                data:{
                    username:this.username
                }
            }).then(resp=>{
                console.log(resp.data)
                if(resp.data.code == 200){
                    this.$router.push('myindex')
                    localStorage.setItem('username',this.username)
                }
            })
        }
        },
    created() {

    }
}
</script>

<style scoped>

</style>
