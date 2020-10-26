const app = Vue.createApp({
    
    data: () =>({
        users: [],
    }),
    created(){
        this.obtenerUsuarios()
    },
    methods: {
        obtenerUsuarios(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(datos => {
                this.users = datos
            })
        }
    }
})

const vm = app.mount('#app')