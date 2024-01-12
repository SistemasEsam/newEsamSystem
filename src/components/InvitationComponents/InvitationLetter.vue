<template>
  <H1> Carta de Invitación</H1>

  <v-container>
    <div class="instructor-coordinator">
      <div>
        {{
          this.currentDate.getDate() +
          " de " +
          this.currentDate.toLocaleString("default", { month: "long" }) +
          " de " +
          this.currentDate.getFullYear()
        }}
      </div>
      <div>
        {{ "A: "+ this.instructorData.name+" "+this.instructorData.lastNameF+" "+this.instructorData.lastNameM }}
      </div>
      <div>
        {{ "De: " +this.programData.programCoordinator }}
      </div>
    </div>
  </v-container>
</template>
<script>
import { database } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  props: ["userId"],
  data() {
    return {
      idUser: this.userId,
      currentDate: new Date(),
      instructorData: {
        name: "",
        lastNameF: "",
        lastNameM: "",
      },
      programData: {
        programCoordinator: "",
        programName: "",
        programId: "",
      },
    };
  },
  created() {
    this.getInstructorData();
    this.getProgramData();
  },
  methods: {
    async getInstructorData() {
      const personalProfileData = await getDoc(
        doc(database, "instructors", this.idUser[0])
      );
      if (personalProfileData.exists()) {
        this.instructorData.name = personalProfileData.data().name
        this.instructorData.lastNameF = personalProfileData.data().lastNameF
        this.instructorData.lastNameM = personalProfileData.data().lastNameM
        
      } else {
        console.log("Document does not exist");
      }
    },
    async getProgramData(){
        const programCodeArray = this.idUser[1].split("-")
        const programCode = programCodeArray[0]+"-"+programCodeArray[1]+"-"+programCodeArray[2]
        const programDataSaved = await getDoc(
        doc(database, "postDegreePrograms", programCode)
      );
      if (programDataSaved.exists()) {
        this.programData.programCoordinator = programDataSaved.data().programCoordinator
        this.programData.programName = programDataSaved.data().programName
        this.programData.programId = programDataSaved.data().programId
        
      } else {
        console.log("Document does not exist");
      }
    },
  },
};
</script>
<style>
</style>