<template>
    <div class="udlite-container partners">
        <!-- 表格控件 -->
        <van-grid v-for="(item,index) in data" :key="index">
            <van-grid-item link-type='redirectTo'
            :url="'courseinfo?cid=' + item.id">
            <b>{{item.title}}</b>
            <video width="300" height="240" :src="src + item.video" controls='controls' autoplay='autoplay' muted></video>
            </van-grid-item>
        </van-grid>

        <!-- 分页控件 -->
        <van-pagination @change="get_course" v-model="page" :total-items="total" :items-per-page="size"/>
        <input type="text" v-model="ye"/>

        <button @click="jump">跳</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            data:[],
            page:1,
            size:1,
            total:0,
            ye:'',
            src:'http://127.0.0.1:8000/static/upload/'
        }
    },
    methods: {
        get_course(){
            axios({
                url:'http://127.0.0.1:8000/course/',
                method:'get',
                params:{
                    page:this.page,
                }
            }).then(resp=>{
                console.log(resp.data)
                this.data = resp.data.data
                this.total = resp.data.total      
            })
        },
        jump(){
            if(this.ye > this.total){
                this.ye = this.total
            }
            if(this.ye < 1){
                this.ye = 1
            }
            this.page = Number(this.ye)
            axios({
                url:'http://127.0.0.1:8000/course/',
                method:'get',
                params:{
                    page:this.ye,
                }
            }).then(resp=>{
                console.log(resp.data)
                this.data = resp.data.data
                this.total = resp.data.total      
            })
        }
    },
    created() {
        this.get_course()
    }
}
</script>

<style scoped>

</style>
