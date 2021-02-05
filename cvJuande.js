var app = new Vue({
    el: '#main',
    data:{
        messageAJAX:'',
    },
    mounted(){
        let url="datos.JSON";
        axios.get(url)
        .then((response)=>{
            this.messageAJAX=response.data;
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    methods:{

    },
    computed:{
        "espanol":function(){
            return this.messageAJAX.espanol;
        },
        "ingles":function(){
            return this.messageAJAX.ingles;
        },
        "enlaceGithub":function(){
            return this.espanol[0].datosPersonales.enlaceGithub;
        }
    }
})