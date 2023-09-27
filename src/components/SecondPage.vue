<template >
  <div class="component-with-shapes-and-image">
    <!-- Rectángulo amarillo -->
    <!-- Descripción del contenido -->
    <div class="full-page">
      <v-row>
        <v-col>
          <v-container>
            <h1 class="sub-title">
              Experiencia Laboral
            </h1>
            <v-card v-for="(job, index) in jobs" :key="index" class="card-style cards1">
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Cargo </p>
                  <p>{{ job.jobTitleWorkExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0">
                  <p class="h3-customize"> Institución o Empresa </p>
                </v-col>
                <v-col class="content-style">
                  <p>{{ job.institutionWorkExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0">
                  <p class="h3-customize"> Ciudad </p>
                </v-col>
                <v-col class="content-style">
                  <p>{{ job.cityWorkExperience + ',' + job.countryWorkExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0">
                  <p class="h3-customize"> Fecha </p>
                </v-col>
                <v-col class="content-style">
                  <p>{{ job.startWorkExperience + ' - ' + job.endWorkExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0">
                  <p class="h3-customize"> Nombre de Referencia </p>
                </v-col>
                <v-col class="content-style">
                  <p>{{ job.nameReference + ' ' + job.lastnameReference }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0">
                  <p class="h3-customize"> Cargo </p>
                </v-col>
                <v-col class="content-style">
                  <p>{{ job.jobTitleReference }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0">
                  <p class="h3-customize"> Número de Contacto </p>
                </v-col>
                <v-col class="content-style">
                  <p>{{ job.phoneReference }}</p>
                </v-col>
              </v-row>
              <v-row class="mt-0 mb-0 pb-2 pt-2">
                <v-col>
                  <p class="h3-customize"> Descripción de Actividades: </p>
                </v-col>
                <v-col class="content-style">
                  <p>{{ job.descriptionWorkExperience }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-col>
        <v-col>
          <v-container>
            <h1 class="sub-title">
              Publicaciones
            </h1>
            <v-card class="card-style cards1 mb-6" v-for="(publication, index) in publications" :key="index">
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Nombre de la Publicación</p>
                  <p>{{ publication.namePublication }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Enlace o Editorial</p>
                  <p>{{ publication.publisher }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Tipo de Publicación</p>
                  <p>{{ publication.typePublication }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> País de Publicación</p>
                  <p>{{ publication.countryPublication }}</p>
                </v-col>
              </v-row>
              <v-row class="mt-0 mb-0 pb-2 pt-2 line-customize">
                <v-col>
                  <p class="h3-customize pr-3"> Fecha de Publicación</p>
                  <p>{{ publication.datePublication }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-container>
            <h1 class="sub-title">
              Experiencia Docente
            </h1>
            <v-card v-for="(instructorJob, index) in instructorJobs" :key="index" class="cards1">
              <v-row>
                <v-col class="mt-0 mb-0 pb-0">
                  <p class="h3-customize"> Materia Impartida:</p>
                </v-col>
                <v-col class="content-style">
                  <p>{{ instructorJob.subjectInstructorExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0">
                  <p class="h3-customize"> Docente en calidad de:</p>
                </v-col>
                <v-col class="content-style">
                  <p>{{ instructorJob.typeInstructor }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0">
                  <p class="h3-customize"> Nivel impartido:</p>
                </v-col>
                <v-col class="content-style">
                  <p>{{ instructorJob.academicLevel }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0">
                  <p class="h3-customize"> Universidad o Institución:</p>
                </v-col>
                <v-col class="content-style">
                  <p>{{ instructorJob.institutionInstructorExperience }}</p>
                </v-col>
              </v-row>
              <v-row class="mt-0 mb-0 pb-2 pt-2">
                <v-col>
                  <p class="h3-customize"> Último año de Docencia:</p>
                </v-col>
                <v-col class="content-style">
                  <p>{{ instructorJob.lastYearInstructorExperience }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-col>
        <v-col>
          <v-container>
            <h1 class="sub-title">
              Habilidades Blandas
            </h1>
            <v-card>
              <v-list>
                <v-list-item v-for="(skill, index) in skills" :key="index" :value="skill" class="cards1 card-style">
                  <template v-slot:prepend>
                    <v-icon class="card-style" icon="mdi-check-circle-outline"></v-icon>
                  </template>
                  <v-list-item-title class="cards1">{{ skill.skill }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-container>
            <h1 class="sub-title">
              Idiomas
            </h1>
            <v-card class="cards1">
              <v-row>
                <v-col class="cards1 title-grid">Idioma</v-col>
                <v-col class="title-grid">Escucha</v-col>
                <v-col class="title-grid">Lectura</v-col>
                <v-col class="title-grid">Habla</v-col>
                <v-col class="title-grid">Escritura</v-col>
              </v-row>
              <v-row v-for="(language, index) in languajes" :key="index" class="cards1">
                <v-col class="language-style">{{ language.language }}</v-col>
                <v-col class="content-style">{{ language.listenLevel }}</v-col>
                <v-col class="content-style"> {{ language.readLevel }}</v-col>
                <v-col class="content-style">{{ language.speakeLevel }}</v-col>
                <v-col class="content-style">{{ language.writeLevel }}</v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </div>
    <div class="yellow-bar"></div>
  </div>
</template>
  
<script>
import { database } from '../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'
export default {
  props: [
    "userId"
  ],
  data() {
    return {
      idUser: this.userId,
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
          countryPublication: (publication.data().countryPublication).toLowerCase(),
          datePublication: this.formatDate(publication.data().datePublication),

        })
      })
    },
    async getJobs() {
      const dataJobs = await getDocs(collection(database, 'instructors', this.idUser, 'jobs'))
      dataJobs.forEach((job) => {
        console.log(job.data().endWorkExperience)
        if (job.data().endWorkExperience != undefined) {
          this.jobs.push({
            jobTitleWorkExperience: job.data().jobTitleWorkExperience,
            institutionWorkExperience: job.data().institutionWorkExperience,
            cityWorkExperience: (job.data().cityWorkExperience).toLowerCase(),
            countryWorkExperience: (job.data().countryWorkExperience).toLowerCase(),
            descriptionWorkExperience: job.data().descriptionWorkExperience,
            startWorkExperience: this.formatDate(job.data().startWorkExperience),
            endWorkExperience: this.formatDate(job.data().endWorkExperience),
            nameReference: job.data().nameReference,
            lastnameReference: job.data().lastnameReference,
            jobTitleReference: job.data().jobTitleReference,
            phoneReference: job.data().phoneReference,

          })
        } else {
          this.jobs.push({
            jobTitleWorkExperience: job.data().jobTitleWorkExperience,
            institutionWorkExperience: job.data().institutionWorkExperience,
            cityWorkExperience: (job.data().cityWorkExperience).toLowerCase(),
            countryWorkExperience: (job.data().countryWorkExperience).toLowerCase(),
            descriptionWorkExperience: job.data().descriptionWorkExperience,
            startWorkExperience: this.formatDate(job.data().startWorkExperienceCurrentJob),
            endWorkExperience: 'hasta la fecha',
            nameReference: job.data().nameReference,
            lastnameReference: job.data().lastnameReference,
            jobTitleReference: job.data().jobTitleReference,
            phoneReference: job.data().phoneReference,

          })
        }
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
          lastYearInstructorExperience: instructorJob.data().lastYearInstructorExperience,

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
    async getLanguajes() {
      const dataLanguages = await getDocs(collection(database, 'instructors', this.idUser, 'languages'))
      dataLanguages.forEach((languaje) => {
        this.languajes.push({
          language: languaje.data().language,
          listenLevel: languaje.data().listenLevel,
          readLevel: languaje.data().readLevel,
          speakeLevel: languaje.data().speakeLevel,
          writeLevel: languaje.data().writeLevel,
        })
      })

    },
    formatDate(date) {
      let dateFirebase = date.toDate()
      let dateReturned = dateFirebase.getDate() + '/' + (dateFirebase.getMonth() + 1) + '/' + dateFirebase.getFullYear()
      return dateReturned
    }

  }
};
</script>
