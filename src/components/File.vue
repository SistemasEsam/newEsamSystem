<template>
  <page size="letter">
    <div class="component-with-shapes-and-image">
      <!-- Círculo amarillo -->
      <div class="yellow-circle">
        <div class="white-circle">
          <v-avatar size="200">
            <img :src="img" width="200" height="200">
          </v-avatar>
        </div>
      </div>

      <div class="blue-rectangle">
        <aside class="personalProfile">
          <div>
            <p>
              {{ this.name + ' ' + this.lastNameF + ' ' + this.lastNameM }}</p>
            <p>
              {{ this.numberId }}</p>
            <p>
              {{ this.dateOfBirth }}</p>
            <p>
              {{ this.gender }}</p>
            <p>{{ this.cityRadication + ', ' + this.selectedCountry }}
            </p>
            <p> {{ this.addres }} </p>
            <p>
              {{ this.personalPhone }}
            </p>
            <p>
              {{ this.email }}
            </p>
          </div>
        </aside>
      </div>
      <!-- Rectángulo amarillo -->
      <div class="yellow-rectangle"></div>

      <div class="education">
        <div class="degrees">
          <h1>
            Estudios Pregrado
          </h1>
          <ol v-for="(degree, index) in degrees" :key="index" class="cards">
            <p>{{ degree.universityDegree }}</p>
            <p>{{ degree.careerDegree }}</p>
            <p>{{ degree.levelOfDegree }}</p>
            <p>{{ degree.countryDegree }}</p>
            <p>{{ degree.graduationYearDegree }}</p>
            <p>{{ degree.graduationModalityDegree }}</p>
          </ol>
        </div>
        <div class="degrees">
          <h1>
            Estudios Postgrado
          </h1>
          <ol v-for="(postDegree, index) in postDegrees" :key="index" class="cards">
            <p>{{ postDegree.universityPostDegree }}</p>
            <p>{{ postDegree.namePostDegree }}</p>
            <p>{{ postDegree.titlePostDegree }}</p>
            <p>{{ postDegree.countryPostDegree }}</p>
            <p>{{ postDegree.graduationYearPostDegree }}</p>
            <p>{{ postDegree.graduationModalityPostDegree }}</p>
          </ol>
        </div>
        <div class="degrees">
          <h1>
            Cursos
          </h1>
          <ol v-for="(course, index) in courses" :key="index" class="cards">
            <p>{{ course.institutionCourse }}</p>
            <p>{{ course.nameCourse }}</p>
            <p>{{ course.countryCourse }}</p>
            <p>{{ course.yearCourse }}</p>
          </ol>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import { database } from '../firebase/firebase'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

