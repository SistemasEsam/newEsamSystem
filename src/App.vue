<template>
  <div class="programa-container">
    <div class="program">
        <h2 style="color: yellow;">{{ programa }}</h2>
        <h2>{{ nombrep }}</h2>
        <h3> {{ descripcion }} </h3>
    </div>
    <p class="about">COMPETENCIAS Y SALIDA</p>
    <p class="about">DATOS</p>
    <p class="about-text"> La maestria esta dirigida a profesionales y/o egresados del sector público y privado , que necesitan poseer conocimiento de autidoría y control financiero, para ejercer con profesionalismo actividades relacionadas con esta área del conocimiento.
        <br><br>
        La maestria esta dirigida a profesionales y/o egresados del sector público y privado , que necesitan poseer conocimiento de autidoría y control financiero, para ejercer con profesionalismo actividades relacionadas con esta área del conocimiento.</p>
    <p class="about-text">CERTIFICACIÓN: Universidad Nacional Siglo XX <br>
        DURACIÓN: 18 meses <br>
        HORAS ACADÉMICAS: 2400 <br>
        DÍA DE CLASE: Jueves
    </p>
        <br><br>
    <div style="padding:5px; float: right; width: 45%; text-align: justify;"><button class="inicio"> {{ finicio }} </button></div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="boton-info">
      <div class="col-md-7 col-lg-7">
        <button class="binfo">SOLICITAR MAS INFORMACION</button>
      </div>   
    </div>
    
  </div> 
  <div class="title-modulo">
          CONTENIDO MODULAR
  </div> 
  <div class="modulos">
      <p> 0. Gestión de Tecnologia de la Información 
        <br>1. Marco Normativo de Información Financiera
        <br>2. Sistema Tributario em Bolivia y Auditoria Tributaria
        <br>3. Gestión Estratégia Empresarial
        <br>4. Finanzas Corporativas
        <br>5. Sistemas y Estructuras de Negocios
        <br>6. Metodología de la Investigación 
        <br>7. Auditoria Integral
        <br>8. Control y Gestión de Procesos de Control Interno Financiero
        <br>9. Auditoria Gubernamental
        <br>10. Auditoria Forense
        <br>11. Auditoria de Sistemas Informáticos
        <br>12. Auditoria con Base en Riesgos y Modelo de Negocios
        <br>13. Auditoria de Proyectos de Inversión 
        <br>14. Taller de Tesis I
        <br>15. Taller de Tesis II
        <br>16. Taller de Tesis III
        </p>
  </div> 
  <div class="boton-info">
    <div class="col-md-7 col-lg-7">
      <button class="binfo">SOLICITAR MAS INFORMACION</button>
    </div>   
  </div>    
</template>

<script setup>
   const programa = "MAESTRIA EN";
   const nombrep = "AUDITORIA Y CONTROL FINANCIERO";
   const descripcion = "Desarrolla tus habilidades ...";
   const finicio = "INICIA SEPTIEMBRE";
   
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
    padding: 80px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    background-image: linear-gradient(
        0deg,
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.5)
    )
    ,url("assets/principal.jpg");
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
    font-size: 2em;
    font-weight: bold;
    padding: 7px 22px;
    border-radius: 20px;
    border: 2px solid rgba(0,0,0,0.0);
    color: white;
    background-color: rgb(188, 185, 98);
  }
  .title-modulo{
    max-width: 100%;
    margin: 0 auto;
    padding: 7px 22px;
    text-align: center;
    background-color: rgb(28, 35, 72);
    color:white;
    font-size: 2em;
  }
  .modulos{
    font-size: 1.2em;
    padding: 15px 22px;
  }
</style>

