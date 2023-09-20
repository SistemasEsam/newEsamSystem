<template>
  <div class="component-with-shapes-and-image">
    <!-- Círculo amarillo -->
    <div class="yellow-circle"></div>

    <!-- Rectángulo azul marino -->
    <div class="blue-rectangle">
      <v-container>
        <v-col-3>
          <label>
            {{this.name}}
          </label>
        </v-col-3>
        <v-col-9>
          {{this.lastNameF}}
        </v-col-9>
      </v-container>
    </div>

    <!-- Rectángulo amarillo -->
    <div class="yellow-rectangle"></div>

    <!-- Descripción de la imagen -->
    <div class="description-container">
      <p class="description">Esta es una imagen con una descripción sobre ella.</p>
    </div>
  </div>
</template>

<script>
import { database } from '../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
export default {
  data() {
    return {
      idUser: 'aljiar23@gmail.com',
      name:'', 
      lastNameF:'',
      lastNameM:'',
    }
  },
  created(){
    this.getInstructorData()
  },

  methods: {
    async getInstructorData() {
      const docSnap = await getDoc(doc(database, 'instructors', this.idUser))
      if (docSnap.exists()) {
        this.name = docSnap.data().name
        this.lastNameF = docSnap.data().lastNameF
        this.lastNameM= docSnap.data().lastNameM
        console.log(this.name)
      } else {
        console.log('Document does not exist')
      }
    }
  },
};
</script>

<style>
.component-with-shapes-and-image {
  width: 8.5in;
  /* Ancho de hoja carta en pulgadas */
  height: 18.5in;
  /* Alto de hoja carta en pulgadas */
  padding: 0;
  /* Sin relleno */
  margin: 0;
  /* Sin márgenes */
  position: relative;
}

.yellow-circle,
.blue-rectangle,
.yellow-rectangle {
  position: absolute;
}

.yellow-circle {
  top: 0.5in;
  /* Ajustar la posición vertical del círculo */
  left: 0.7in;
  /* Ajustar la posición horizontal del círculo */
  width: 200px;
  /* Diámetro del círculo */
  height: 200px;
  /* Diámetro del círculo */
  border-radius: 50%;
  background-color: #FFDF0B;
  /* Color amarillo */
  z-index: 1;
  /* Asegura que el círculo esté por encima del rectángulo */
}

.blue-rectangle {
  top: 0.0in;
  /* Ajustar la posición vertical del rectángulo */
  left: 0in;
  /* Ajustar la posición horizontal del rectángulo */
  width: 3.5in;
  /* Ancho del rectángulo */
  height: 18.5in;
  /* Alto del rectángulo */
  background-color: #162D4A;
  /* Color azul marino */
}

.yellow-rectangle {
  top: 17.77in;
  /* Ajustar la posición vertical del rectángulo */
  left: 0.0in;
  /* Ajustar la posición horizontal del rectángulo */
  width: 1375px;
  /* Ancho del rectángulo */
  height: 70px;
  /* Alto del rectángulo */
  background-color: #FFDF0B;
  /* Color amarillo */
}

.description-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.description {
  color: black;
  /* Color del texto en negro */
  font-size: 23px;
  /* Tamaño de fuente 23px */
  font-family: Arial, sans-serif;
  /* Tipo de letra Arial */
  background-color: rgba(255, 255, 255, 0.7);
  /* Fondo transparente */
  padding: 10px;
  border-radius: 5px;
}</style>
