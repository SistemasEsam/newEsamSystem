<template>
  <div class="main-menu">
    <div class="academic-section">
      <v-img
        class="instructor-image"
        src="@/assets/esam-cover.webp"
        cover
      >
      <Login class="login-component"></Login>
      </v-img>
    </div>
    <div class="instructor-section">
      <v-img
        class="instructor-image"
        src="@/assets/teacher-mainpage.webp"
        cover
      >
        <v-btn @click="loadInstructorForm()" class="instructor-button" color="white" variant="flat" size="x-large" rounded="xl"> Postulate! </v-btn>
      </v-img>
    </div>
  </div>
</template>
<script>

import Login from './Login.vue';

export default {
  setup() {},
  components:{
    Login
  },
  methods:{
    loadInstructorForm(){
        this.$router.push('/form-cv-view')
    },
  }
};
</script>
<style>
.main-menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1rem;
}
.academic-section {
  width: 45%;
  height: 45rem;
  display: flex;
}
.instructor-section {
  width: 25%;
  height: 45rem;
  background-color: #ffdf0b;
}
.instructor-image {
    width: 100%;
    height: auto;
}
.instructor-button {
    margin-left: 35%;
    margin-top: 70%;
    font-weight:bolder;
}
.login-component{
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
}
</style>