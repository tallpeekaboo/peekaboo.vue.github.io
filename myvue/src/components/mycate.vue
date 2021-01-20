<template>
    <div>
        <li>
            <div><a :href="'add_course?cid='+ data.id">{{data.name}}</a></div>
                <ul v-if="data.children && data.children.length > 0">
                    <mycate v-for="child in data.children" :key="child.id" :data='child'/>

                </ul>
        </li>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'mycate',
    props:['data'],

    methods: {

    },
    created() {

    }
}
</script>

<style scoped>
ul{
    padding-left: 0px;
    list-style: none;
}
</style>
