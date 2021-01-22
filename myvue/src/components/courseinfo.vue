<template>
    <div>
        <!-- 头部开始 -->
        <Head></Head>
        <!-- 头部结束 -->

        <div class="udlite-container partners">
        <table border="1" cellspacing='0' width='80%'>
            <tr>
                <th>课程标题</th>
                <th>课程详情</th>
                <th>课程价格</th>
                <th>课程分类</th>
                <th>课程视频</th>
            </tr>
            <tr>
                <th>{{info_list.title}}</th>
                <th>{{info_list.desc}}</th>
                <th>{{info_list.price}}</th>
                <th>{{name}}
                </th>
                <th><video width="100" height="100" id='video' :src="src" controls='controls' autoplay='autoplay' muted/></th>
            </tr>
        </table>
        <van-button @click="into">{{msg}}画中画</van-button>
        <br><br><br>
        状态:{{show}}课程<van-switch v-model="checked" size="24px" @click="flow"/>


        课程打分:<van-rate v-model="value" icon="like" void-icon="like-o" @change="onChange"/> 当前课程平均分:{{avg}}
        </div>

        <!-- {{cate_id}} -->
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
            cid:this.$route.query.cid,
            info_list:{},
            src:'',
            msg:'进入',
            show:"未关注",
            name:"",
            checked:true,
            cate:{},
            value:3,
            avg:'',
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
                this.name = resp.data.cid.name
                this.src = 'http://127.0.0.1:8000/static/upload/' + this.info_list.video
            })
        },
        // 画中画功能
        into(){
            if(video !== document.pictureInPictureElement){
                video.requestPictureInPicture()
                this.msg = '退出'
            }else{
                document.exitPictureInPicture()
                this.msg = '进入'
            }
        },

        avgscore(){
            axios({
                url:'http://127.0.0.1:8000/avgscore/',
                method:'get',
                params:{
                    cid:this.cid
                }
            }).then(resp=>{
                console.log(resp.data.avg,'当前课程平均分')
                this.avg = resp.data.avg['score__avg']
            })
        },


        // 获取当前用户分数
        get_change(){
            axios({
                url:'http://127.0.0.1:8000/getscore/',
                method:'get',
                params:{
                    cid:this.cid,
                    token:localStorage.getItem('token')
                }
            }).then(resp=>{
                this.value = resp.data[0].score
            })
        },

        // 打分动作
        onChange(value){
            this.$toast('您当前打分是:' + value + '颗♥')
            axios({
                url:'http://127.0.0.1:8000/getscore/',
                method:'put',
                params:{
                    token:localStorage.getItem('token')
                },
                data:{
                    cid:this.cid,
                    value:value
                }
            }).then(resp=>{
                console.log(resp.data)
            })
        },

        get_flow(){
            axios({
                url:'http://127.0.0.1:8000/getflow/',
                method:'get',
                params:{
                    token:localStorage.getItem('token'),
                    cid:this.cid
                }
            }).then(resp=>{
                console.log(resp.data)
                let bool = {'true':true,'false':false}
                this.checked = bool[resp.data.state]
            })
        },
        flow(){
            if (this.checked === true) {
                axios({
                    url:'http://127.0.0.1:8000/getflow/',
                    method:'delete',
                    params:{
                        token:localStorage.getItem('token'),
                        cid:this.cid,
                    }
                }).then(resp=>{
                    console.log(resp.data)
                    this.$toast(resp.data.msg)
                    this.show = '未关注'
                })
            }else{
                axios({
                    url:'http://127.0.0.1:8000/getflow/',
                    method:'post',
                    params:{
                        token:localStorage.getItem('token'),
                    },
                    data:{
                        cid:this.cid,
                    }
                }).then(resp=>{
                    console.log(resp.data)
                    this.$toast(resp.data.msg)
                    this.show = '关注'
                })
            }
        }
    },
    created() {
        this.get_info()
        this.avgscore()

    },
    mounted(){
        this.get_flow()
        this.get_change()
        //递归向上查找
        const data = [{id:1,name:'计算机课程',children:[{id:2,name:'计算机语言',children:[{id:3,name:'python'}]}]}]

        let nodes = []
        function getParentNodes(id,tree){
            _getParentNodes([],id,tree)
            return nodes
        }

        function _getParentNodes(his,targetId,tree){
            tree.some((list)=>{
                const children = list.children || []

                if(list.id === targetId){
                    nodes = his
                    return true
                }else if (children.length > 0) {
                    const history = [...his]
                    history.push(list)
                    return _getParentNodes[history,targetId,children]
                }
            })
        }
        console.log(getParentNodes(3,data))
    },
}
</script>

<style scoped>

</style>
