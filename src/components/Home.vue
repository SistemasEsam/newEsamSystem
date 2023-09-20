<template>
    <div class="carousel-wrapper">
      <v-responsive :aspect-ratio="16/9">
        <v-carousel
          v-model="activeIndex"
          cycle
          hide-delimiters
          class="carousel"
        >
          <v-carousel-item v-for="(program, index) in programs" :key="index">
            <div class="image-wrapper">
              <v-img :src="program.image" aspect-ratio="1" class="carousel-image"></v-img>
              <div class="overlay">
                <div class="program-details">
                  <h3 class="program-title">{{ program.title }}</h3>
                  <p class="program-description">{{ program.description }}</p>
                  <v-btn color="primary" @click="enroll(program)">Inscribirse</v-btn>
                </div>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-responsive>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeIndex: 0,
        programs: [
          {
            title: 'Programa de Ventas Estratégicas',
            description: 'Aprende las mejores estrategias de ventas para maximizar tus resultados.',
            image: require('../assets/GBYF.jpg')
          },
          {
            title: 'Programa de Ventas Estratégicas',
            description: 'Aprende las mejores estrategias de ventas para maximizar tus resultados.',
            image: require('../assets/BG.jpg')
          },
          {
            title: 'Programa de Ventas Estratégicas',
            description: 'Aprende las mejores estrategias de ventas para maximizar tus resultados.',
            image: require('../assets/IQ.jpg')
          },
          {
            title: 'Programa de Ventas Estratégicas',
            description: 'Aprende las mejores estrategias de ventas para maximizar tus resultados.',
            image: require('../assets/PP.jpg')
          },
          {
            title: 'Programa de Ventas Estratégicas',
            description: 'Aprende las mejores estrategias de ventas para maximizar tus resultados.',
            image: require('../assets/PED.jpg')
          },
          {
            title: 'Programa de Ventas Estratégicas',
            description: 'Aprende las mejores estrategias de ventas para maximizar tus resultados.',
            image: require('../assets/poster.jpg')
          }
        ]
      };
    },
    methods: {
      enroll(program) {
        // Lógica para redirigir a la página de inscripción del programa seleccionado
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel-wrapper {
    width: 100%;
    margin: auto;
  }
  
  .carousel {
    width: 100%;
    height: 100%;
  }
  
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    text-align: center;
  }
  
  .program-details {
    padding: 20px;
  }
  
  .program-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .program-description {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .v-btn {
    margin-top: 10px;
  }
  </style>
  