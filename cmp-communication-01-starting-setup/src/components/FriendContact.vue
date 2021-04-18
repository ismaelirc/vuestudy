<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
      <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite'
  // ],
  props:{
    id:{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumbr: String,
    emailAddress: String,
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  //emits:['toogle-favorite'],
  emits:{
    'toogle-favorite':function(id){
      if(id){
        return true;
      }else{
        
        console.warn('Id is missing');
        return false;

      }
    } //Dessa forma fica claro que esse componente emite um evento que deve ser tratado por uma função
  },
  data() {
    return {
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      this.$emit('toogle-favorite', this.id);
    }
  }
};
</script>