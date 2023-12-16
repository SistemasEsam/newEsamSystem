<template>
  <div class="login-form">
    <v-form>
      <v-text-field label="Usuario" variant="solo-inverted"> </v-text-field>
      <v-text-field label="Contraseña" variant="solo-inverted"> </v-text-field>
      <v-btn @click="enterAcademicMenu()" class="login-button"> Ingresar </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  setup() {},
  methods: {
    enterAcademicMenu(){
      this.$router.push('/staff-menu-view')
    },
  }
};
</script>
<style>
.login-form{
    width: 20rem;
    height: 20rem;
    display: grid;
    align-items: center;
}
.login-button{
    width: 20rem;
}
</style>