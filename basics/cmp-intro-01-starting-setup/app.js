const app = Vue.createApp({
    data(){
        return {
            friends:[
                {
                    id: 'manuel',
                    name: 'Manual Lorenz',
                    phone: '1158954761548',
                    email: 'ismael@localhost.com'
                },
                {
                    id: 'ismael',
                    name: 'Ismael Lorenz',
                    phone: '545461968423',
                    email: 'ismaelirc@localhost.com'
                }
            ]
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">Show Details</button>
          <ul v-if="details">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
          </ul>
        </li>`,
    data(){
        return {
            details: false,
            friend: {
                id: 'manuel',
                name: 'Manual Lorenz',
                phone: '1158954761548',
                email: 'ismael@localhost.com'
            }
        };
    },
    methods:{
        toggleDetails(){
            this.details = !this.details;
        }
    }
});

app.mount('#app');