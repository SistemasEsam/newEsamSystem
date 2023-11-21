<template>
    <div class="contact-us">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h1>Contactanos</h1>
            <p>
              ¿Tienes alguna pregunta o comentario? ¡No dudes en ponerte en
              contacto con nosotros!
            </p>
            <img :src="require('../assets/aniversario.png')" class="image"  />
          </v-col>
          <v-col cols="12" md="6">
            <img :src="require('../assets/esamlogo.png')" class="logo-image" />
            <v-card>
           
              <v-card-title>Formulario de Contacto</v-card-title>
              
              <v-card-text>
                <v-form @submit.prevent="submitForm">
                  <v-text-field
                    v-model="name"
                    label="Nombre"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    label="Correo Electrónico"
                    required
                    type="email"
                  ></v-text-field>
                  <v-textarea
                    v-model="message"
                    label="Mensaje"
                    required
                  ></v-textarea>
                  <v-btn type="submit" color="primary">Enviar</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        message: "",
      };
    },
    methods: {
      submitForm() {
        // Aquí puedes implementar la lógica para enviar el formulario
        // por correo electrónico o a través de una API, etc.
        console.log("Formulario enviado:");
        console.log("Nombre:", this.name);
        console.log("Correo Electrónico:", this.email);
        console.log("Mensaje:", this.message);
  
        // Limpia el formulario después de enviar
        this.name = "";
        this.email = "";
        this.message = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-us {
    padding: 20px;
  }

  .image {
    display: block;
    margin: 0 auto;
    margin-bottom: 50px;
    max-width: 150%;
    max-height: 300px; /* Ajusta esta altura según tus necesidades */
  }

  .logo-image{

    display: block;
    margin: 0 auto;
    margin-bottom: 50px;
    max-width: 100%;
    max-height: 100px;




  }
  </style>
  