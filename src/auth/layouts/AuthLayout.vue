<template>
  <div class="limiter">
    <div
      class="container-login100"
      style="background-image: url('./assets/ima1.jpg')"
    >
      <div class="wrap-login100 p-t-30 p-b-50">
        <form
          @submit.prevent="authenticateUser"
          class="login100-form validate-form p-b-33 p-t-5"
          style="max-width: 400px"
        >
          <div class="logo-container">
            <img
              src="./assets/logo_fc.png"
              alt="Logo de la aplicación"
              class="logo"
            />
          </div>
          <div class="form-group">
            <label for="email" class="label-email">CORREO ELECTRÓNICO</label>
            <div
              class="wrap-input100 validate-input"
              data-validate="Enter email"
            >
              <input
                class="input100"
                type="email"
                id="email"
                name="email"
                placeholder="Correo"
                required
                v-model="userData.email"
              />
              <span class="focus-input100" data-placeholder="&#xe82a;"></span>
            </div>
          </div>
          <div class="form-group">
            <label for="password" class="label-password">CONTRASEÑA</label>
            <div
              class="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
                class="input100"
                type="password"
                placeholder="Contraseña"
                required
                v-model="userData.password"
              />
              <span class="focus-input100" data-placeholder="&#xe80f;"></span>
            </div>
          </div>
          <div class="container">
            <button type="submit" class="login100-form-btn yellow-btn">
              INICIAR SESIÓN
            </button>
            <button class="login100-form-btn blue-btn">REGISTRARSE</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, signInWithEmailAndPassword } from "../../firebase/firebase";

export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async authenticateUser() {
      try {
        // Autenticar al usuario utilizando Firebase Authentication
        await signInWithEmailAndPassword(
          auth,
          this.userData.email,
          this.userData.password
        );
        this.$router.push("/home"); 
      } catch (error) {
        // Manejar errores durante la autenticación
        console.error("Error al autenticar usuario:", error.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../css/auth.css";
@import "../css/util.css";
</style>



