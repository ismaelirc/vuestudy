const app = Vue.createApp({ //configuração do APP (variais, objs, infos)
    data: function(){ //Propriedades da página, retorna sempre um obj, aqui são setadas todas as propriedades da página
        return {
            message: 'Finish the course and learn vue',
            vueLink: 'google.com'
        };
    },
    methods:{
        outputGoal: function(){
            const randonNumber = Math.random();
            if(randonNumber > 0.5){
                return 'Learn Vue!';
            }else{
                return 'Master Vue!';
            }
        }
    }
});

app.mount('#user-goal');