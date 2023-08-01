<template>
  <div>
    <!-- Verificar si el usuario está autenticado antes de mostrar el correo electrónico -->
    <div v-if="user">
      <h1>Bienvenido, {{ user.email }}</h1>
      <!-- Otros datos de la persona aquí -->
    </div>
    <div v-else>
      <p>Inicia sesión para ver el perfil</p>
    </div>
    <v-btn :to="'/'">Cerrar sesión</v-btn>
  </div>
</template>

<script>
import { auth } from "../firebase/firebase";

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    // Obtener el usuario actual cuando se carga el componente
    auth.onAuthStateChanged((user) => {
      this.user = user;
    });
  },
  methods: {
    logout() {
      // Cerrar sesión y redireccionar al inicio de sesión
      auth.signOut().then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
/* Tus estilos aquí */
</style>
