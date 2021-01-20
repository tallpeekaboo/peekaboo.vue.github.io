<template>
    <div class="udlite-container partners">
        <van-cell-group v-for="item in info_list" :key="item.id">
            <van-cell title="课程标题 " :value="item.title"/>
            <van-cell title="课程描述 " :value="item.desc"/>
            <van-cell title="课程价格 " :value="item.price"/>
            <video width="300" height="240" :src="src + item.video" controls='controls' autoplay='autoplay' muted></video>
        </van-cell-group>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            cid:this.$route.query.cid,
            info_list:{},
            src:'http://127.0.0.1:8000/static/upload/',
        }
    },
    methods: {
        get_info(){
            axios({
                url:'http://127.0.0.1:8000/courseinfo/',
                method:'get',
                params:{
                    cid:this.cid
                }
            }).then(resp=>{
                console.log(resp.data)
                this.$toast(resp.data.msg)
                this.info_list = resp.data
            })
        }
    },
    created() {
        this.get_info()
    }
}
</script>

<style scoped>

</style>
