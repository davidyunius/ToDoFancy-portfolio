var app_register = new Vue ({
    el: "#app_register",
    data: {
        input: {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        register: function() {
            let self = this;
            axios.post('http://localhost:3000/users/add', {
                name: self.input.name,
                email: self.input.email,
                password: self.input.password
            }).then(data => {
                window.location.href = './register.html'
                console.log(data);
            }).catch(err => {
                console.log(err);
            })
        },
        login: function () {
            let self = this;
            axios.post('http://localhost:3000/users/login', {
                email: self.input.email,
                password: self.input.password
            }).then(data => {
                window.location.href = './task.html'
                console.log(data);
            }).catch(err => {
                console.log(err);
            })
        }
    }
})