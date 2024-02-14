<template>
  <v-container>
    <v-row>
      <v-col>
        <v-label>Seleccione Asesor</v-label>
        <v-select
          v-model="asesor"
          :items="filterAsesores">
        </v-select>
      </v-col>
      <v-col>
        <v-label>Seleccione mes</v-label>
        <v-select
          v-model="mes"
          :items="filterMes">
        </v-select>
      </v-col>
      <v-col>
        <v-label>Seleccione la gestion</v-label>
        <v-select
          v-model="gesti"
          :items="filterGestion">
        </v-select>
      </v-col>
    </v-row>
  </v-container> 
  <body>
    <div>
        <h4>INFORME MENSUAL DE ACTIVIDADES</h4>
        <p style="text-align: left;">A:  ESCUELA DE NEGOCIOS ESAM S.R.L. </p>
        <p style="text-align: left;">DE: {{asesor}} </p>
        <p style="text-align: left;">REF: INFORME: Actividades del mes de {{mes}} </p>
        <p style="text-align: left;">GESTION: {{gesti}} </p>
        <p style="text-align: left;">ANTECENDENTES:</p>
        <p style="text-align: left;">Mediante la presente hago llegar mi informe mensual de actividades correspondientes desde el -- de {{mes}} al -- {{mes}} {{gesti}}. Quiero informar que durante este periodo se estuvo trabajando con los siguientes programas:</p> 
    </div>   
    <div>
      <h4>PROGRAMAS</h4>
      <h4>INSCRITOS</h4>
      <v-container>
        <v-row>
          <v-col class="row-sessions"> Programa </v-col>
          <v-col class="row-sessions"> Participante</v-col>
          <v-col class="row-sessions"> Forma de pago </v-col>
          <v-col class="row-sessions"> Nro Cuotas </v-col>
          <v-col class="row-sessions"> Fecha </v-col>
          <v-col class="row-sessions"> Recibo </v-col>
          <v-col class="row-sessions"> Monto </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row></v-row>
                
            
           </v-col><v-col>
            <v-row>
              
            </v-row> </v-col
          ><v-col>
            <v-row>
              
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <br/>
    </div> 
  </body>  
 </template>

<script>
import Z from 'webfontloader';

export default{
  data() {
    return{
      asesor: '',
      mes: '',
      gesti:'',
      tempList: '',
      list: [],
      filterAsesores: [
        "Claudia Mireya Quenallata",
        "Fabian Humberto Quiros",
      
      ],
      filterMes: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      filterGestion: [
        "2023","2024",
      ],

    }
  },
  methods: {
    addList(e){
      if(e.key ===',' && this.tempList){
        if(!this.list.include(this.tempList)){
          this.list.push(this.tempList)
        }
        this.tempList = ''
      }
    }
   }
}
</script>

<style>
body {
    font-family: Avenir, Helvetica, Arial ,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c2c2c;
    margin-top: 60px;
    margin: 0;
    background: #eee;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label { 
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;  
}
button {
  background: #090135;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit { 
  text-align: center;
}
</style>