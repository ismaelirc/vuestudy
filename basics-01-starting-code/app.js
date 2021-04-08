const app = Vue.createApp({ //configuração do APP (variais, objs, infos)
    data: function(){ //Propriedades da página, retorna sempre um obj, aqui são setadas todas as propriedades da página
        return {
            messageA: 'Finish the course and learn vue',
            messageB: '<h2>Master Vue developer</h2>',
            vueLink: 'google.com'
        };
    },
    methods:{ //os métodos aqui dentro podem ser acessados no html
        outputGoal: function(){
            const randonNumber = Math.random();
            if(randonNumber > 0.5){
                return this.messageA;
            }else{
                return this.messageB;
            }
        }
    }
});

app.mount('#user-goal');