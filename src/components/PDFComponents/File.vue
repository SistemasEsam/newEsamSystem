<template>
  <div class="component-with-shapes-and-image">
    <!-- Círculo amarillo -->
    <v-container>
      <div class="yellow-circle">
        <div class="white-circle">
          <v-avatar size="200">
            <img id="photoProfile" :src="img" width="200" height="200">
          </v-avatar>
        </div>
      </div>
      <div class="blue-rectangle">
        <aside class="personalProfile">
          <div class="align-personal-data">
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
      <div class="education">
        <div class="degrees">
          <h1 class="sub-title">
            Estudios Pregrado
          </h1>
          <v-card v-for="(degree, index) in degrees" :key="index" class="cards mb-3" flat="true">
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize pr-3"> Carrera: </p> <p class="content-style">{{ degree.levelOfDegree }} en {{ degree.careerDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize pr-3"> Universidad/Instituto:</p> <p>{{ degree.universityDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize pr-3"> País:</p> <p>{{ degree.countryDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize pr-3"> Año de Graduación:</p>
                <p>{{ degree.graduationYearDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-3 pt-0 line-customize">
                <p class="h3-customize pr-3"> Modalidad de Graduación:</p>
                <p>{{ degree.graduationModalityDegree }}</p>
              </v-col>
            </v-row>
            <v-spacer></v-spacer>
          </v-card>
        </div>
        <div class="degrees">
          <h1 class="sub-title">
            Estudios Postgrado
          </h1>
          <v-card v-for="(higherEducationPostDegree, index) in higherEducationPostDegrees" :key="index"
            class="cards mt-1 mb-1 pt-3" flat="true">
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize pr-3"> Postgrado:</p> 
                <p>{{ higherEducationPostDegree.levelHigherEducation }} en {{
                  higherEducationPostDegree.nameHigherEducation }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize pr-3"> Universidad/Instituto:</p>
                <p>{{ higherEducationPostDegree.institutionName }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize pr-3"> País:</p>
                <p>{{ higherEducationPostDegree.countryHigherEducationName }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize pr-3"> Año de Realización:</p>
                <p>{{ higherEducationPostDegree.graduationYearHigherEducation }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-3 line-customize">
                <p class="h3-customize pr-3"> Modalidad de Graduación:</p>
                <p>{{ higherEducationPostDegree.graduationModalityHigherEducation }}</p>
              </v-col>
            </v-row>
          </v-card>

          <v-card v-for="(postDegree, index) in postDegrees" :key="index" class="cards mt-1 mb-1" flat="true">
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-3 line-customize">
                <p class="h3-customize pr-3"> Postgrado:</p>
                <p>{{ postDegree.titlePostDegree }} en {{ postDegree.namePostDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize pr-3"> Universidad/Instituto:</p>
                <p>{{ postDegree.universityPostDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize pr-3"> País:</p>
                <p>{{ postDegree.countryPostDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize pr-3"> Año de Realización:</p>
                <p>{{ postDegree.graduationYearPostDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-3 line-customize">
                <p class="h3-customize pr-3"> Modalidad de Graduación:</p>
                <p>{{ postDegree.graduationModalityPostDegree }}</p>
              </v-col>
            </v-row>
          </v-card>
        </div>
        <div class="degrees">
          <h1 class="sub-title">
            Cursos
          </h1>
          <v-card v-for="(course, index) in courses" :key="index" class="cards mt-1 mb-1" flat="true">
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize pr-3"> Curso </p>
                <p>{{ course.nameCourse }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize pr-3"> Universidad/Instituto:</p>
                <p>{{ course.institutionCourse }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize pr-3"> País:</p>
                <p>{{ course.countryCourse }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-3 line-customize">
                <p class="h3-customize pr-3"> Año de Realización:</p>
                <p>{{ course.yearCourse }}</p>
              </v-col>
            </v-row>
          </v-card>
        </div>
        <div class="degrees">
             <h1 class="sub-title">
              Habilidades Blandas
            </h1>
            <v-card flat="true">
              <v-list>
                <v-list-item v-for="(skill, index) in skills" :key="index" :value="skill" class="cards1 card-style">
                  <template v-slot:prepend>
                    <v-icon class="card-style" icon="mdi-check-circle-outline"></v-icon>
                  </template>
                  <v-list-item-title class="cards1">{{ skill.skill }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </div>
      </div>
    </v-container>
    <div class="yellow-bar"></div>
  </div>
</template>

<script>
import { database } from '../../firebase/firebase'
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
      higherEducationPostDegrees: [],
      courses: [],
      img: null,
      photoProfilePath: '',
      skills: [],


    }
  },
  created() {
    this.getInstructorData()
    this.getDegrees()
    this.getPostDegrees()
    this.getCourses()
    this.getHigherEducationPostDegree()
    this.getSkills()

  },

  methods: {
    async getInstructorData() {
      const personalProfileData = await getDoc(doc(database, 'instructors', this.idUser))
      if (personalProfileData.exists()) {
        this.name = personalProfileData.data().name
        this.lastNameF = personalProfileData.data().lastNameF
        this.lastNameM = personalProfileData.data().lastNameM
        this.numberId = personalProfileData.data().numberId
        this.dateOfBirth = this.formatDate(personalProfileData.data().dateOfBirth)
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
          countryDegree: (degree.data().countryDegree).toLowerCase(),
          graduationModalityDegree: degree.data().graduationModalityDegree,
          graduationYearDegree: degree.data().graduationYearDegree,
          levelOfDegree: degree.data().levelOfDegree,
          universityDegree: degree.data().universityDegree

        })
      })
    },
    async getHigherEducationPostDegree() {
      const higherEducationPostDegrees = await getDocs(collection(database, 'instructors', this.idUser, 'higherEducationPostDegree'))
      higherEducationPostDegrees.forEach((higherEducationPostDegree) => {
        this.higherEducationPostDegrees.push({
          nameHigherEducation: higherEducationPostDegree.data().nameHigherEducation,
          institutionName: higherEducationPostDegree.data().institutionName,
          levelHigherEducation: higherEducationPostDegree.data().levelHigherEducation,
          countryHigherEducationName: (higherEducationPostDegree.data().countryHigherEducationName).toLowerCase(),
          graduationModalityHigherEducation: higherEducationPostDegree.data().graduationModalityHigherEducation,
          graduationYearHigherEducation: higherEducationPostDegree.data().graduationYearHigherEducation,
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
          countryPostDegree: (postDegree.data().countryPostDegree).toLowerCase(),
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
          countryCourse: (course.data().countryCourse).toLowerCase(),
          yearCourse: course.data().yearCourse

        })
      })
    },
    async getSkills() {
      const dataSkills = await getDocs(collection(database, 'instructors', this.idUser, 'skills'))
      dataSkills.forEach((skill) => {
        this.skills.push({
          skill: skill.data().skill
        })

      })
    },
    async loadProfileImage() {
      const storage = getStorage();
      console.log(this.photoProfilePath)
      await getDownloadURL(ref(storage, this.photoProfilePath))
        .then((url) => {
          // Or inserted into an <img> element
          const img = document.getElementById('photoProfile')
          img.setAttribute('src', url)
        })
        .catch((error) => {
          // Handle any errors
        });
    },
    formatDate(date) {
      let dateFirebase = date.toDate()
      let dateReturned = dateFirebase.getDate() + '/' + (dateFirebase.getMonth() + 1) + '/' + dateFirebase.getFullYear()
      return dateReturned
    }

  },
};
</script>