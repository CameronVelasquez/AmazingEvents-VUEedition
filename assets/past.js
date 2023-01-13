const {createApp} = Vue

createApp({
    data(){ // las variables que puedo usar en el html
      return {

        dataEvents: undefined,
        filteredCategories: undefined,
        pastEvents: undefined,
        searchValue: "",
        checked: [],
        filteredEvents: [],
        

      }  
    },
    created(){
        fetch("https://mindhub-xj03.onrender.com/api/amazing")
            .then( response => response.json())
            .then(info => {
                this.dataEvents = info.events
                this.pastEvents = this.dataEvents.filter(event => event.date < info.currentDate)
                this.filteredEvents = [...this.pastEvents]
                this.filterCategory(this.pastEvents)
            
                    
            })
            .catch(err => console.log(err))
    },
    methods:{
        filterCategory : function (data){
            return this.filteredCategories = new Set(data.map(event => event.category))
        },
        crossFilter : function (){
            let filterPerSearch = this.pastEvents.filter(event => event.name.toLowerCase().includes( this.searchValue.toLowerCase()))
            if (this.checked.length === 0){
                this.filteredEvents = filterPerSearch
            } else {
                let filterPerCheck = filterPerSearch.filter(event => this.checked.includes(event.category))
                this.filteredEvents = filterPerCheck
            }
        }

        
    },

}).mount("#app")




