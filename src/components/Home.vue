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
            title: 'MAESTRIA EN GRSTION HOSPITALARIA',
            description: 'Formar posgraduados a nivel maestría con criterios y procesos de gestión hospitalaria en los servicios de salud, capaz de prever, como también transformar la calidad en la gestión hospitalaria',
            image: require('../assets/PED.jpg'),
            link: 'https://bit.ly/Inf-Mae-en-Gest-Hospitalaria'
          },
          {
            title: 'MAESTRIA EN BIG DATA Y ANALITICA DE DATOS',
            description: 'Desarrollar competencias eficaces y eficientes en gestión de datos masivos “Big Data” con una visión global e integradora en la gestión de cambio.',
            image: require('../assets/BG.jpg'),
            link: 'https://wa.link/cgplrm'
          },
          {
            title: 'MAESTRIA EN SALUD PUBLICA',
            description: 'Proporcionar a los participantes las competencias científicas y multidisciplinarias suficientes para encarar los retos y problemas globales de la Salud Pública, como los que estamos viviendo, formando expertos de distintas disciplinas comprometidas con la salud en el amplio, desde un enfoque humanista con el que cuenta la Salud Pública.',
            image: require('../assets/IQ.jpg'),
            link: 'https://wa.link/cdxufx'
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
        window.location.href = program.link;
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
  