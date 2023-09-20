<template>
  <v-container width="1000" class="mx-auto">
    <v-container>
      <v-card v-for="(skillForm, index) in skillForms" :key="index" class="mb-4 card-style">
        <v-card-title>
          <v-col class="d-flex justify-center aling-center">
            <h2 class="headline header-form">HABILIDADES</h2>
            <v-btn append-icon class="icon-button" color="red" v-if="index !== 0" @click="deleteSkillForm(index)">
              <v-icon size="x-large">mdi-close-thick</v-icon>
            </v-btn>
          </v-col>
        </v-card-title>
        <v-card-text>
          <v-col>
            <v-row>
              <v-col>
                <v-text-field v-model="skillForm.skill" label="Habilidad"
                  @input="skillForm.skill = skillForm.skill.toUpperCase()" required></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-card-text>
      </v-card>
      <v-btn prepend-icon="mdi-plus" v-if="skillForms.length < 5" @click="addSkillForm()"
        class="fixed-bottom button-form">AGREGAR
        NUEVA HABILIDAD</v-btn>
    </v-container>
    <v-container>
      <v-card v-for="(languageForm, index2) in languageForms" :key="index2" class="mb-4 card-style">
        <v-card-title>
          <v-col class="d-flex justify-center aling-center">
            <h2 class="headline header-form">IDIOMAS</h2>
            <v-btn append-icon class="icon-button" color="red" v-if="index2 !== 0" @click="deleteLanguageForm(index2)">
              <v-icon size="x-large">mdi-close-thick</v-icon>
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
              <v-btn value="básico">Básico</v-btn>
              <v-btn value="medio">Medio</v-btn>
              <v-btn value="avanzado">Avanzado</v-btn>
            </v-btn-toggle>
            <h3>Nivel oral:</h3>
            <v-btn-toggle v-model="languageForm.speakeLevel">
              <v-btn value="básico">Básico</v-btn>
              <v-btn value="medio">Medio</v-btn>
              <v-btn value="avanzado">Avanzado</v-btn>
            </v-btn-toggle>
            <h3>Nivel de lectura:</h3>
            <v-btn-toggle v-model="languageForm.readLevel">
              <v-btn value="básico">Básico</v-btn>
              <v-btn value="medio">Medio</v-btn>
              <v-btn value="avanzado">Avanzado</v-btn>
            </v-btn-toggle>
            <h3>Nivel de escucha:</h3>
            <v-btn-toggle v-model="languageForm.listenLevel">
              <v-btn value="básico">Básico</v-btn>
              <v-btn value="medio">Medio</v-btn>
              <v-btn value="avanzado">Avanzado</v-btn>
            </v-btn-toggle>
          </v-col>
        </v-card-text>
      </v-card>
      <v-btn prepend-icon="mdi-plus" v-if="languageForms.length < 3" @click="addLanguageForm()"
        class="fixed-bottom mr-2 button-form">AGREGAR
        NUEVO IDIOMA</v-btn>
        <v-alert variant="elevated" density="compact" closable color="yellow" title="Atención" v-show="alertFlag"
        text="Verifique que los datos ingresados sean correctos!"></v-alert>
    </v-container>
    <v-container>
      <v-btn @mouseover="alertFlag = true" prepend-icon="mdi-content-save-outline" class="fixed-bottom mr-2 button-form" width="150px" density="default"
        :to="{ name: 'pdf', params: { id: this.idUser } }" @click="saveDataSkills(); saveDataLanguages()">guardar</v-btn>
      <v-btn prepend-icon="mdi-arrow-left-bold-outline" class="fixed-bottom mr-2 button-form" width="150px"
        density="default" @click="showPreviusForm()">
        atras</v-btn>
    </v-container>
  </v-container>
</template>
  
<script>

import { database } from '../firebase/firebase'
import { addDoc, collection, doc } from "firebase/firestore";

export default {
  props: [
    "userId"
  ],
  data() {
    return {
      idUser: this.userId,
      // idUser: 'aljiar23@gmail.com',
      alertFlag: false,
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

      languages: ['Español', 'Inglés', 'Francés', 'Alemán', 'Italiano', 'Portugues', 'Quechua', 'Aymara', 'Guaraní', 'Chino', 'Koreano']
    }
  },
  methods: {
    showPreviusForm() {
      let nextComponent = 'work-experience-profile'
      this.$emit('show-next-form', nextComponent, this.idUser)
    },
    addSkillForm() {
      if (this.skillForms.length < 5 && this.checkSkillList()) {
        this.skillForms.push({
          skill: ''
        })

      }
    },
    addLanguageForm() {
      if (this.languageForms.length < 5 && this.checkLanguagesList()) {
        this.languageForms.push({
          language: '',
          writeLevel: '',
          speakeLevel: '',
          readLevel: '',
          listenLevel: '',
        })
      }
    },
    deleteSkillForm(index) {
      this.skillForms.splice(index, 1)
    },
    deleteLanguageForm(index) {
      this.languageForms.splice(index, 1)
    },
    saveDataSkills() {
      const documentRef = doc(database, 'instructors', this.idUser)
      const collectionRef = collection(documentRef, 'skills')
      this.skillForms.forEach((skillFormValue) => {
        if (skillFormValue.skill != '') {
          addDoc(collectionRef, {
            skill: skillFormValue.skill
          })
        }
      })
    },
    saveDataLanguages() {
      const documentRef = doc(database, 'instructors', this.idUser)
      const collectionRef = collection(documentRef, 'languages')
      this.languageForms.forEach((languageFormValue) => {
        if (languageFormValue.language != '') {
          addDoc(collectionRef, {
            language: languageFormValue.language,
            writeLevel: languageFormValue.writeLevel,
            speakeLevel: languageFormValue.speakeLevel,
            readLevel: languageFormValue.readLevel,
            listenLevel: languageFormValue.listenLevel,
          })
        }
      })
    },
    checkSkillList() {
      let listSkillFilled = true
      this.skillForms.forEach((skillForm) => {
        if (skillForm.skill) {
          listSkillFilled = true
        } else {
          listSkillFilled = false
        }
      })
      return listSkillFilled
    },
    checkLanguagesList() {
      let listLanguagesFilled = true
      this.languageForms.forEach((languageForm) => {
        if (languageForm.language
          && languageForm.writeLevel
          && languageForm.speakeLevel
          && languageForm.readLevel
          && languageForm.listenLevel) {
          listLanguagesFilled = true
        } else {
          listLanguagesFilled = false
        }
      })
      return listLanguagesFilled
    }
  }
}
</script>
