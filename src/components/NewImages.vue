<template>
  <v-app class="styleapp">
    <v-carousel cycle hide-delimiters :show-arrows="false">
      <v-carousel-item v-for="(item, index) in carouselItems" :key="index">
        <v-sheet
          :style="{
            'background-image': `url(${item.backgroundImage})`,
            'background-size': 'cover',
          }"
          height="100%"
          class="d-flex flex-column align-center justify-center"
        >
        <v-col cols="6">
          <div class="content-right">
          
            <h2 class="custom-title">{{ item.title }}</h2>
          <h3 class="custom-subtitle ">{{ item.subtitle }}</h3>
          <p class="custom-description">{{ item.description }}</p>
          
          </div>
          <v-btn class="custom-btn pt-2" color="#FFDF10">{{
            item.buttonText
          }}</v-btn>

        </v-col>
      
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <p class="custome-more">CONOCE MÁS</p>

    <v-btn @click="scrollToComponent" variant="plain" class="custom-button">
      <v-icon color="#1E1E1C" left>mdi-chevron-down</v-icon>
    </v-btn>

    <div ref="componentToScrollTo" >
      <AboutusNewVue/>
      
    </div>
    <Programs/>
    <Map/>
  </v-app>
</template>

<script>
import AboutusNewVue from './AboutusNew.vue';
import Programs from './Programs.vue';
import Map from './Map.vue';
export default {
  components:{
AboutusNewVue,
Programs,
Map

  },
  methods: {
    scrollToComponent() {
      const element = this.$refs.componentToScrollTo;
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
  data() {
    return {
      carouselItems: [
        {
          title: "MAESTRIA EN",
          subtitle: "AUDITORIA Y CONTROL FINANCIERO",
          description: "Desarrolla habilidades en temas de control de gestión, estructura organizacional, tributación, modelo de negocio en auditoría y control financiero, para la gestión de las organizaciones públicas y privadas.",
          buttonText: "QUIERO INSCRIBIRME",
          backgroundImage: require("@/assets/AUDITORIA.png"),
        },
        {
          title: "MAESTRIA EN",
          subtitle: "BIM MANAGEMENT",
          description: "Capacitar a profesionales en los procesos que llevan a la planificación de una obra y con herramientas de software a través de tecnologías muy avanzada para el área de Arquitectura Digital y BIM.",
          buttonText: "QUIERO INSCRIBIRME",
          backgroundImage: require("@/assets/BIM.png"),
        },
        {
          title: "MAESTRIA EN ",
          subtitle: "DERECHO CIVIL Y PROCESAL CIVIL",
          description: "Aplica de manera coherente los principios del derecho civil en toda su amplitud manejando conocimientos avanzados en los procedimientos vinculados a su razonamiento jurídico que conlleve a la solución de problemas y casos, en el marco de las normas nacionales e instrumentos internacionales",
          buttonText: "QUIERO INSCRIBIRME",
          backgroundImage: require("@/assets/DERECHOCIVIL.png"),
        },
        {
          title: "MAESTRIA EN",
          subtitle: "GERENCIA TRIBUTARIA",
          description: "Desarrolla habilidades prácticas en el área de tributación, con un alto espíritu investigativo y crítico, ética profesional y conciencia de la realidad nacional, capaz de promover y conducir al desarrollo nacional.",
          buttonText: "QUIERO INSCRIBIRME",
          backgroundImage: require("@/assets/GERENCIATRIBUTARIA.png"),
        },
        {
          title: "MAESTRIA EN",
          subtitle: "GESTION HOSPITALARIA Y GERENCIA DE LOS SERVICIOS DE SALUD",
          description: "Desarrolla habilidades y destrezas necesarias para diseñar y crear misiones administrativas, con calidad y solvencia mejorando la gestión en salud.",
          buttonText: "QUIERO INSCRIBIRME",
          backgroundImage: require("@/assets/GH1.png"),
        },
        {
          title: "MAESTRIA EN",
          subtitle: "SALUD PUBLICA",
          description: "Desarrolla habilidades de análisis y ejecución integral en salud pública y epidemiología para enfrentar problemas de salud de manera efectiva y eficiente, promoviendo servicios de calidad",
          buttonText: "QUIERO INSCRIBIRME",
          backgroundImage: require("@/assets/SP1.png"),
        }
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos personalizados */
.styleapp{
position: absolute;




}
.custom-title {
  font-size: 2em; /* Tamaño de fuente relativo */
  font-weight: bold;
  color: #B2A612;
  text-align: right;
  margin-right: -77%;
  position:relative
}

.custom-subtitle {
  font-size: 3em;
  font-weight: black;
  color: #D8D2D2;
  text-align: right;
  margin-right: -78%;
  position:relative;
  line-height: 100%;
}

.custom-description {
  font-size: 1em;
  font-weight: regular;
  color: #D8D2D2;
  text-align: right;
  margin-right: -77%;
  position:relative
}

.custom-btn {
  font-size: 1em;
  font-weight: bold;
  color: #112533;
  text-align: left;
  margin-left: 80%;
  position: relative;
  top: -15%;
 
}

.custome-more {
  font-size: 2em;
  font-weight: bold;
  color: #172E4B;
  text-align: center;

  position: relative;
  
}

.custom-button {
  color: #d8d2d2;
  width: 10%;
  height: 3%;
  font-size: 2em;
  text-align: left ; /* Alineación a la izquierda */
  margin-left: 45%;
 position: relative; /* Margen izquierdo para mover la descripción hacia la izquierda */
}

.scroll-to-component {
  height: 500px;
  background-color: lightgray;
}

/* Ajustes para pantallas más pequeñas */
@media (max-width: 600px) {
  .custom-title,
  .custom-subtitle,
  .custom-description,
  .custom-btn,
  .custome-more {
    text-align: center;
  }
}
#button1 {
    background-color: #112533;
    
  }
  .content-right {
  padding: 20%; /* Espaciado para el contenido a la derecha */
}
</style>
