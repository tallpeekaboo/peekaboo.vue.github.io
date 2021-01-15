<template>
    <div>
        <table border="1" cellspacing='0' width='80%'>
            <tr>
                <th>用户名</th>
                <th>密&emsp;码</th>
                <th>性&emsp;别</th>
                <th>手机号</th>
                <th>邮&emsp;箱</th>
                <th>修改密码</th>
            </tr>
            <tr v-for="item in user_list" :key="item.id">
                <th>{{item.username}}</th>
                <th>**********</th>
                <th>{{item.gender}}</th>
                <th>{{item.phone}}</th>
                <th>{{item.email}}</th>
                <th colspan="4"><van-button type="warning" @click="update()">修改</van-button></th>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            token:localStorage.getItem('token'),
            user_list:[],
        }
    },
    methods: {
        update(uid) {
            var password = prompt('请输入新密码')
            if(password == ''){
                this.$toast('新密码不能为空')
                return
            }
            if(password === null){
                this.$toast('取消修改')
                return
            }
            var password1 = prompt('确认密码')
            if(password1 === null){
                this.$toast('取消修改')
                return
            }
            if(password != password1){
                this.$toast('两次密码输入不正确')
                return
            }else(
                axios({
                    url:'http://127.0.0.1:8000/user/',
                    method:'put',
                    params:{
                        token:this.token
                    },
                    data:{
                        'password':password,
                    }
                }).then(resp=>{
                    console.log(resp.data)
                    this.$toast(resp.data.msg)
                    localStorage.removeItem('username')
                    localStorage.removeItem('token')
                    this.$router.push('mylogin')
                })
            )

        },
    },
    created() {
        axios({
            url:'http://127.0.0.1:8000/user/',
            method:'get',
            params:{
                token:this.token
            }
        }).then(resp=>{
            console.log(resp.data)
            this.user_list = resp.data
        })
    }
}
</script>

<style scoped>

</style>
