new Vue({
    el: "#app",
    data:{
        message: 'salut les gens',
        link: 'https://techma03.com',
        success: true,
        persons:['Jonathan','Aurel','Prince','Jilber','Henry']
    },
    methods:{
        cls: function(){
           return this.success === true ? 'bg-green-100' : 'bg-red-100'
        },
        close: function(){
            this.message="Fermé"
            this.success = false
        }
    }
    
})