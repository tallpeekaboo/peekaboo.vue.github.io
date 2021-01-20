<template>
    <div class="udlite-container partners">
        <!-- 表格控件 -->
        <van-grid v-for="(item,index) in data" :key="index.id">
            <van-grid-item icon="'http://127.0.0.1:8000/static/upload/' + item.id"  
            link-type='redirectTo'
            :url="'courseinfo?cid=' + item.id">
            <b>{{item.title}}</b>
            <video width="300" height="240" :src="src + item.video" controls='controls' autoplay='autoplay' muted></video>
            </van-grid-item>
        </van-grid>

        <!-- 分页控件 -->
        <van-pagination @change="get_course" v-model="page" :total-items="total" :items-per-page="size"/>
        <input type="text" v-model="junp"/>

        <button @click="get_course">跳</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            icon:'http://1127.0.0.1:8000/static/upload/',




            data:[],
            page:1,
            size:1,
            total:0,
            junp:'',
            src:'http://127.0.0.1:8000/static/upload/'
        }
    },
    methods: {
        get_course(){
            axios({
                url:'http://127.0.0.1:8000/course/',
                method:'get',
                params:{
                    junp:this.junp,
                    page:this.page,
                }
            }).then(resp=>{
                console.log(resp.data)
                this.data = resp.data.data
                this.total = resp.data.total
                // this.page = Number(resp.data.junp)
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
