<template>
    <div>
        <a-form-model-item label="用户名">
            <a-input v-model="username" placeholder="请输入用户名" />
        </a-form-model-item>

        <a-form-model-item label="密码">
            <a-input v-model="password" placeholder="请输入密码" />
        </a-form-model-item>

        <a-form-model-item>
            <a-button type="primary" @click="create">
                注&emsp;册
            </a-button>
        </a-form-model-item>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            username:"",
            password:"",
        }
    },
    methods: {
        create(){
            axios({
                url:'http://127.0.0.1:8000/newapp/userinfo/',
                method:'post',
                data:{
                    username:this.username,
                    password:this.password,
                }
            }).then(resp=>{
                console.log(resp.data)
                alert(resp.data.msg)
            })
        }
    },
    created() {

    }
}
</script>

<style scoped>

</style>
