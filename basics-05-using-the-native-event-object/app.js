const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: ''
      //fullname: ''
    };
  },
  watch:{
    counter(value){
      if(value > 50){
        this.counter = 0;
      }
    }
    // name(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = value + ' ' + this.lastname
    //   }
      
    // },
    // lastname(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = this.name + ' ' + value
    //   }
      
    // }
  },
  computed:{
    fullname(){
      if(this.name === '' || this.lastname == ''){
        
        return '';

      }
      return this.name + ' ' + this.lastname
    }

  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');