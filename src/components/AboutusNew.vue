<template>
  <v-container fluid>
    <v-row align="center">
      <v-col cols="6">
        <v-img :src="require('../assets/MORE.jpg')" :alt="imageAlt" class="image-left" />
      </v-col>

      <v-col cols="6">
        <div class="content-right">
          <p class="custom-title">¿QUÉ ES ESAM?</p>
          <p class="custom-descrip1">La Escuela de Negocios ESAM SRL, es una institución enmarcada bajo estándares de calidad para el fortalecimiento y promoción de la Educación Superior en Postgrado altamente competitiva para el bien y desarrollo social.</p>
          <v-btn class="custome-btn" id="button1">MAS SOBRE NOSOTROS</v-btn>
          <p class="custom-title2">¿POR QUÉ LO HACEMOS?</p>
          <p class="custom-descrip2">Porque estamos convencidos de que servir a la humanidad es lo único que garantiza una felicidad constante y duradera. Es la oportunidad de formar generaciones de excelencia, las distintas personas e instituciones han creído en nosotros, así lo demuestran y ese es el motivo que nos impulsa cada vez más a estar comprometidos con todos ustedes.</p>
       
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    imageAlt: {
      type: String,
      default: 'Imagen'
    }
  }
};
</script>

<style scoped>
.image-left {
  width: 100%; /* Ajusta el ancho de la imagen según sea necesario */
  height: 100%; /* Ajusta la altura según sea necesario */
   /* Hace que la imagen cubra todo el contenedor */
}

.content-right {
  padding: 20px; /* Espaciado para el contenido a la derecha */
}
.custom-title {
  font-size: 55pt; /* Tamaño de fuente relativo */
  font-weight: black;
  color: #172E4B;
  text-align: right;

  position:relative
}
.custom-descrip1{
  font-size: 35; /* Tamaño de fuente relativo */
  font-weight: regular;
  color: #1E1E1C;
  text-align: right;

  position:relative

}
.custom-title2 {
  font-size: 45pt; /* Tamaño de fuente relativo */
  font-weight: black;
  color: #B2A612;
  text-align: left;

  position:relative
}
.custom-descrip2{
  font-size: 35; /* Tamaño de fuente relativo */
  font-weight: regular;
  color: #1E1E1C;
  text-align: left;

  position:relative

}
.custome-btn{

  transition: background-color 0.3s ease; /* Agrega una transición de color de fondo */
    border-radius: 300px; /* Redondea los bordes de los botones */
    color: #D8D2D2; /* Cambia el color del texto a #D8D2D2 */
 
    text-align: right;
  margin-right: -65%;
  right: -55%;
    position: relative;
   
}
#button1 {
    background-color: #112533;
    
  }
</style>
