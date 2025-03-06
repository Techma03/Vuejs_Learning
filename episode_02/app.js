let vm = new Vue({
    el: '#app',
    data: {
        seconds: 0
    },
    mounted: function () {
        this.$interval = setInterval(() => {
            console.log('Time')
            this.seconds++
        }, 1000)
    },
    destroyed: function () {
        clearInterval(this.$interval)
    }
})

// let vm = new Vue({
//     el: "#app",
//     data: {
//         message: 'salut les gens',
//         link: 'https://techma03.com',
//         success: true,
//         persons: ['Jonathan', 'Aurel', 'Prince', 'Jilber', 'Henry']
//     },
//     methods: {
//         addPerson: function(){
//             this.persons.push('Moses')
//         }

//     }

// })