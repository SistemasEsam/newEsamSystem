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
    <v-row>
      <v-col>
        <v-label>Ingrese el programa</v-label>
        <v-text-field v-model="tempProgram" @keyup="addProgram"> </v-text-field>
        
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-label>Ingrese el inscrito</v-label>
        <v-text-field v-model="tempPart" @keyup="addPart"> </v-text-field>
        
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-label>Ingrese la forma de pago</v-label>
        <v-text-field v-model="tempFp" @keyup="addPart"> </v-text-field>
        
      </v-col>
      <v-col>
        <v-label>Ingrese el numero de cuotas</v-label>
        <v-text-field v-model="tempNc" @keyup="addPart"> </v-text-field>
        
      </v-col>
      <v-col>
        <v-label>Ingrese el monto</v-label>
        <v-text-field v-model="tempMonto" @keyup="addPart"> </v-text-field>
        
      </v-col>
      <v-col>
        <v-label>Ingrese el numero de recibo</v-label>
        <v-text-field v-model="tempRecibo" @keyup="addPart"> </v-text-field>
        
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
          <v-col class="row-sessions"> Nro Cuotas</v-col>
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
            v-for="inscrito in Participants" >
              {{ inscrito }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="fpago in Pagos" >
              {{ fpago }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="ncuo in Ncuotas" >
              {{ ncuo }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="mont in Montos" >
              {{ mont }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="reb in Recibos" >
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
          <v-col class="row-sessions"> Descuento</v-col>
          <v-col class="row-sessions"> Colegiatura menos el descuento</v-col>
          <v-col class="row-sessions"> Nro Cuotas Matricula</v-col>
          <v-col class="row-sessions"> Monto Matricula</v-col>
          <v-col class="row-sessions"> Recibo Matricula</v-col>
          <v-col class="row-sessions"> Nro Cuotas Colegiatura</v-col>
          <v-col class="row-sessions"> Monto Colegiatura</v-col>
          <v-col class="row-sessions"> Recibo Colegiatura</v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="programC in ProgramsC" >
              {{ programC }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="inscritoC in CursParticipants" >
              {{ inscritoC }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="fpago in Pagos" >
              {{ fpago }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="ncuo in Ncuotas" >
              {{ ncuo }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="mont in Montos" >
              {{ mont }}
            </v-row>
          </v-col>
          <v-col>
            <v-row
            class="row-sessions"
            v-for="reb in Recibos" >
              {{ reb }}
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
      tempProgram: '',
      ProgramsC: [],
      ProgramsL: [],
      tempPart: '',
      CursParticipants: [],
      tempFp: '',
      Pagos: [],
      tempNc: '',
      Ncuotas: [],
      tempMonto: [],
      Montos: [],
      tempRecibo: [],
      Recibos: [],
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
      if(f.key ==='-' && this.tempPart && this.tempFp && this.tempNc && this.tempMonto  && this.tempRecibo){
          this.CursParticipants.push(this.tempPart)
          this.Pagos.push(this.tempFp)
          this.Ncuotas.push(this.tempNc)
          this.Montos.push(this.tempMonto)
          this.Recibos.push(this.tempRecibo)
          this.tempPart = ''
          this.tempFp = ''
          this.tempNc = ''
          this.tempMonto = ''
          this.tempRecibo = ''
      }
    },
   }
}
</script>

<style>

</style>