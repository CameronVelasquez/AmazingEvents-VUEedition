const {createApp} = Vue

createApp({
    data(){ 
      return {

        data: undefined,
        detailsOnly: undefined,

      }  
    },
    created(){
        fetch("https://mindhub-xj03.onrender.com/api/amazing")
            .then( response => response.json())
            .then(info => {
                this.data = info.events
                this.toCompareUrl(this.data)
                
                
                
                
                
            })
            .catch(err => console.log(err))
    },
    methods:{
        getUrl : function (){
            let cadenaParametroUrl = location.search
            let parametros = new URLSearchParams(cadenaParametroUrl)
            let idCard = parametros.get("idUrl")
            return idCard

            
        },
        toCompareUrl : function (dataEvents){
            let url = this.getUrl()
            this.detailsOnly = dataEvents.find(evento => evento._id == url)
        }
        
        
        

        
    },
}).mount("#app")



