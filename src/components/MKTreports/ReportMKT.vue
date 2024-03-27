<template>

  <v-container>
    <h1>REPORTE DE MARKETING</h1>
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
    </v-row>
    <v-row>
      <v-col>
        <v-label>Seleccione la gestion</v-label>
        <v-select
          v-model="gesti"
          :items="filterGestion">
        </v-select>
      </v-col>
      <v-col>
        <v-label>Seleccione la sede</v-label>
        <v-select
          v-model="sede"
          :items="filterSede">
        </v-select>
      </v-col>
    </v-row>
    <v-row><v-radio-group label="Tipo de programa" v-model="filterTprogram">
      <v-radio
        label="Curso"
        id="course"
        value="course"
        @change="enableLevelPostDegree(true)"
      >
      </v-radio>
      <v-radio
        label="Especialidad"
        id="speciality"
        value="speciality"
        @change="enableLevelPostDegree(false)"
      >
      </v-radio>
      <v-radio
        label="Diplomado"
        id="postgraduate"
        value="postgraduate"
        @change="enableLevelPostDegree(false)"
      >
      </v-radio>
      <v-radio
        label="Maestría"
        id="mdegree"
        value="mdegree"
        @change="enableLevelPostDegree(false)"
      >
      </v-radio>
    </v-radio-group>
      <v-col>
        <v-label>Ingrese el nombre del programa</v-label>
        <v-text-field v-model="tempProgram" @keyup="addProgram"> </v-text-field>
        
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-label>Ingrese el nombre completo del inscrito</v-label>
        <v-text-field v-model="tempPart" @keyup="addPart"> </v-text-field>
        
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-label>Ingrese la forma de pago</v-label>
        <v-select
          v-model="tempFp"
          :items="filterFpago">
        </v-select>
        
      </v-col>
      <v-col>
        <v-label>Ingrese el numero de cuotas</v-label>
        <v-text-field :disabled="flagLevelPostDegree" v-model="tempNc" @keyup="addPart"> </v-text-field>
        
      </v-col>
    </v-row>
    <h2>DATOS DE LA MATRÍCULA</h2>
    <v-row>
      <v-col>
        <v-label>Ingrese la fecha</v-label>
        <v-text-field :disabled="flagLevelPostDegree" v-model="tempFechaM" @keyup="addPart"> </v-text-field>
        
      </v-col>
      <v-col>
        <v-label>Ingrese el monto</v-label>
        <v-text-field :disabled="flagLevelPostDegree" v-model="tempMontoM" @keyup="addPart"> </v-text-field>
        
      </v-col>
      <v-col>
        <v-label>Ingrese el numero de recibo</v-label>
        <v-text-field :disabled="flagLevelPostDegree" v-model="tempReciboM" @keyup="addPart"> </v-text-field>
        
      </v-col>
    </v-row>
    <h2>DATOS DE LA COLEGIATURA</h2>
    <v-row>
      <v-col>
        <v-label>Ingrese la fecha</v-label>
        <v-text-field v-model="tempFechaC" @keyup="addPart"> </v-text-field>
        
      </v-col>
      <v-col>
        <v-label>Ingrese el monto</v-label>
        <v-text-field v-model="tempMontoC" @keyup="addPart"> </v-text-field>
        
      </v-col>
      <v-col>
        <v-label>Ingrese el numero de recibo</v-label>
        <v-text-field v-model="tempReciboC" @keyup="addPart"> </v-text-field>
        
      </v-col>
    </v-row>
    <v-btn class="button-card">
      GENERAR REPORTE
    </v-btn>
  </v-container> 
  <body>
    <div>
        <h4>INFORME MENSUAL DE ACTIVIDADES</h4>
        <p style="text-align: left;">A:  ESCUELA DE NEGOCIOS ESAM S.R.L. </p>
        <p style="text-align: left;">DE: {{asesor}} </p>
        <p style="text-align: left;">REF: INFORME: Actividades del mes de {{mes}} </p>
        <p style="text-align: left;">Lugar y Fecha: {{sede}}  de {{ mes }} de {{gesti}} </p>
        <p style="text-align: left;">ANTECENDENTES:</p>
        <p style="text-align: left;">Mediante la presente hago llegar mi informe mensual de actividades correspondientes desde el -- de {{mes}} al -- {{mes}} {{gesti}}. Quiero informar que durante este periodo se estuvo trabajando con los siguientes programas:</p> 
    </div>   
    <div>
      <h4>PROGRAMAS</h4>
      <li v-for="program in Programs">
          {{ program}}
      </li>
      <h4>INSCRITOS PROGRAMAS DE CORTO ALCANCE</h4>
      <v-container>
        <v-row>
          <v-col class="row-sessions"> Programa</v-col>
          <v-col class="row-sessions"> Participante</v-col>
          <v-col class="row-sessions"> Forma de Pago</v-col>
          <v-col class="row-sessions"> Fecha</v-col>
          <v-col class="row-sessions"> Monto</v-col>
          <v-col class="row-sessions"> Recibo</v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="program in ProgramsC" >
              {{ program }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="inscrito in CParticipants" >
              {{ inscrito }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="pago in CPago" >
              {{ pago }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="fpago in CFecha" >
              {{ fpago }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="mont in CMonto" >
              {{ mont }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="reb in CRecibos" >
              {{ reb }}
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <h4>INSCRITOS PROGRAMAS DE LARGO ALCANCE</h4>
      <v-container>
        <v-row>
          <v-col class="row-sessions"> Programa</v-col>
          <v-col class="row-sessions"> Participante</v-col>
          <v-col class="row-sessions"> Forma de Pago</v-col>
          <v-col class="row-sessions"> Nro Cuotas </v-col>
          <v-col class="row-sessions"> Fecha Matricula</v-col>
          <v-col class="row-sessions"> Monto Matricula</v-col>
          <v-col class="row-sessions"> Recibo Matricula</v-col>
          <v-col class="row-sessions"> Fecha Colegiatura</v-col>
          <v-col class="row-sessions"> Monto Colegiatura</v-col>
          <v-col class="row-sessions"> Recibo Colegiatura</v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="programL in ProgramsL" >
              {{ programL }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="inscritoL in LParticipants" >
              {{ inscritoL }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="Lpago in LPago" >
              {{ Lpago }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="Lncuo in LNcuotas" >
              {{ Lncuo }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="LMF in LMFecha" >
              {{ LMF }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="LMmont in LMMontos" >
              {{ LMmont }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="LMreb in LMRecibos" >
              {{ LMreb }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="LF in LFecha" >
              {{ LF }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="Lmont in LMontos" >
              {{ Lmont }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="Lreb in LRecibos" >
              {{ Lreb }}
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <br/>
    </div> 
  </body>  
 </template>

<script>


export default{
  data() {
    return{
      asesor: '',
      mes: '',
      gesti:'',
      sede:'',
      pago: '',
      tempFp: '',
      tempNc: '',
      tempFechaM: '',
      tempMontoM: '',
      tempReciboM: '',
      tempFechaC: '',
      tempReciboC: '',
      tempMontoC: '',
      flagLevelPostDegree: true,
      tempProgram: '',
      ProgramsC: [],
      ProgramsL: [],
      tempPart: '',
      CParticipants: [],
      CPago: [],
      CFecha: [],
      CMonto: [],
      CRecibos: [],
      LParticipants: [],
      LPago: [],
      LNcuotas: [],
      LMFecha: [],
      LMMontos: [],
      LMRecibos: [],
      LFecha: [],
      LMontos: [],
      LRecibos: [],
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
      filterFpago: [
        "Contado","Cuotas",
      ],
      filterSede: [
        "Cochabamba Sucursal",
        "La Paz Central",
        "La Paz Sucursal",
      ]

    }
  },
  methods: {
    enableLevelPostDegree(flag) {
      this.flagLevelPostDegree = flag;
    },
    addProgram(e){
      if(e.key ==='.' && this.tempProgram){
        if(this.tempProgram.includes('Curso')){
          this.ProgramsC.push(this.tempProgram)
        }
        else{
          this.ProgramsL.push(this.tempProgram)
        }
        this.tempProgram = ''
      }
    },
   addPart(f){
      if(f.key ==='-' && this.tempPart){
        if(this.tempReciboM === '' ){
          this.CParticipants.push(this.tempPart)
          this.CPago.push(this.tempFp)
          this.CFecha.push(this.tempFechaC)
          this.CMonto.push(this.tempMontoC)
          this.CRecibos.push(this.tempReciboC)
          this.tempPart = ''
          this.tempFp = ''
          this.tempFechaC = ''
          this.tempMontoC = ''
          this.tempReciboC = ''
        }
        else{
          this.LParticipants.push(this.tempPart)
          this.LPago.push(this.tempFp)
          this.LNcuotas.push(this.tempNc)
          this.LMFecha.push(this.tempFechaM)
          this.LMMontos.push(this.tempMontoM)
          this.LMRecibos.push(this.tempReciboM)
          this.LFecha.push(this.tempFechaC)
          this.LMontos.push(this.tempMontoC)
          this.LRecibos.push(this.tempReciboC)
          this.tempPart = ''
          this.tempFp = ''
          this.tempNc = ''
          this.tempFechaC = ''
          this.tempMontoC = ''
          this.tempReciboC = ''
          this.tempFechaM = ''
          this.tempMontoM = ''
          this.tempReciboM = ''
        }
      }
    },
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