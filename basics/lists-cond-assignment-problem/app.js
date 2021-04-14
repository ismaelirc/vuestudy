const app = Vue.createApp({
    data:function(){
        return {
            taskDescription: '',
            tasks: [],
            hideList: false
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.taskDescription);
            console.log(this.tasks);
        },
        showHide(){
            this.hideList = !this.hideList;
        }
    },
    computed:{
        buttonCaption(){
            return this.hideList ? 'Show list' : 'Hide list';
        }
    }
});

app.mount('#assignment')