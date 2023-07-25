<template>
    <v-footer color="primary" app>
      <v-container>
        <v-row>
          <v-col>
            <v-spacer></v-spacer>
            <v-btn text icon>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn text icon>
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn text icon>
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn text icon>
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
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