<template>
    <div>
        <ul v-for="cate in cate_list" :key="cate.id">
            <li>-{{cate.name}}
                <ul v-for="children in cate.children" :key="children.id">
                    <li>-{{children.name}}
                        <ul v-for="item in children.children" :key="item.id">
                            <li>-{{item.name}}</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            cate_list:[]
        }
    },
    methods: {

    },
    created() {
        axios({
            url:'http://127.0.0.1:8000/get_cate',
            method:'get'
        }).then(resp=>{
            console.log(resp.data[0])
            this.cate_list = resp.data
        })
    }
}
</script>

<style scoped>

</style>
