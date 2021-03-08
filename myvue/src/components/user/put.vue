<template>
    <div>
        <table border="1" collspacing='0' width='80%'>
           <tr>
               <th>用户名</th>
               <th>密&emsp;码</th>
               <th>改密码</th>
           </tr>
           <tr v-for="item in user_list" :key="item.id">
               <th>{{item.username}}</th>
               <th>**********</th>
               <th><a-button type="primary" @click="newput(item.id)">改密码</a-button></th>
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
      newput(uid){
          var password = prompt('newpassword',this.newpassword)
          axios({
              url:'http://127.0.0.1:8000/newapp/userinfo/',
              method:'put',
              params:{
                  uid:uid,
                  password:password,
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
