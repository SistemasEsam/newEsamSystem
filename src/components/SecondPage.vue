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
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Institución o Empresa </p>
                  <p>{{ job.institutionWorkExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Ciudad </p>
                  <p>{{ job.cityWorkExperience + ',' + job.countryWorkExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Fecha </p>
                  <p>{{ job.startWorkExperience + ' - ' + job.endWorkExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Nombre de Referencia </p>
                  <p>{{ job.nameReference + ' ' + job.lastnameReference }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Cargo </p>
                  <p>{{ job.jobTitleReference }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Número de Contacto </p>
                  <p>{{ job.phoneReference }}</p>
                </v-col>
              </v-row>
              <v-row class="mt-0 mb-0 pb-2 pt-2 line-customize">
                <v-col>
                  <p class="h3-customize pr-3"> Descripción de Actividades: </p>
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
          <v-container>
            <h1 class="sub-title">
              Experiencia Docente
            </h1>
            <v-card v-for="(instructorJob, index) in instructorJobs" :key="index" class="cards1">
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Materia Impartida:</p>
                  <p>{{ instructorJob.subjectInstructorExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Docente en calidad de:</p>
                  <p>{{ instructorJob.typeInstructor }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Nivel impartido:</p>
                  <p>{{ instructorJob.academicLevel }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize pr-3"> Universidad o Institución:</p>
                  <p>{{ instructorJob.institutionInstructorExperience }}</p>
                </v-col>
              </v-row>
              <v-row class="mt-0 mb-0 pb-2 pt-2 line-customize">
                <v-col>
                  <p class="h3-customize pr-3"> Último año de Docencia:</p>
                  <p>{{ instructorJob.lastYearInstructorExperience }}</p>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
      <v-row>
        <v-col>

        </v-col>
        <v-col>
          
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
      languajes: [],
    }
  },
  created() {
    this.getPublications()
    this.getJobs()
    this.getInstructorJobs()
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
