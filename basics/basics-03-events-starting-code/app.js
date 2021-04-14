const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmed: ''
    };
  },
  methods:{
    add () {
      this.counter++
    },
    setName (event, lastName){
      this.name = event.target.value + ' ' +lastName
    },
    submitForm(event){
      event.preventDefaut();
    },
    confirmInput(){
      this.confirmed = this.name;
    }
  }
});

app.mount('#events');
