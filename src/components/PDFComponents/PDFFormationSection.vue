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
      <div class="education-section"></div>
    </div>
    <div class="cv-page-separator"></div>
    <div ref="secondPage" class="cv-page">
      <div class="info-section"></div>
    </div>
    <div class="cv-page-separator"></div>
    <div ref="thirdPage" class="cv-page">
      <div class="info-section"></div>
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
      selectedDocumentType: null,
      numberId: "",
      dateOfBirth: "",
      formatedDateOfBrith: "",
      gender: "",
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
        { allowTaint: false, useCORS: true },
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
          "FAST"
        );
        // Exportar contenido de la segunda página (SecondPage.vue)
        pdf.addPage();
        html2canvas(
          this.$refs.secondPage,
          { allowTaint: false, useCORS: true },
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
            "FAST"
          );
          pdf.addPage();
          html2canvas(
            this.$refs.thirdPage,
            { allowTaint: false, useCORS: true },
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
              "FAST"
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
        this.dateOfBirth = this.formatDate(
          personalProfileData.data().dateOfBirth
        );
        this.gender = personalProfileData.data().gender;
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
          countryDegree: degree.data().countryDegree.toLowerCase(),
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
          countryHigherEducationName: higherEducationPostDegree
            .data()
            .countryHigherEducationName.toLowerCase(),
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
          countryPostDegree: postDegree.data().countryPostDegree.toLowerCase(),
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
            cityWorkExperience: job.data().cityWorkExperience.toLowerCase(),
            countryWorkExperience: job
              .data()
              .countryWorkExperience.toLowerCase(),
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
            cityWorkExperience: job.data().cityWorkExperience.toLowerCase(),
            countryWorkExperience: job
              .data()
              .countryWorkExperience.toLowerCase(),
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
  background-color: #ffdf0b;
  width: 5.97in;
  height: 11in;
  float: left;
}
.yellow-circle {
  top: 0.25in;
  /* Ajustar la posición vertical del círculo */
  left: 0.5in;
  /* Ajustar la posición horizontal del círculo */
  width: 1.5in;
  /* Diámetro del círculo */
  height: 1.5in;
  /* Diámetro del círculo */
  border-radius: 50%;
  background-color: #ffdf0b;
  /* Color amarillo */
  z-index: 1;
  /* Asegura que el círculo esté por encima del rectángulo */
  position: relative;
}

.white-circle {
  top: 0.05in;
  /* Ajustar la posición vertical del círculo */
  left: 0.05in;
  /* Ajustar la posición horizontal del círculo */
  width: 1.4in;
  /* Diámetro del círculo */
  height: 1.4in;
  /* Diámetro del círculo */
  border-radius: 50%;
  background-color: white;
  /* Color amarillo */
  z-index: 1;
  /* Asegura que el círculo esté por encima del rectángulo */
  position: relative;
}

.cv-image {
  position: relative;
}
</style>