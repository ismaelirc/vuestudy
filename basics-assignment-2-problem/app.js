const app = Vue.createApp({
    data() {
      return {
        inputValue: '',
        inputValue2: ''
      };
    },
    methods:{
        clickButton () {
            alert('Clicou no botão')
        },
        outputInput(event){
            this.inputValue = event.target.value
        },
        outputInput2(event){
            this.inputValue2 = event.target.value
        }
    }
  });
  
  app.mount('#assignment');
  