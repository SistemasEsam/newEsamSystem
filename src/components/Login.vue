<template>
    <div class="login-form-container">
      <img :src="require('../assets/esamlogo.png')" alt="Logo" class="logo-image" />
      <v-form @submit.prevent="submitForm">
        <v-text-field
          v-model="email"
          label="Correo electrónico"
          required
          :rules="emailRules"
          outlined
          class="text-field"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Contraseña"
          type="password"
          required
          outlined
          class="text-field"
        ></v-text-field>
        <v-btn type="submit" class="submit-button">Iniciar sesión</v-btn>
      </v-form>
    </div>
  </template>
  
  <script>
import { auth, signInWithEmailAndPassword } from "../firebase/firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "El correo electrónico es requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo electrónico debe ser válido",
      ],
    };
  },
  methods: {
    async submitForm() {
      try {
        // Iniciar sesión con Firebase utilizando el correo y contraseña ingresados
        await signInWithEmailAndPassword(auth, this.email, this.password);
        // El inicio de sesión fue exitoso, redireccionar a la vista de Dashboard.
        this.$router.push("/profile");
      } catch (error) {
        // El inicio de sesión falló, maneja el error aquí.
        console.error("Error al iniciar sesión:", error.message);
      }
    },
  },
};
</script>

  
  <style>
  .login-form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .logo-image {
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 100%;
    max-height: 100px; /* Ajusta esta altura según tus necesidades */
  }
  
  .text-field {
    width: 100%;
    margin-bottom: 20px;
  }
  
  .submit-button {
    width: 100%;
    color: #fff;
    background-color: #007bff;
  }
  </style>
  