<template>
    <div>
        <mycate :data="data"/>
    </div>
</template>

<script>
import axios from 'axios'
import mycate from './mycate.vue'
export default {
    components:{mycate},
    data() {
        return {
            data:{},
        }
    },
    methods: {
        get_data(){
            axios({
                url:'http://127.0.0.1:8000/get_cate/',
                method:'get',
            }).then(resp=>{
                console.log(resp.data)

                var mytree = {'id':0,name:''};

                mytree['children'] = resp.data;

                this.data = mytree
            })
        }
    },
    created() {
        
    },
    mounted(){
        this.get_data()
    }
}
</script>

<style scoped>

</style>
