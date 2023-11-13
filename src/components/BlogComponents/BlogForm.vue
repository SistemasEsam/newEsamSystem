<template>
  <div class="main-blog-form">
    <v-form class="blog-form">
      <v-container class="blog-form-container" h-auto>
        <div class="blog-form-image">
          <v-img :src="require('@/assets/esam-vertical.png')"> </v-img>
        </div>
        <v-label class="blog-form-label"> Datos Personales:</v-label>
        <v-text-field class="blog-form-title" label="Titulo:" density="compact">
        </v-text-field>
        <v-row>
          <v-col>
            <v-text-field label="Autoria:"> </v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="Fecha:"> </v-text-field>
          </v-col>
        </v-row>
        <v-text-field label="Dedicatoria(Opcional):"> </v-text-field>
        <v-label class="blog-form-label"> Resumen: </v-label>
        <v-textarea
          class="blog-form-textarea"
          auto-grow="true"
          label="Resumen del Paper"
          :rules="[
            (v) =>
              (v || '').length <= 500 ||
              'El documento debe contener un mximo de 500 palabras.',
          ]"
        >
        </v-textarea>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style>
.main-blog-form {
  position: absolute;
  width: 90%;
  left: 4%;
  top: 5%;
}
.blog-form {
  position: relative;
  margin: auto;
  width: 60%;
  height: 1rem;
}
.blog-form-title {
  position: relative;
}
.blog-form-textarea {
  position: relative;
  height: auto;
  padding-bottom: 0%;
}
.blog-form-image {
  position: relative;
  left: 0%;
  width: 200px;
  height: 200px;
}
.blog-form-container {
  border-style: solid;
  border-width: 1px;
  border-color: #112533;
}
.blog-form-label{
  font-size: x-large;
  color: #112533;
  font-weight: bold;
}
</style>