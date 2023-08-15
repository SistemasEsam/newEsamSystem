<template>
  <v-sheet width="1000" class="mx-auto">

    <v-card v-for="(skillForm, index) in skillForms" :key="index" class="mb-4">
      <v-card-title>
        <v-col class="d-flex justify-center aling-center">
          <h2 class="headline">HABILIDADES</h2>
          <v-btn v-if="index !== 0" icon @click="deleteSkillForm(index)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field v-model="skillForm.skill" label="Habilidad" required></v-text-field>
            </v-col>
          </v-row>

        </v-col>
      </v-card-text>
    </v-card>
    <v-col>
      <v-btn v-if="skillForms.length < 5" @click="addSkillForm()" color="warning" class="fixed-bottom mr-2">AGREGAR
        NUEVA HABILIDAD</v-btn>
    </v-col>
    <v-col>
    </v-col>
    <v-card v-for="(languageForm, index2) in languageForms" :key="index2" class="mb-4">
      <v-card-title>
        <v-col class="d-flex justify-center aling-center">
          <h2 class="headline">IDIOMAS</h2>
          <v-btn v-if="index2 !== 0" icon @click="deleteLanguageForm(index2)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-card-title>
      <v-card-text>
        <v-col>
          <v-row>
            <v-select v-model="languageForm.language" :items="languages" label="Idioma" outlined></v-select>
          </v-row>
          <h3>Nivel de escritura:</h3>
          <v-btn-toggle v-model="languageForm.writeLevel">
            <v-btn value="basico">Basico</v-btn>
            <v-btn value="medio">Medio</v-btn>
            <v-btn value="avanzado">Avanzado</v-btn>
          </v-btn-toggle>
          <h3>Nivel oral:</h3>
          <v-btn-toggle v-model="languageForm.speakeLevel">
            <v-btn value="basico">Basico</v-btn>
            <v-btn value="medio">Medio</v-btn>
            <v-btn value="avanzado">Avanzado</v-btn>
          </v-btn-toggle>
          <h3>Nivel de lectura:</h3>
          <v-btn-toggle v-model="languageForm.readLevel">
            <v-btn value="basico">Basico</v-btn>
            <v-btn value="medio">Medio</v-btn>
            <v-btn value="avanzado">Avanzado</v-btn>
          </v-btn-toggle>
          <h3>Nivel de escucha:</h3>
          <v-btn-toggle v-model="languageForm.listenLevel">
            <v-btn value="basico">Basico</v-btn>
            <v-btn value="medio">Medio</v-btn>
            <v-btn value="avanzado">Avanzado</v-btn>
          </v-btn-toggle>
        </v-col>
      </v-card-text>
    </v-card>
    <v-btn v-if="languageForms.length < 3" @click="addLanguageForm()" color="warning" class="fixed-bottom mr-2">AGREGAR
      NUEVO IDIOMA</v-btn>
    <v-col>
      <v-btn class="success" @click="saveDataSkills(); saveDataLanguages() " :to="{name:'pdf', params:{id:this.idUser}}">guardar</v-btn>
      <!-- <v-btn class="success" :to="{name:'pdf', params:{id:this.idUser}}">guardar</v-btn> -->

    </v-col>
    <v-dialog v-model="dialogVisible" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Datos guardados</span>
        </v-card-title>
        <v-card-text>
          <p>Los datos se han guardado exitosamente.</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" to="/">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
</template>
  
<script>

import { database } from '../firebase/firebase'
import { addDoc, collection, doc } from "firebase/firestore";

export default {
  props:[
    "userId"
  ],
  data() {
    return {
      idUser: this.userId,
      dialogVisible: false,
      local: '',
      estate: true,
      skillForms: [
        {
          skill: ''
        }
      ],
      languageForms: [
        {
          language: '',
          writeLevel: '',
          speakeLevel: '',
          readLevel: '',
          listenLevel: '',
        }
      ],

      languages: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugues', 'Quechua', 'Aymara']
    }
  },
  methods: {
    addSkillForm(){
      if(this.skillForms.length<5){
        this.skillForms.push({
          skill: ''
        })

      }
    },
    addLanguageForm(){
      if(this.languageForms.length<5){
        this.languageForms.push({
          language: '',
          writeLevel: '',
          speakeLevel: '',
          readLevel: '',
          listenLevel: '',
        })
      }
    },
    deleteSkillForm(index){
      this.skillForms.splice(index,1)
    },
    deleteLanguageForm(index){
      this.languageForms.splice(index,1)
    },
    saveDataSkills(){
      this.skillForms.forEach((skillFormValue) =>{
        const documentRef = doc(database,'instructors',this.idUser)
        const collectionRef = collection(documentRef,'skills')
        addDoc(collectionRef,{
          skill: skillFormValue.skill
        })
      })
    },
    saveDataLanguages(){
      this.languageForms.forEach((languageFormValue) =>{
        const documentRef = doc(database,'instructors',this.idUser)
        const collectionRef = collection(documentRef,'languages')
        addDoc(collectionRef,{
          language: languageFormValue.language,
          writeLevel: languageFormValue.writeLevel,
          speakeLevel: languageFormValue.speakeLevel,
          readLevel: languageFormValue.readLevel,
          listenLevel: languageFormValue.listenLevel,
        })
      })
    }
  }
}
</script>
  