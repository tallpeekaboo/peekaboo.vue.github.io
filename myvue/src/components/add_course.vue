<template>
    <div>
        <!-- 头部开始 -->
        <Head></Head>
        <!-- 头部结束 -->

        <van-cell-group class="udlite-container partners">
            <van-tabs>

            <van-tab title="用户名登录">
            <van-field v-model="title" label="课程名称" placeholder="请输入课程名称"></van-field>        
            <van-field v-model="desc" label="课程详情" placeholder="请输入课程详情"></van-field>        
            <van-field v-model="price" label="课程价格" placeholder="请输入课程价格"></van-field>              
            
            <!-- 视频提交 -->
            <van-cell-group class="udlite-container partners">
                <van-uploader :after-read="afterRead"/>  
            </van-cell-group>            
            
            <!-- 视频控件 -->
            <van-cell-group class="udlite-container partners">
                <video width="300" height="240" :src="src" controls='controls' autoplay='autoplay'></video>
            </van-cell-group>
            </van-tab>
            </van-tabs>
            <van-button type="primary" @click="add">添加课程</van-button>
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
import mycate from './mycate.vue'
export default {
    components:{Head,Tail,mycate},
    data() {
        return {
            cid:'',
            title:"",
            desc:"",
            price:"",
            video:'',
            src:"",
        }
    },
    methods: {
        add(){
            if(!this.title){
                this.$toast('课程名称不能为空')
                return
            }
            if(!this.desc){
                this.$toast('课程描述不能为空')
                return
            }
            if(!this.price){
                this.$toast('课程价格不能为空')
                return
            }
            if(!this.video){
                this.$toast('课程视频不能为空')
                return
            }
            axios({
                url:'http://127.0.0.1:8000/course/',
                method:'post',
                data:{
                    title:this.title,
                    desc:this.desc,
                    price:this.price,
                    video:this.video,
                    cid:this.cid
                }
            }).then(resp=>{
                console.log(resp.data)
                this.$toast(resp.data.msg)
            })
        },
        afterRead(file) {
        // 定义参数
        let data = new FormData();
        data.append("file", file.file); // 创建实例

        const axiosInstance = this.axios.create({ withCredentials: false });

        axiosInstance({
            method: "POST",url: "http://127.0.0.1:8000/upload/",data: data,}).then((resp) => {
            console.log(resp);
            this.src = 'http://127.0.0.1:8000/static/upload/' + resp.data.filename
            this.video = resp.data.filename
        });
        },
    },
    created() {
        this.cid = this.$route.query.cid
        console.log('课程分类id是' + this.cid)
    }
}
</script>

<style scoped>

</style>
