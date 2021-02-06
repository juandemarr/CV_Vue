var app = new Vue({
    el: '#main',
    data:{
        messageAJAX:'',
        varIdioma:true,
        show:true
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
        espanita:function(){
            this.varIdioma=true;
        },
        ingles:function(){
            this.varIdioma=false;
        }
    },
    computed:{
        "language":function(){
            if(this.varIdioma)
                return this.messageAJAX.espanol;
            else
                return this.messageAJAX.ingles;
        },
        "titulos":function(){
                return this.language[2].formacionAcademica;
        },
        "titulosComp":function(){
                return this.language[3].formacionComplementaria;
        },
        "experiencia":function(){
                return this.language[4].experiencia;
        },
        "habilidades":function(){
                return this.language[5].habilidades;
        },
        "idiomas":function(){
                return this.language[7].idiomas;
        },
        "proyectos":function(){
                return this.language[8].proyectos;
        }
    }
})