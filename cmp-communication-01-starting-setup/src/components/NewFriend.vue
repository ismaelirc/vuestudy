<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" v-model="name" placeholder="Friend name" />
        </div>
        <div>
            <label>Phone</label>
            <input type="text" v-model="phone" placeholder="Friend phone number" />
        </div>
        <div>
            <label>E-mail</label>
            <input type="text" v-model="email" placeholder="Friend email" />
        </div>
        <div>
            <button @click="saveFriend">Save</button>
        </div>
    </form>
</template>
<script>
export default {
    emits:['add-friend'],
    data(){
        return {
            name: '',
            phone: '',
            email: ''
        }
    },
    methods:{
        submitData(){
            this.$emit('add-friend',this.name, this.phone, this.email);
            
        }
    }
};
</script>