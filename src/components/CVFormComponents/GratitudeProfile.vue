<template>
  <v-container class="gratitude-main-page">
    <!-- Encabezado de la vista de agradecimiento -->
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="headline text-center"
            >¡Gracias por registrarte!</v-card-title
          >
          <v-card-subtitle class="text-center"
            >Te agradecemos por completar el formulario de
            registro.</v-card-subtitle
          >
        </v-card>
      </v-col>
    </v-row>

    <!-- Contenido de agradecimiento y botón de volver -->
    <v-row>
      <v-col>
        <v-card>
          <v-card-text class="">
            <!-- Contenido de agradecimiento personalizado -->
            <p>
              <b>Estimado [Nombre del Postulante]</b>
              <br>Queremos expresar nuestro
              sincero agradecimiento por haber completado exitosamente el
              formulario de registro para [nombre del programa o posición]. Tu
              interés y participación son fundamentales para nosotros, y estamos
              emocionados de considerarte como parte de nuestro proceso de
              selección. Valoramos tu dedicación y estamos seguros de que tu
              participación contribuirá significativamente a nuestra comunidad.
              Por favor, mantente atento(a) a tus medios de contacto, ya que
              nuestro departamento académico se comunicará contigo próximamente
              para compartir más detalles sobre el siguiente paso en el proceso
              de selección. ¡Gracias nuevamente y te deseamos mucho éxito en tu
              postulación! 
              <br>
              <b>Atentamente, Departamento Académico</b>
            </p>

            <!-- Puedes personalizar más el mensaje según tus necesidades -->

            <!-- Botón para volver al formulario o a otra sección -->
            <v-btn @click="showMenuForm()" color="primary">Volver</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: [
    "userId"
  ],
  data() {
    return {};
  },
  methods:{
    showMenuForm() {
      let nextComponent = "menu-profile";
      this.$emit("show-next-form", nextComponent, this.email);
    },
  },

};
</script>
<style>
.gratitude-main-page{
  width: 40rem;
}
</style>