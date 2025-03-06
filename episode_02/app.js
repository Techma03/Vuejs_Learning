let vm = new Vue({
    el: "#app",
    data:{
        message: 'salut les gens',
        link: 'https://techma03.com',
        success: true,
        persons:['Jonathan','Aurel','Prince','Jilber','Henry']
    },
    methods:{
        close: function(){
            this.message="Fermé"
            this.success = false
        }
    }
    
})