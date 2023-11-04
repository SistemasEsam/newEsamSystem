<template>
  <div class="main-blog-form">
    <div class="blog-form">
      <div class="blog-form-image">
        <v-img :src="require('@/assets/esam-vertical.png')"> </v-img>
      </div>
      <v-text-field class="blog-form-title" label="Titulo:"> </v-text-field>
      <v-row>
        <v-col>
          <v-text-field label="Autoria:"> </v-text-field>
        </v-col>
        <v-col>
          <v-text-field label="Fecha:"> </v-text-field>
        </v-col>
      </v-row>
      <v-text-field label="Dedicatoria(Opcional):"> </v-text-field>
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
    </div>
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
  height: 50rem;
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
  height: 80rem;
}
.blog-form-image{
    position: relative;
    left: 0%;
    width: 200px;
    height: 200px;
}
</style>