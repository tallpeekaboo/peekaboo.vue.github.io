<template>
    <div>
        <table border="1" collspacing='0' width='80%'>
           <tr>
               <th>用户名</th>
               <th>密&emsp;码</th>
               <th>删&emsp;除</th>
           </tr>
           <tr v-for="item in user_list" :key="item.id">
               <th>{{item.username}}</th>
               <th>**********</th>
               <th><a-button type="primary" @click="newdelete(item.id)">删除用户</a-button></th>
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
      newdelete(uid){
          axios({
              url:'http://127.0.0.1:8000/newapp/userinfo/',
              method:'delete',
              params:{
                  uid:uid
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
