<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toogleDetails">{{ details ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="details">
            <li><strong>Phone</strong>{{ friend.phone }}</li>
            <li><strong>Email</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        data(){
            return{
                details: false,
                friend:{
                    id: 'ismael',
                    name: 'Ismael Costa',
                    phone: '65484 5468 354',
                    email: 'manuel@ismael.com.br'
                }
            }
        },
        methods:{
            toogleDetails(){
                this.details = !this.details;
            }
        }
    }
</script>