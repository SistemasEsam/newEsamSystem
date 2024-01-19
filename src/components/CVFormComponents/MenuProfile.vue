<template>
  <v-container>
    <h1>Registro de docentes postulantes.</h1>
    <h3>Recomendaciones:</h3>
    <p>
      <b>Estimado/a solicitante,</b>
      <br />A continuación, te proporcionamos un instructivo detallado junto con
      algunas recomendaciones clave para completar el formulario de postulación
      de manera efectiva:
    </p>
    <br />
    <v-container>
      <ol>
        <li>
          <b>Lectura Completa del Formulario:</b>
          <br />Antes de comenzar, lee detenidamente todo el formulario para
          comprender las secciones y la información solicitada.
        </li>
        <li>
          <b>Preparación de Documentos:</b>
          <br />Reúne todos los documentos necesarios, como certificados
          académicos, cartas de recomendación y cualquier otra evidencia que
          respalde tu experiencia y habilidades.
        </li>
        <li>
          <b>Información Personal:</b>
          <br />Proporciona información personal precisa y actualizada. Verifica
          que los detalles como tu nombre, dirección, número de teléfono y
          dirección de correo electrónico estén correctos.
        </li>
        <li>
          <b>Claridad y Concisión:</b>
          <br />Expresa tus ideas de manera clara y concisa. Evita redundancias
          y asegúrate de que cada respuesta contribuya significativamente a tu
          perfil como candidato/a.
        </li>
        <li>
          <b>Detalles de Experiencia Laboral:</b>
          <br />Enumera tus experiencias laborales de manera cronológica,
          destacando los logros y responsabilidades más relevantes en cada
          puesto. Cuantifica los resultados siempre que sea posible.
        </li>
        <li>
          <b>Consulta y Aclaraciones:</b>
          <br />En caso de dudas, no dudes en contactar al departamento de
          recursos humanos o al responsable del proceso de selección para
          obtener clarificaciones adicionales.
        </li>
      </ol>
    </v-container>
    <p>
      <i
        >Agradecemos tu interés en unirte a nuestro equipo y esperamos recibir
        una solicitud completa y bien elaborada. ¡Mucho éxito en tu proceso de
        postulación!
      </i>
    </p>
    <br />
    <h3>Ingrese su correo personal para comenzar con el registro.</h3>
    <v-text-field
      v-model="this.applicantEmail"
      :rules="emailRules"
      label="Ingrese su correo electronico
    aquí."
    >
    </v-text-field>
    <v-btn @click="showNextForm()"> Empezar </v-btn>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      applicantEmail: "",

      emailRules: [
        v => !!v || 'El correo electrónico es requerido',
        v => /.+@.+\..+/.test(v) || 'Ingrese una dirección de correo electrónico válida'
      ],
    };
  },
  methods: {
    showNextForm() {
      let nextComponent = "personal-profile";
      this.$emit("show-next-form", nextComponent, this.applicantEmail);
    },
  },
};
</script>
<style>
</style>