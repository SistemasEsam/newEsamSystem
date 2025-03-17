<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="openProgramForm()" class="button-style" size="300px">
          <v-icon size="200px"> mdi-text-box-plus-outline </v-icon>
          <h3 class="text-position">Registro de Programas</h3>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn @click="openProgram()" class="button-style" size="300px">
          <v-icon size="200px"> mdi-text-box-outline </v-icon>
          <h3 class="text-position">Programas</h3>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import router from "@/router";

export default {
  methods: {
  
    openProgramForm() {
      let programFormTab = router.resolve({ name: "academicProgramView" });
      window.open(programFormTab.href);
    },
    openProgram() {
      let programFormTab = router.resolve({ name: "programView" });
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
