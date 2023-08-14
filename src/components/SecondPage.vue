<template>
  <page size="letter">
  <div class="component-with-shapes-and-description">
    <!-- Rectángulo amarillo -->

    <div class="yellow-rectangle1"></div>
    <!-- Descripción del contenido -->
    <div class="education2">
      <div class="degrees2">
        <h1>
          Publicaciones
        </h1>
        <v-card v-for="(publication, index) in publications" :key="index" class="cards1">
          <p>{{ publication.publisher }}</p>
          <p>{{ publication.namePublication }}</p>
          <p>{{ publication.typePublication }}</p>
          <p>{{ publication.countryPublication }}</p>
          <p>{{ publication.datePublication }}</p>
        </v-card>
      </div>
      <div class="degrees2">
        <h1>
          Experiencia Laboral
        </h1>
        <v-card v-for="(job, index) in jobs" :key="index" class="cards1">
          <p>{{ job.jobTitleWorkExperience }}</p>
          <p>{{ job.institutionWorkExperience }}</p>
          <p>{{ job.cityWorkExperience + ',' + job.countryWorkExperience }}</p>
          <p>{{ job.descriptionWorkExperience }}</p>
          <p>{{ job.startWorkExperience + '/' + job.endWorkExperience }}</p>
          <p>{{ job.nameReference + ' ' + job.lastnameReference }}</p>
          <p>{{ job.jobTitleReference }}</p>
          <p>{{ job.phoneReference }}</p>
        </v-card>
      </div>
      <div class="degrees2">
        <h1>
          Experiencia Docente
        </h1>
        <v-card v-for="(instructorJob, index) in instructorJobs" :key="index" class="cards1">
          <p>{{ instructorJob.subjectInstructorExperience }}</p>
          <p>{{ instructorJob.typeInstructor }}</p>
          <p>{{ instructorJob.academicLevel }}</p>
          <p>{{ instructorJob.institutionInstructorExperience }}</p>
          <p>{{ instructorJob.startInstructorExperience + '/' + instructorJob.endInstructorExperience }}</p>
        </v-card>
      </div>
      <div class="degrees2">
        <h1>
          Habilidades Blandas
        </h1>
        <v-card v-for="(skill, index) in skills" :key="index" class="cards1">
          <p>{{ skill.skill }}</p>
        </v-card>
      </div>
      <div class="degrees2">
        <h1>
          Idiomas
        </h1>
        <v-card v-for="(language, index) in languajes" :key="index" class="cards1">
          <p>{{ language.language }}</p>
          <p>Escucha: {{ language.listenLevel }}</p>
          <p>Lectura: {{ language.readLevel }}</p>
          <p>Habla: {{ language.speakeLevel }}</p>
          <p>Escritura: {{ language.writeLevel}}</p>
        </v-card>
      </div>
    </div>
    </div>
  </page>
</template>
  
<script>
import { database } from '../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'
export default {
  data() {
    return {
      idUser: 'aljiar23@gmail.com',
      publications: [],
      jobs: [],
      instructorJobs: [],
      skills: [],
      languajes: [],
    }
  },
  created() {
    this.getPublications()
    this.getJobs()
    this.getInstructorJobs()
    this.getSkills()
    this.getLanguajes()
  },
  methods: {
    async getPublications() {
      const dataPublications = await getDocs(collection(database, 'instructors', this.idUser, 'publications'))
      dataPublications.forEach((publication) => {
        this.publications.push({
          publisher: publication.data().publisher,
          namePublication: publication.data().namePublication,
          typePublication: publication.data().typePublication,
          countryPublication: publication.data().countryPublication,
          datePublication: publication.data().datePublication,

        })
      })
    },
    async getJobs() {
      const dataJobs = await getDocs(collection(database, 'instructors', this.idUser, 'jobs'))
      dataJobs.forEach((job) => {
        this.jobs.push({
          jobTitleWorkExperience: job.data().jobTitleWorkExperience,
          institutionWorkExperience: job.data().institutionWorkExperience,
          cityWorkExperience: job.data().cityWorkExperience,
          countryWorkExperience: job.data().countryWorkExperience,
          descriptionWorkExperience: job.data().descriptionWorkExperience,
          startWorkExperience: job.data().startWorkExperience,
          endWorkExperience: job.data().endWorkExperience,
          nameReference: job.data().nameReference,
          lastnameReference: job.data().lastnameReference,
          jobTitleReference: job.data().jobTitleReference,
          phoneReference: job.data().phoneReference,

        })
      })
    },
    async getInstructorJobs() {
      const dataInstructorJobs = await getDocs(collection(database, 'instructors', this.idUser, 'instructorJobs'))
      dataInstructorJobs.forEach((instructorJob) => {
        this.instructorJobs.push({
          subjectInstructorExperience: instructorJob.data().subjectInstructorExperience,
          typeInstructor: instructorJob.data().typeInstructor,
          academicLevel: instructorJob.data().academicLevel,
          institutionInstructorExperience: instructorJob.data().institutionInstructorExperience,
          startInstructorExperience: instructorJob.data().startInstructorExperience,
          endInstructorExperience: instructorJob.data().endInstructorExperience,

        })
      })
    },
    async getSkills(){
      const dataSkills = await getDocs(collection(database, 'instructors', this.idUser, 'skills'))
      dataSkills.forEach((skill) =>{
        this.skills.push({
          skill: skill.data().skill
        })

      })
    },
    async getLanguajes(){
      const dataLanguages = await getDocs(collection(database, 'instructors', this.idUser, 'languages'))
      dataLanguages.forEach((languaje) =>{
        this.languajes.push({
          languaje: languaje.data().languaje,
          listenLevel: languaje.data().listenLevel,
          readLevel: languaje.data().readLevel,
          speakeLevel: languaje.data().speakeLevel,
          writeLevel: languaje.data().writeLevel,
        })
      })

    }

  }
};
</script>
  
<style>
.yellow-rectangle1 {
  position: absolute;  
}

.component-with-shapes-and-description {
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

.yellow-rectangle1 {
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

.cards1 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: large;
  color: #162D4A;
  font-weight: bold;
}

.degrees2 {
  width: 100%;
  font-family: Georgia, 'Times New Roman', Times, serif;
  padding-top: 5%;
  padding-left: 30%;
  color: #162D4A;
}
@page {
  size: 8.5in 11in ;
  width: 8.5in;
  height: 11in;
  margin: 0;
}

</style>
  