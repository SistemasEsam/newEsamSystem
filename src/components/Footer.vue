<template>
  <v-footer class="custom-footer" app>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" class="text-center text-md-left">
          <v-spacer></v-spacer>
          <v-btn text icon color="white">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn text icon color="white">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn text icon color="white">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn text icon color="white">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="text-center text-md-right">
          <v-spacer></v-spacer>
          <span>&copy; {{ currentYear }} My Website</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.custom-footer {
  background-color: #0D47A1;
  color: white;
}

.custom-footer v-btn {
  color: white;
}
</style>
