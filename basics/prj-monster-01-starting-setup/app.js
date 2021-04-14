function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return {
            healthMonster: 100,
            healthPlayer: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    watch:{
        healthPlayer(value){
            if(value <= 0 && this.healthMonster <= 0){
                this.winner = 'Draw';
            }else if(value <= 0){
                this.width = 'monster';
            }
        },
        healthMonster(value){
            if(value <= 0 && this.healthPlayer <= 0){
                this.winner = 'Draw';
            }else if(value <= 0){
                this.width = 'player';
            }
        }
    },
    methods:{
        startNewGame(){
            this.healthPlayer = 100;
            this.healthMonster = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        surrender(){
            this.winner = 'monster';
            this.addLog('player', 'surrender', attackValue);
        },
        attackMonster(){
            
            this.currentRound++;

            const attackValue = getRandomValue(5,12);
            this.healthMonster = this.healthMonster - attackValue;
            this.addLog('player', 'attack', attackValue);
            this.attackPlayer();

        },
        attackPlayer(){

            const attackValue = getRandomValue(8, 15);
            this.healthPlayer = this.healthMonster - attackValue;
            this.addLog('monster', 'attack', attackValue);
        },
        specialAttackMonster(){
            
            this.currentRound++;

            const attackValue = getRandomValue(10,25);
            this.healthMonster = this.healthMonster + attackValue;
            this.addLog('player', 'special attack', attackValue);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            this.attackPlayer();

            const healValue = getRandomValue(8, 20);
            
            if(this.healthPlayer + healValue > 100){
                this.healthPlayer = 100;
            }else{
                this.healthPlayer += healValue;
            }
            this.addLog('player', 'heal',healValue);
        },
        addLog(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    },
    computed:{
        monsterBarStyles() {
            
            if(this.healthMonster < 0){
                return {width: '0%'};    
            }

            return {width: this.healthMonster + '%'};
        },
        playerBarStyles() {
            
            if(this.healthPlayer < 0){
                return {width: '0%'};    
            }

            return {width: this.healthPlayer + '%'};
        },
        specialAttackEnabled(){
            return this.currentRound % 3 !== 0;
        }
    }
});

app.mount('#game');