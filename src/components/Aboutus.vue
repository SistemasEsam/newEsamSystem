<template>
    <div class="about-us">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div class="about-content">
              <h1 class="animated-text">Sobre Nosotros</h1>
              <p>
                Somos una empresa comprometida con brindar soluciones innovadoras
                y de alta calidad a nuestros clientes.
              </p>
              <v-btn v-if="!showMission" @click="showMission = true" class="cta-button" color="primary">
                ¡Conócenos más!
              </v-btn>
              <p v-if="showMission">
                <img :src="require('../assets/esamchicas.png')" class="image" />
                Nuestra misión es Convertir los procesos de aprendizaje en un estímulo permanente, para formar líderes emprendedores en las diferentes áreas del saber humano, así lograr el desarrollo de las personas y organización de nuestro país.
              </p>
              <v-btn v-if="showMission && !showVision" @click="showVision = true" class="cta-button" color="primary">
                Ver Nuestra Misión
                <v-expand-transition>
                  <v-icon v-if="showVision" class="expand-icon">mdi-chevron-down</v-icon>
                </v-expand-transition>
              </v-btn>
              <p v-if="showVision">
                <img :src="require('../assets/esamchicos.png')" class="image" />
                Nuestra visión es Ser una organización líder en formación profesional que sea reconocida por la calidad de las actividades que desarrolla gracias a una constante actualización a nivel nacional e internacional.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <img :src="require('../assets/esamlogo.png')" class="image animated-image" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMission: false,
        showVision: false,
      };
    },
  };
  </script>
  
  <style scoped>
  .about-us {
    padding: 20px;
  }
  
  .about-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .animated-text {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    animation: slide-up 1s ease-out;
  }
  
  .cta-button {
    margin-top: 1rem;
    animation: fade-in 1.5s ease-out;
    transition: transform 0.3s ease-in-out;
  }
  
  .cta-button:hover {
    transform: scale(1.05);
  }
  
  .animated-image {
    animation: scale-up 1.5s ease-out;
  }
  
  .expand-icon {
    transition: transform 0.3s ease-in-out;
  }
  
  .cta-button:hover .expand-icon {
    transform: rotate(180deg);
  }
  
  @keyframes slide-up {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes scale-up {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }
  </style>
  