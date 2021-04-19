<template>
    <h2>{{ userName}}</h2>
    <h3>{{ age }}</h3>
</template>
<script>
export default {
    props:{
        userName:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        }
    },
    data(){
        return{

        }
    },
    methods:{}
}
</script>