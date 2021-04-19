<template>
    <form @submit.prevent="submitData">
        <div>
            <label>User Name</label>
            <input type="text" v-model="userName" placeholder="User name" />
        </div>
        <div>
            <label>Age</label>
            <input type="text" v-model="userAge" placeholder="User age" />
        </div>
        <div>
            <button>Save</button>
        </div>
    </form>
</template>
<script>
export default {
  data (){
      return {
          userAge: '',
          userName: ''
      }  
  },
  emits:['saveuser-data'],
     //Dessa forma fica claro que esse componente emite um evento que deve ser tratado por uma função,
  methods: {
      submitData(){
          this.$emit('saveuser-data',this.userAge, this.userName);
      }
  }
};
</script>