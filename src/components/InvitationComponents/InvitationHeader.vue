<template>
  <div class="header-container">
    <div class="header-text">
      <div>
        <img :src="this.imageSrc" alt="Logo" class="logo" />
      </div>
      <div class="title-header">
        <h3>UNIVERSIDAD NACIONAL SIGLO XX</h3>
        <p>Escuela de Postgrado</p>
        <p>Cochabamba</p>
      </div>
    </div>
    <div class="line"></div>
    <!-- Línea agregada aquí -->
  </div>
</template>
  

<script>
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default {
  name: "LetterHeaderComponent",
  data() {
    return {
      imageSrc: "",
    }
  },
  created() {
    this.loadImage();
  },
  methods: {
    loadImage() {
      const storage = getStorage();
      getDownloadURL(ref(storage, "esam-logos/MARCAUNSXXESCUDO.webp"))
        .then((url) => {
          // `url` is the download URL for 'images/stars.jpg'
          // Or inserted into an <img> element
          this.imageSrc = url;
        })
        .catch((error) => {
          // Handle any errors
        });
    },
  },
};
</script>
  
  <style>
.header-container {
  display: grid;
  align-items: center;
  float: left;
  width: 8in;
  height: 1in;
}

.logo {
  height: 100px;
}

.header-text {
  font-weight: bold;
  display: inline-flex;
}
.line {
  height: 2px; /* Controla el grosor de la línea */
  width: 8.5 in; /* Controla el ancho de la línea */
  background-color: navy; /* Color azul marino */
}
.title-header {
  display: flex;
  flex-direction: column;
  place-content: center;
  margin-left: 0.3in;
  margin-top: -0.2in;
  font-size: large;
}
h3 {
  font-weight: 900;
}
</style>
  