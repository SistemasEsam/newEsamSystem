<template>
  <div class="cv-main-page">
    <v-btn @click="exportToPDF">DESCARGAR PDF</v-btn>
    <div class="cv-page-separator"></div>
    <div ref="firstPage" class="cv-page">
      <div class="info-section">
        <div class="yellow-circle">
          <div class="white-circle">
            <v-avatar size="135" class="cv-image">
              <img id="photoProfile" :src="img" width="155" height="155" />
            </v-avatar>
          </div>
        </div>
        <div class="cv-personal-info">
          <v-container class="cv-container-info">
            <v-label class="cv-label-info">
              <v-icon class="mr-1"> mdi-account </v-icon>
              {{ this.name }}
              <br />
              {{ this.lastNameF + " " + this.lastNameM }}
              <br />
            </v-label>
            <v-label class="cv-label-info">
              <v-icon class="mr-1">mdi-card-account-details-outline </v-icon>
              {{ this.numberId + " " + this.idExtension }}
            </v-label>
            <v-label class="cv-label-info">
              <v-icon class="mr-1"> mdi-cake </v-icon>
              {{ this.dateOfBirth }}
            </v-label>
            <v-label class="cv-label-info">
              <v-icon class="mr-1"> {{ this.genderIcon }} </v-icon>
              {{ this.gender }}
            </v-label>
            <v-label class="cv-label-info">
              <v-icon class="mr-1"> mdi-home-city-outline </v-icon>
              {{ this.cityRadication + ", " + this.selectedCountry }}
            </v-label>
            <v-label class="cv-label-info">
              <v-icon class="mr-1"> mdi-map-marker-outline </v-icon>
              {{ this.addres }}
            </v-label>
            <v-label class="cv-label-info">
              <v-icon class="mr-1"> mdi-cellphone-basic </v-icon>
              {{ this.personalPhone }}
            </v-label>
            <v-label class="cv-label-info">
              <v-icon class="mr-1"> mdi-email-outline </v-icon>
              {{ this.email }}
            </v-label>
          </v-container>
        </div>
      </div>
      <div class="education-section">
        <div class="cv-degrees">
          <h2 class="cv-sub-title ml-1">Estudios Pregrado</h2>
          <v-card
            v-for="(degree, index) in degrees"
            :key="index"
            class="cv-degree-cards ml-1 mb-3"
            flat="true"
          >
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize">Carrera:</p>
                <p class="content-style">
                  {{ degree.levelOfDegree }} en {{ degree.careerDegree }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Universidad/Instituto:</p>
                <p>{{ degree.universityDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">País:</p>
                <p>{{ degree.countryDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Año de Graduación:</p>
                <p>{{ degree.graduationYearDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-3 pt-0 line-customize">
                <p class="h3-customize">Modalidad de Graduación:</p>
                <p>{{ degree.graduationModalityDegree }}</p>
              </v-col>
            </v-row>
          </v-card>
        </div>
        <div class="cv-degrees">
          <h2 class="cv-sub-title ml-1">Estudios Postgrado</h2>
          <v-card
            v-for="(
              higherEducationPostDegree, index
            ) in higherEducationPostDegrees"
            :key="index"
            class="cv-degree-cards ml-1 mb-3"
            flat="true"
          >
            <v-row>
              <v-col class="mt-3 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Postgrado:</p>
                <p>
                  {{ higherEducationPostDegree.levelHigherEducation }} en
                  {{ higherEducationPostDegree.nameHigherEducation }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Universidad/Instituto:</p>
                <p>{{ higherEducationPostDegree.institutionName }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">País:</p>
                <p>
                  {{ higherEducationPostDegree.countryHigherEducationName }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Año de Realización:</p>
                <p>
                  {{ higherEducationPostDegree.graduationYearHigherEducation }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-3 pt-0 line-customize">
                <p class="h3-customize">Modalidad de Graduación:</p>
                <p>
                  {{
                    higherEducationPostDegree.graduationModalityHigherEducation
                  }}
                </p>
              </v-col>
            </v-row>
          </v-card>

          <v-card
            v-for="(postDegree, index) in postDegrees"
            :key="index"
            class="cv-degree-cards ml-1 mt-1 mb-1"
            flat="true"
          >
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-3 line-customize">
                <p class="h3-customize">Postgrado:</p>
                <p>
                  {{ postDegree.titlePostDegree }} en
                  {{ postDegree.namePostDegree }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Universidad/Instituto:</p>
                <p>{{ postDegree.universityPostDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">País:</p>
                <p>{{ postDegree.countryPostDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Año de Realización:</p>
                <p>{{ postDegree.graduationYearPostDegree }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-3 pt-0 line-customize">
                <p class="h3-customize">Modalidad de Graduación:</p>
                <p>{{ postDegree.graduationModalityPostDegree }}</p>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </div>
    </div>
    <!-- Second Page -->
    <div class="cv-page-separator"></div>
    <div ref="secondPage" class="cv-page">
      <div class="info-section"></div>
      <div class="education-section">
        <div class="cv-degrees">
          <h2 class="cv-sub-title ml-1">Experiencia Docente</h2>
          <v-card
            v-for="(instructorJob, index) in instructorJobs"
            :key="index"
            class="cv-degree-cards ml-1 mb-3"
            flat="true"
          >
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize">Materia Impartida:</p>
                <p>{{ instructorJob.subjectInstructorExperience }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Docente en calidad de:</p>
                <p>{{ instructorJob.typeInstructor }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Nivel impartido:</p>
                <p>{{ instructorJob.academicLevel }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Universidad o Institución:</p>
                <p>{{ instructorJob.institutionInstructorExperience }}</p>
              </v-col>
            </v-row>
            <v-row >
              <v-col class="mt-0 mb-0 pb-3 pt-0 line-customize">
                <p class="h3-customize">Último año de Docencia:</p>
                <p>{{ instructorJob.lastYearInstructorExperience }}</p>
              </v-col>
            </v-row>
          </v-card>
        </div>

        <div class="cv-degrees">
          <h2 class="cv-sub-title ml-1">Experiencia Laboral</h2>
          <v-card v-for="(job, index) in jobs" :key="index" class="cv-degree-cards ml-1 mb-3" flat="true">
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 line-customize">
                  <p class="h3-customize"> Cargo </p>
                  <p>{{ job.jobTitleWorkExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                  <p class="h3-customize"> Institución o Empresa </p>
                  <p>{{ job.institutionWorkExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                  <p class="h3-customize"> Ciudad </p>
                  <p>{{ job.cityWorkExperience + ', ' + job.countryWorkExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                  <p class="h3-customize"> Fecha </p>
                  <p>{{ job.startWorkExperience + ' - ' + job.endWorkExperience }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                  <p class="h3-customize"> Nombre de Referencia </p>
                  <p>{{ job.nameReference + ' ' + job.lastnameReference }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                  <p class="h3-customize"> Cargo </p>
                  <p>{{ job.jobTitleReference }}</p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                  <p class="h3-customize"> Número de Contacto </p>
                  <p>{{ job.phoneReference }}</p>
                </v-col>
              </v-row>
              <v-row class="mt-0 mb-0 pb-2 pt-0 line-customize">
                <v-col>
                  <p class="h3-customize"> Descripción de Actividades: </p>
                  <p>{{ job.descriptionWorkExperience }}</p>
                </v-col>
              </v-row>
            </v-card>
        </div>

      </div>
    </div>
    <div class="cv-page-separator"></div>
    <div ref="thirdPage" class="cv-page">
      <div class="info-section"></div>
      <div class="education-section">
        <div class="cv-degrees">
          <h2 class="cv-sub-title ml-1">Cursos</h2>
          <v-card
            v-for="(course, index) in courses"
            :key="index"
            class="cv-degree-cards ml-1 mt-1 mb-1"
            flat="true"
          >
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize">Curso</p>
                <p>{{ course.nameCourse }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Universidad/Instituto:</p>
                <p>{{ course.institutionCourse }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">País:</p>
                <p>{{ course.countryCourse }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-3 pt-0 line-customize">
                <p class="h3-customize">Año de Realización:</p>
                <p>{{ course.yearCourse }}</p>
              </v-col>
            </v-row>
          </v-card>
        </div>

        <div class="cv-degrees">
          <h2 class="cv-sub-title ml-1">Publicaciones</h2>
          <v-card
            class="cv-degree-cards ml-1"
            v-for="(publication, index) in publications"
            :key="index"
            flat="true"
          >
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 line-customize">
                <p class="h3-customize">Nombre de la Publicación</p>
                <p>{{ publication.namePublication }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Enlace o Editorial</p>
                <p>{{ publication.publisher }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">Tipo de Publicación</p>
                <p>{{ publication.typePublication }}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mb-0 pb-0 pt-0 line-customize">
                <p class="h3-customize">País de Publicación</p>
                <p>{{ publication.countryPublication }}</p>
              </v-col>
            </v-row>
            <v-row class="mt-0 mb-0 pb-0 pt-0 line-customize">
              <v-col>
                <p class="h3-customize">Fecha de Publicación</p>
                <p>{{ publication.datePublication }}</p>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </div>
    </div>
    <div class="cv-page-separator"></div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { database } from "../../firebase/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default {
  props: ["userId"],
  data() {
    return {
      // first-page
      idUser: this.userId,
      name: "",
      lastNameF: "",
      lastNameM: "",
      personalPhone: null,
      personalPhoneAux: null,
      email: "",
      selectedCountry: "",
      cityRadication: "",
      addres: "",
      selectedDocumentType: "",
      numberId: "",
      idExtension: "",
      dateOfBirth: "",
      formatedDateOfBrith: "",
      gender: "",
      genderIcon: "",
      degrees: [],
      postDegrees: [],
      higherEducationPostDegrees: [],
      courses: [],
      img: null,
      photoProfilePath: "",
      skills: [],

      // second-page
      publications: [],
      jobs: [],
      instructorJobs: [],
      languajes: [],
    };
  },
  created() {
    // first-page
    this.getInstructorData();
    this.getDegrees();
    this.getPostDegrees();
    this.getCourses();
    this.getHigherEducationPostDegree();
    this.getSkills();
    // second-page
    this.getPublications();
    this.getJobs();
    this.getInstructorJobs();
    this.getLanguajes();
  },
  methods: {
    exportToPDF() {
      const pdfWidth = 8.5 * 72; // Ancho de hoja carta en puntos (1 pulgada = 72 puntos)
      const pdfHeight = 11 * 72; // Alto de hoja carta en puntos (1 pulgada = 72 puntos)
      const pdf = new jsPDF("p", "pt", [pdfWidth, pdfHeight]);

      const options = {
        background: "white",
      };

      // Exportar contenido de la primera página (File.vue)
      html2canvas(
        this.$refs.firstPage,
        { allowTaint: false, useCORS: true, scale: 5 },
        options
      ).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          pdfWidth,
          pdfHeight,
          "firstPage",
          "MEDIUM"
        );
        // Exportar contenido de la segunda página (SecondPage.vue)
        pdf.addPage();
        html2canvas(
          this.$refs.secondPage,
          { allowTaint: false, useCORS: true, scale: 5},
          options
        ).then((canvas) => {
          const imgData2 = canvas.toDataURL("image/png");
          pdf.addImage(
            imgData2,
            "PNG",
            0,
            0,
            pdfWidth,
            pdfHeight,
            "secondPage",
            "MEDIUM"
          );
          pdf.addPage();
          html2canvas(
            this.$refs.thirdPage,
            { allowTaint: false, useCORS: true, scale: 5 },
            options
          ).then((canvas) => {
            const imgData2 = canvas.toDataURL("image/png");
            pdf.addImage(
              imgData2,
              "PNG",
              0,
              0,
              pdfWidth,
              pdfHeight,
              "thirdPage",
              "MEDIUM"
            );
            pdf.save(this.idUser + "CVESAM.pdf");
          });
        });
      });
    },

    // methods-first-page

    async getInstructorData() {
      const personalProfileData = await getDoc(
        doc(database, "instructors", this.idUser)
      );
      if (personalProfileData.exists()) {
        this.name = personalProfileData.data().name;
        this.lastNameF = personalProfileData.data().lastNameF;
        this.lastNameM = personalProfileData.data().lastNameM;
        this.numberId = personalProfileData.data().numberId;
        this.idExtension = personalProfileData.data().idExtension;
        this.documentType = personalProfileData.data().selectedDocumentType;
        this.dateOfBirth = this.formatDate(
          personalProfileData.data().dateOfBirth
        );
        this.gender = personalProfileData.data().gender;
        if (personalProfileData.data().gender == "Masculino") {
          this.genderIcon = "mdi-gender-male";
        } else {
          this.genderIcon = "mdi-gender-female";
        }
        this.cityRadication = personalProfileData.data().cityRadication;
        this.selectedCountry = personalProfileData.data().selectedCountry;
        this.addres = personalProfileData.data().addres;
        this.personalPhone = personalProfileData.data().personalPhone;
        this.email = personalProfileData.data().email;
        this.photoProfilePath = personalProfileData.data().photoProfilePath;
      } else {
        console.log("Document does not exist");
      }
      this.loadProfileImage();
    },
    async getDegrees() {
      const dataDegrees = await getDocs(
        collection(database, "instructors", this.idUser, "degrees")
      );
      dataDegrees.forEach((degree) => {
        this.degrees.push({
          careerDegree: degree.data().careerDegree,
          countryDegree: this.formatCountry(
            degree.data().countryDegree.toLowerCase()
          ),
          graduationModalityDegree: degree.data().graduationModalityDegree,
          graduationYearDegree: degree.data().graduationYearDegree,
          levelOfDegree: degree.data().levelOfDegree,
          universityDegree: degree.data().universityDegree,
        });
      });
    },
    async getHigherEducationPostDegree() {
      const higherEducationPostDegrees = await getDocs(
        collection(
          database,
          "instructors",
          this.idUser,
          "higherEducationPostDegree"
        )
      );
      higherEducationPostDegrees.forEach((higherEducationPostDegree) => {
        this.higherEducationPostDegrees.push({
          nameHigherEducation:
            higherEducationPostDegree.data().nameHigherEducation,
          institutionName: higherEducationPostDegree.data().institutionName,
          levelHigherEducation:
            higherEducationPostDegree.data().levelHigherEducation,
          countryHigherEducationName: this.formatCountry(
            higherEducationPostDegree
              .data()
              .countryHigherEducationName.toLowerCase()
          ),
          graduationModalityHigherEducation:
            higherEducationPostDegree.data().graduationModalityHigherEducation,
          graduationYearHigherEducation:
            higherEducationPostDegree.data().graduationYearHigherEducation,
        });
      });
    },
    async getPostDegrees() {
      const dataPostDegrees = await getDocs(
        collection(database, "instructors", this.idUser, "postDegrees")
      );
      dataPostDegrees.forEach((postDegree) => {
        this.postDegrees.push({
          universityPostDegree: postDegree.data().universityPostDegree,
          namePostDegree: postDegree.data().namePostDegree,
          titlePostDegree: postDegree.data().titlePostDegree,
          countryPostDegree: this.formatCountry(
            postDegree.data().countryPostDegree.toLowerCase()
          ),
          graduationYearPostDegree: postDegree.data().graduationYearPostDegree,
          graduationModalityPostDegree:
            postDegree.data().graduationModalityPostDegree,
        });
      });
    },
    async getCourses() {
      const dataCourses = await getDocs(
        collection(database, "instructors", this.idUser, "courses")
      );
      dataCourses.forEach((course) => {
        this.courses.push({
          institutionCourse: course.data().institutionCourse,
          nameCourse: course.data().nameCourse,
          countryCourse: course.data().countryCourse.toLowerCase(),
          yearCourse: course.data().yearCourse,
        });
      });
    },
    async getSkills() {
      const dataSkills = await getDocs(
        collection(database, "instructors", this.idUser, "skills")
      );
      dataSkills.forEach((skill) => {
        this.skills.push({
          skill: skill.data().skill,
        });
      });
    },
    async loadProfileImage() {
      const storage = getStorage();
      console.log(this.photoProfilePath);
      await getDownloadURL(ref(storage, this.photoProfilePath))
        .then((url) => {
          // Or inserted into an <img> element
          const img = document.getElementById("photoProfile");
          img.setAttribute("src", url);
        })
        .catch((error) => {
          // Handle any errors
        });
    },
    formatDate(date) {
      let dateFirebase = date.toDate();
      let dateReturned =
        dateFirebase.getDate() +
        "/" +
        (dateFirebase.getMonth() + 1) +
        "/" +
        dateFirebase.getFullYear();
      return dateReturned;
    },
    formatCountry(country) {
      console.log(country);
      const countryFormated =
        country.charAt(0).toUpperCase() + country.slice(1);
      return countryFormated;
    },

    // methos-second-page
    async getPublications() {
      const dataPublications = await getDocs(
        collection(database, "instructors", this.idUser, "publications")
      );
      dataPublications.forEach((publication) => {
        this.publications.push({
          publisher: publication.data().publisher,
          namePublication: publication.data().namePublication,
          typePublication: publication.data().typePublication,
          countryPublication: publication
            .data()
            .countryPublication.toLowerCase(),
          datePublication: this.formatDate(publication.data().datePublication),
        });
      });
    },
    async getJobs() {
      const dataJobs = await getDocs(
        collection(database, "instructors", this.idUser, "jobs")
      );
      dataJobs.forEach((job) => {
        console.log(job.data().endWorkExperience);
        if (job.data().endWorkExperience != undefined) {
          this.jobs.push({
            jobTitleWorkExperience: job.data().jobTitleWorkExperience,
            institutionWorkExperience: job.data().institutionWorkExperience,
            cityWorkExperience: this.formatCountry(job.data().cityWorkExperience.toLowerCase()),
            countryWorkExperience: this.formatCountry(job
              .data()
              .countryWorkExperience.toLowerCase()),
            descriptionWorkExperience: job.data().descriptionWorkExperience,
            startWorkExperience: this.formatDate(
              job.data().startWorkExperience
            ),
            endWorkExperience: this.formatDate(job.data().endWorkExperience),
            nameReference: job.data().nameReference,
            lastnameReference: job.data().lastnameReference,
            jobTitleReference: job.data().jobTitleReference,
            phoneReference: job.data().phoneReference,
          });
        } else {
          this.jobs.push({
            jobTitleWorkExperience: job.data().jobTitleWorkExperience,
            institutionWorkExperience: job.data().institutionWorkExperience,
            cityWorkExperience: this.formatCountry(job.data().cityWorkExperience.toLowerCase()),
            countryWorkExperience: this.formatCountry(job
              .data()
              .countryWorkExperience.toLowerCase()),
            descriptionWorkExperience: job.data().descriptionWorkExperience,
            startWorkExperience: this.formatDate(
              job.data().startWorkExperienceCurrentJob
            ),
            endWorkExperience: "hasta la fecha",
            nameReference: job.data().nameReference,
            lastnameReference: job.data().lastnameReference,
            jobTitleReference: job.data().jobTitleReference,
            phoneReference: job.data().phoneReference,
          });
        }
      });
    },
    async getInstructorJobs() {
      const dataInstructorJobs = await getDocs(
        collection(database, "instructors", this.idUser, "instructorJobs")
      );
      dataInstructorJobs.forEach((instructorJob) => {
        this.instructorJobs.push({
          subjectInstructorExperience:
            instructorJob.data().subjectInstructorExperience,
          typeInstructor: instructorJob.data().typeInstructor,
          academicLevel: instructorJob.data().academicLevel,
          institutionInstructorExperience:
            instructorJob.data().institutionInstructorExperience,
          lastYearInstructorExperience:
            instructorJob.data().lastYearInstructorExperience,
        });
      });
    },
    async getLanguajes() {
      const dataLanguages = await getDocs(
        collection(database, "instructors", this.idUser, "languages")
      );
      dataLanguages.forEach((languaje) => {
        this.languajes.push({
          language: languaje.data().language,
          listenLevel: languaje.data().listenLevel,
          readLevel: languaje.data().readLevel,
          speakeLevel: languaje.data().speakeLevel,
          writeLevel: languaje.data().writeLevel,
        });
      });
    },
  },
};
</script>
<style>
.cv-main-page {
  width: 100%;
  position: absolute;
  display: grid;
  place-content: center;
}

.cv-page {
  position: relative;
  width: 8.5in;
  height: 11in;
  background-color: white;
  border: 1px solid black;
}
.cv-page-separator {
  position: relative;
  width: 8.5in;
  height: 1in;
  color: white;
}
.info-section {
  background-color: #162d4a;
  width: 2.5in;
  height: 11in;
  float: left;
}
.education-section {
  background-color: white;
  width: 5.97in;
  height: 10.97in;
  float: left;
}
.yellow-circle {
  top: 0.25in;
  left: 0.5in;
  width: 1.5in;
  height: 1.5in;
  border-radius: 50%;
  background-color: #ffdf0b;
  z-index: 1;
  position: relative;
}

.white-circle {
  top: 0.05in;
  left: 0.05in;
  width: 1.4in;
  height: 1.4in;
  border-radius: 50%;
  background-color: white;
  z-index: 1;
  position: relative;
}

.cv-image {
  position: relative;
}
.cv-personal-info {
  position: relative;
  width: 90%;
  top: 0.5in;
}
.cv-container-info {
  position: relative;
  display: flex;
  flex-direction: column;
}
.cv-label-info {
  position: relative;
  font-size: x-small;
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
  opacity: 1;
  margin: 1%;
  word-wrap: break-word;
}
.cv-degrees {
  position: relative;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #162d4a;
}
.cv-sub-title {
  color: #162d4a;
}
.cv-degree-cards {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: small;
  color: black;
  font-weight: bold;
  position: relative;
}
.h3-customize {
  color: #162d4a;
  font-size: small;
  margin-right: 1%;
}
.line-customize {
  display: flex;
  justify-content: left;
}
</style>
