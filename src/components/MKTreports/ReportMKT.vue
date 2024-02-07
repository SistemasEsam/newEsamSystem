<template>
  <body>
    <form @submit.prevent="handleSubmit">
      <label for="">Seleccione el asesor:</label>
        <select  v-model="asesor">
         <option v-for="ase in asesores" :key="ase.ci" value="nombre">
             {{ ase.nombre }}
          </option>
         </select> <br>
      <label for="">Seleccione el mes:</label>
          <select  v-model="mes">
           <option v-for="m in meses" :key="m.id_mes" value="ames">
              {{ m.nombre_mes }}
           </option>
          </select> <br>
      <label for="">Seleccione la gestion:</label>
        <select  v-model="gesti">
          <option v-for="g in gestion" :key="g.id_gest" value="gest">
               {{ g.id_gest }}
           </option>
        </select>
      <label>Programas del Mes</label>
      <input type="text" v-model="tempList" @keyup.alt="addList">
      <div v-for="program in list" :key="program" class="pill">
        {{ program }}
      </div>
      <div class="submit">
        <button>GENERAR REPORTE</button>
      </div>   
      </form>
    <p>INFORME MENSUAL DE ACTIVIDADES</p>
    <p style="text-align: left;">A:  ESCUELA DE NEGOCIOS ESAM S.R.L. </p>
    <p style="text-align: left;">DE: {{asesor}} </p>
    <p style="text-align: left;">REF: INFORME: Actividades del mes de {{mes}} </p>
    <p style="text-align: left;">GESTION: {{gesti}} </p>
    <p style="text-align: left;">ANTECENDENTES:</p>
    <p>Mediante la presente hago llegar mi informe mensual de actividades correspondientes desde el -- de {{mes}} al -- {{mes}} {{gesti}}.</p><br>
    <p style="text-align: left;">Quiero informar que durante este periodo se estuvo trabajando con los siguientes programas:</p> 
   
    </body>  
 </template>

<script>
export default{
  data() {
    return{
      asesor: '',
      mes: '',
      gesti:'',
      tempList: '',
      list: [],
      asesores: [
        {
          ci:'1234',
          nombre: 'Claudia Mireya Quenallata',
          cargo: 'Asesor de marketing'
        },
        {
          ci:'4567',
          nombre: 'Fabian Humberto Quiros',
          cargo: 'Asesor de marketing'
        }
      ],
      meses: [
        {
          id_mes:'1',
          nombre_mes:'Enero'
        },
        {
          id_mes:'2',
          nombre_mes:'Febrero'
        },
        {
          id_mes:'3',
          nombre_mes:'Marzo'
        },
        {
          id_mes:'4',
          nombre_mes:'Abril'
        },
        {
          id_mes:'5',
          nombre_mes:'Mayo'
        },
        {
          id_mes:'6',
          nombre_mes:'Junio'
        },
        {
          id_mes:'7',
          nombre_mes:'Julio'
        },
        {
          id_mes:'8',
          nombre_mes:'Agosto'
        },
        {
          id_mes:'9',
          nombre_mes:'Septiembre'
        },
        {
          id_mes:'10',
          nombre_mes:'Octubre'
        },
        {
          id_mes:'11',
          nombre_mes:'Noviembre'
        },
        {
          id_mes:'12',
          nombre_mes:'Diciembre'
        }
      ],
      gestion: [
        {
          id_gest:'2023'
        },
        {
          id_gest:'2024'
        }
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