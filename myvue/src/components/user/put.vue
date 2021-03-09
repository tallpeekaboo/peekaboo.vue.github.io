<template>
    <div>
        <table border="1" collspacing='0' width='80%'>
           <tr>
               <th>用户名</th>
               <th>密&emsp;码</th>
               <th>修改用户名</th>
               <th>修改&emsp;密码</th>
           </tr>
           <tr v-for="item in user_list" :key="item.id">
               <th>{{item.username}}</th>
               <th>**********</th>
               <th><a-button type="primary" @click="userput(item.id)">修改用户名</a-button></th>
               <th><a-button type="primary" @click="passput(item.id)">修改&emsp;密码</a-button></th>
           </tr>
       </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            user_list:[],
            newpassword:"",
        }
    },
    methods: {
      get_user(){
          axios({
              url:'http://127.0.0.1:8000/newapp/userinfo/',
              method:'get',
          }).then(resp=>{
              console.log(resp.data)
              this.user_list = resp.data
          })
      },
      userput(uid){
          var username = prompt('newusername',this.newusername)
          axios({
              url:'http://127.0.0.1:8000/newapp/userinfo/',
              method:'put',
              params:{
                  uid:uid,
                  username:username,
              },
              data:{
                  status:1 
              }
          }).then(resp=>{
              console.log(resp.data)
              alert(resp.data.msg)
              this.$router.go(0)
          })
      },
      passput(uid){
          var password = prompt('newpassword',this.newpassword)
          axios({
            url:'http://127.0.0.1:8000/newapp/userinfo/',
            method:'put',
            params:{
                uid:uid,
                password:password,
            },
            data:{
                status:2
            }
          }).then(resp=>{
            console.log(resp.data)
            alert(resp.data.msg)
            this.$router.go(0)
          })
      }
    },
    created() {
        this.get_user()
    }
}
</script>

<style scoped>

</style>
