<template>
  <div class="programa-container">
    <div class="program">
        <h2 style="color: rgb(11, 35, 114);">{{ titulo }}</h2>
       
    </div>
    <div class="title-page">
          GENERAR REPORTE
  </div> 
  <div class="datos">
      <p> 
        <span>Asesor:</span>
        <select v-model="asesor">
           <option disabled value="">Seleccionar asesor</option>
           <option>A</option>
           <option>B</option>
           <option>C</option>
        </select>
            <br><span>Seleccionado: {{ asesor }}</span><br>
            <span>Cargo:</span>
            <select v-model="cargo">
              <option disabled value="">Seleccione cargo</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
            <br><span>Seleccionado: {{ cargo }}</span><br>
            <span>Mes del reporte: </span>
            <select v-model="mesreporte">
              <option disabled value="">Seleccione el mes</option>
              <option>Enero</option>
              <option>Febrero</option>
              <option>Marzo</option>
              <option>Abril</option>
              <option>Mayo</option>
              <option>Junio</option>
              <option>Julio</option>
              <option>Agosto</option>
              <option>Septiembre</option>
              <option>Octubre</option>
              <option>Noviembre</option>
              <option>Diciembre</option>
            </select>
            <br><span>Seleccionado: {{ mesreporte }}</span><br>
        </p>
  </div> 
    <div class="boton-info">
      <div class="col-md-5 col-lg-5">
        <button class="binfo">Generar</button>
      </div>   
    </div>
    
  </div> 
   
</template>

<script setup>
   const titulo = "REPORTES MKT";
   
</script>

<style scoped>
  .programa-container{
    box-sizing: border-box;
    max-width: 1400px;
    margin: auto;
  }
  
  .program{
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

  }
  .program h2{
    font-size: 3.6em;
    color: white;
  }
  .about{
    padding:5px; 
    float: left; 
    width: 48%; 
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 2.2em;
  }
  .about-text{
    padding:5px; 
    float: left; 
    width: 48%; 
    text-align: justify;
    margin: 0 auto;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1.2em;
  }
  .inicio{
    font-size: 1.3em;
    font-weight: bold;
    padding: 7px 22px;
    border-radius: 20px;
    border: 2px solid rgba(0,0,0,0.3);
    box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    color: white;
    background-color: rgb(28, 35, 72);
    
  }
  .boton-info{
    margin: 0 auto;
    padding: 30px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    position: relative;
  }
  .binfo{
    font-size: 1.5em;
    font-weight: bold;
    padding: 7px 15px;
    border-radius: 20px;
    border: 2px solid rgba(0,0,0,0.0);
    color: white;
    background-color: rgb(82, 182, 24);
  }
  .title-page{
    max-width: 100%;
    margin: 0 auto;
    padding: 7px 22px;
    text-align: center;
    background-color: rgb(28, 35, 72);
    color:white;
    font-size: 2em;
  }
  .datos{
    font-size: 1.2em;
    padding: 15px 22px;
  }
</style>

