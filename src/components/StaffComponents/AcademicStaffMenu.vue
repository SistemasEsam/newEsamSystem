<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="openStaffProfile()" class="button-style" size="300px">
          <v-icon size="200px"> mdi-account-box-outline </v-icon>
          <h3 class="text-position">Perfil Personal</h3>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn @click="openProgramForm()" class="button-style" size="300px">
          <v-icon size="200px"> mdi-text-box-plus-outline </v-icon>
          <h3 class="text-position">Registro de Programas</h3>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          @click="openAprovedInstructor(1)"
          class="button-style"
          size="300px"
        >
          <v-icon size="200px"> mdi-account-search-outline </v-icon>
          <h3 class="text-position">Docentes</h3>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          @click="openPendingInstructor(0)"
          class="button-style"
          size="300px"
        >
          <v-icon size="200px"> mdi-account-question-outline </v-icon>
          <h3 class="text-position">Postulantes</h3>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn class="button-style" size="300px">
          <v-icon size="200px"> mdi-text-box-outline </v-icon>
          <h3 class="text-position">Programas</h3>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn class="button-style" size="300px">
          <v-icon size="200px"> mdi-certificate-outline </v-icon>
          <h3 class="text-position">Certifaciones Docentes</h3>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import router from "@/router";

export default {
  methods: {
    openPendingInstructor(instructorStatus) {
      let pendingInstructorTab = router.resolve({
        name: "instructorView",
        params: {status: instructorStatus }
      });
      window.open(pendingInstructorTab.href);
    },
    openAprovedInstructor(instructorStatus) {
      let approvedInstructorTab = router.resolve({
        name: "instructorView",
        params: {status: instructorStatus }
      });
      window.open(approvedInstructorTab.href);
    },
    openStaffProfile() {
      let staffProfileTab = router.resolve({ name: "staffProfile" });
      window.open(staffProfileTab.href);
    },
    openProgramForm() {
      let programFormTab = router.resolve({ name: "academicProgramView" });
      window.open(programFormTab.href);
    },
  },
};
</script>
<style>
.button-style {
  position: relative;
}
.text-position {
  position: absolute;
  margin-top: 75%;
}
</style>