export default {
  props: [
    "userId"
  ],
  data() {
    return {
      idUser: this.userId,
      name: '',
      lastNameF: '',
      lastNameM: '',
      personalPhone: null,
      personalPhoneAux: null,
      email: '',
      selectedCountry: '',
      cityRadication: '',
      addres: '',
      selectedDocumentType: null,
      numberId: '',
      dateOfBirth: '',
      formatedDateOfBrith: '',
      gender: '',
      degrees: [],
      postDegrees: [],
      courses: [],
      img: null,
      photoProfilePath: '',

    }
  },
  created() {
    this.getInstructorData()
    this.getDegrees()
    this.getPostDegrees()
    this.getCourses()
  },

  methods: {
    async getInstructorData() {
      const personalProfileData = await getDoc(doc(database, 'instructors', this.idUser))
      if (personalProfileData.exists()) {
        this.name = personalProfileData.data().name
        this.lastNameF = personalProfileData.data().lastNameF
        this.lastNameM = personalProfileData.data().lastNameM
        this.numberId = personalProfileData.data().numberId
        this.dateOfBirth = personalProfileData.data().dateOfBirth
        this.gender = personalProfileData.data().gender
        this.cityRadication = personalProfileData.data().cityRadication
        this.selectedCountry = personalProfileData.data().selectedCountry
        this.addres = personalProfileData.data().addres
        this.personalPhone = personalProfileData.data().personalPhone
        this.email = personalProfileData.data().email
        this.photoProfilePath = personalProfileData.data().photoProfilePath


      } else {
        console.log('Document does not exist')
      }
      this.loadProfileImage()
    },
    async getDegrees() {
      const dataDegrees = await getDocs(collection(database, 'instructors', this.idUser, 'degrees'))
      dataDegrees.forEach((degree) => {
        this.degrees.push({
          careerDegree: degree.data().careerDegree,
          countryDegree: degree.data().countryDegree,
          graduationModalityDegree: degree.data().graduationModalityDegree,
          graduationYearDegree: degree.data().graduationYearDegree,
          levelOfDegree: degree.data().levelOfDegree,
          universityDegree: degree.data().universityDegree

        })
      })
    },
    async getPostDegrees() {
      const dataPostDegrees = await getDocs(collection(database, 'instructors', this.idUser, 'postDegrees'))
      dataPostDegrees.forEach((postDegree) => {
        this.postDegrees.push({
          universityPostDegree: postDegree.data().universityPostDegree,
          namePostDegree: postDegree.data().namePostDegree,
          titlePostDegree: postDegree.data().titlePostDegree,
          countryPostDegree: postDegree.data().countryPostDegree,
          graduationYearPostDegree: postDegree.data().graduationYearPostDegree,
          graduationModalityPostDegree: postDegree.data().graduationModalityPostDegree
        })
      })
    },
    async getCourses() {
      const dataCourses = await getDocs(collection(database, 'instructors', this.idUser, 'courses'))
      dataCourses.forEach((course) => {
        this.courses.push({
          institutionCourse: course.data().institutionCourse,
          nameCourse: course.data().nameCourse,
          countryCourse: course.data().countryCourse,
          yearCourse: course.data().yearCourse

        })
      })
    },
    async loadProfileImage() {
      const storage = getStorage();
      console.log(this.photoProfilePath)
      await getDownloadURL(ref(storage, this.photoProfilePath))
        .then((url) => {
          // Or inserted into an <img> element
          this.img = url
        })
        .catch((error) => {
          // Handle any errors
        });
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

.blue-rectangle,
.yellow-rectangle,
.education {
  position: absolute;
}

.yellow-circle {
  top: 0.5in;
  /* Ajustar la posición vertical del círculo */
  left: 0.7in;
  /* Ajustar la posición horizontal del círculo */
  width: 220px;
  /* Diámetro del círculo */
  height: 220px;
  /* Diámetro del círculo */
  border-radius: 50%;
  background-color: #FFDF0B;
  /* Color amarillo */
  z-index: 1;
  /* Asegura que el círculo esté por encima del rectángulo */
  position: relative;
}

.white-circle {
  top: 0.1in;
  /* Ajustar la posición vertical del círculo */
  left: 0.1in;
  /* Ajustar la posición horizontal del círculo */
  width: 200px;
  /* Diámetro del círculo */
  height: 200px;
  /* Diámetro del círculo */
  border-radius: 50%;
  background-color: white;
  /* Color amarillo */
  z-index: 1;
  /* Asegura que el círculo esté por encima del rectángulo */
  position: relative;
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
  bottom: 0.0in;
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

.personalProfile {
  width: 100%;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: x-large;
  color: white;
  padding-top: 100%;
  padding-left: 15px;
  margin-left: 15px;
  float: right;
  text-align-last: center;
}

.degrees {
  width: 100%;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-left: 4in;
  color: #162D4A;
  margin-top: 0%;
}

.cards {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: large;
  color: #162D4A;
  font-weight: bold;
}

@page {
  size: 8.5in 11in;
  width: 8.5in;
  height: 11in;
  margin: 0;
}

.education {
  top: 0%;
}
</style>
