<template>
    <div>
        <!-- 头部开始 -->
        <Head></Head>
        <!-- 头部结束 -->



        <van-cell-group class="udlite-container partners">
            <van-tabs>
                 <van-tab title="添加课程">
                    <van-field v-model="name" label="课程名称" placeholder="请输入课程名称"></van-field>        
                    <select v-model="cate">
                        <option :value="item.id" v-for="item in cate_list" :key="item.id">{{item.name}}</option>
                    </select>
                    <van-button type="primary" @click="add">添加课程</van-button>
                </van-tab>
            </van-tabs>
        </van-cell-group>


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
    components:{Head,Tail},
    data() {
        return {
            name:'',
            cate:'',
            cate_list:[],
        }
    },
    methods: {
        add(){
            axios({
                url:'http://127.0.0.1:8000/course/',
                method:'post',
                data:{
                    'name':this.name,
                    'cate':this.cate,
                }
            }).then(resp=>{
                console.log(resp.data)
                this.$toast(resp.data.msg)
            })
        }
    },
    created() {
        axios({
            url:'http://127.0.0.1:8000/course/',
            method:'get',
        }).then(resp=>{
            console.log(resp.data)
            this.cate_list = resp.data
        })
    }
}
</script>

<style scoped>

</style>
