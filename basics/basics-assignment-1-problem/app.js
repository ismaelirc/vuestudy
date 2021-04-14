const app = Vue.createApp({
    data: function(){ 
        return {
           name: 'Ismael Costa',
           age: 32,
           favoriteNumber: Math.random(),
           image: 'https://www.comprecar.com.br/storage/news/featured/14cjLa8uv07Z_49.jpg'
        };
    },
    methods:{ 
        agePlus() {
            const newAge = this.age + 5
            return newAge;
        }
    }
});

app.mount('#assignment');