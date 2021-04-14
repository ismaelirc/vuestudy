const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
      this.message = this.$refs.userText
    },
  },
  beforeCreate(){
    console.log('before')
  },
  creates(){
    console.log('created')
  },
  beforeMount(){
    console.log('before mount')
  },
  mounted(){
    console.log('mount')
  }
});

app.mount('#app');
