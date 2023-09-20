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
          <h2 class="custom-title">{{ item.title }}</h2>
          <h3 class="custom-subtitle">{{ item.subtitle }}</h3>
          <p class="custom-description">{{ item.description }}</p>
          <v-btn class="custom-btn" color="#FFDF10">{{
            item.buttonText
          }}</v-btn>
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
          title: "Imagen 1",
          subtitle: "Subtítulo de la Imagen 1",
          description: "Descripción de la Imagen 1.",
          buttonText: "Botón 1",
          backgroundImage: require("@/assets/BANCA.png"),
        },
        {
          title: "Imagen 2",
          subtitle: "Subtítulo de la Imagen 2",
          description: "Descripción de la Imagen 2.",
          buttonText: "Botón 2",
          backgroundImage: require("@/assets/GERENCIATRIBUTARIA.png"),
        },
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
  margin-right: -63%;
  position:relative
}

.custom-subtitle {
  font-size: 3em;
  font-weight: black;
  color: #D8D2D2;
  text-align: right;
  margin-right: -35%;
  position:relative
}

.custom-description {
  font-size: 1em;
  font-weight: regular;
  color: #D8D2D2;
  text-align: right;
  margin-right: -59%;
  position:relative
}

.custom-btn {
  font-size: 1em;
  font-weight: bold;
  color: #112533;
  text-align: right;
  margin-right: -65%;
  position:relative
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
  margin-left: 47%;
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
</style>
