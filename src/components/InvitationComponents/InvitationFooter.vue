<template>
  <div class="footer-container">
    <!-- Contenido adicional del pie de página si es necesario -->
    <div class="footer-text">
      <p>{{ this.programSite }}</p>
      <p>{{ this.locationAdress }}</p>
      <p>{{ this.locationInfo }}</p>
    </div>
    <div class="footer-line"></div>
  </div>
</template>
  
  <script>
export default {
  props: ["programSite"],
  name: "FooterComponent",
  data() {
    return {
      locationAdress: "",
      locationInfo: "",
    };
  },
  created() {
    this.setSiteProgram();
  },
  methods: {
    setSiteProgram() {
      switch (this.programSite) {
        case "1":
          this.locationAdress = "CALLE OLAÑETA N.12 - PLAZUELA ZUDAÑEZ";
          this.locationInfo = "+591 71160601 - +591 71863183";
          break;
        case "2":
          this.locationAdress = "WENCESLAO ALBA #17";
          this.locationInfo = "+591 69646400 - +591 68395991";
          break;
        case "3":
          this.locationAdress = "CALLE ESTAFANÍA QUINTEROS - PLAZUELA ABAROA";
          this.locationInfo = "+591 73358823";
          break;
        case "4":
          this.locationAdress = "CALLE PROLONGACIÓN QUIJARRO #126 ESQUINA ARCE";
          this.locationInfo = "+591 75783533 - +591 62890568";
          break;
        case "5":
          this.locationAdress =
            "CALLE SAN MARTIN #125 ENTRE BOLIVAR Y HEROINAS - TERCER PISO";
          this.locationInfo = "+591 67453552 - +591 73778711";
          break;
        case "6":
          this.locationAdress =
            "CALLE CAMPERO #408 ESQUINA SANTA CRUZ - SEGUNDO PISO";
          this.locationInfo = "+591 79490335 - +591 79490335";
          break;
        case "7":
          this.locationAdress =
            "AV. LA PAZ ENTRE CIRO TRIGO Y AVAROA - EDIFICIO SANTA CRUZ - SEGUNDO PISO";
          this.locationInfo = "+591 71861990 - +591 71862943";
          break;
        case "8":
          this.locationAdress =
            "CALLE INGAVI ENTRE COLÓN Y SUIPACHA - EDIFICIO CORONADO";
          this.locationInfo = "+591 72969716 - +591 67383561";
          break;
        case "9":
          this.locationAdress =
            "CALLE COMERCIO ENTRE YANACOCHA Y GENARO SANJINÉS - EDIFICIO COMERCIO TERCER PISO";
          this.locationInfo = "+591 65566615 - +591 68378721";
          break;
        case "10":
          this.locationAdress =
            "CALLE BENI ESQUINA BOLIVAR #75";
          this.locationInfo = "+591  73625074 - +591 67825121";
          break;
        case "11":
          this.locationAdress =
            "CALLE COMERCIO ENTRE YANACOCHA Y GENARO SANJINÉS - EDIFICIO COMERCIO TERCER PISO";
          this.locationInfo = "+591 65566615 - +591 68378721";
          break;
        case "12":
          this.locationAdress =
            "CALLE COMERCIO ENTRE YANACOCHA Y GENARO SANJINÉS - EDIFICIO COMERCIO TERCER PISO";
          this.locationInfo = "+591 65566615 - +591 68378721";
          break;
        case "13":
          this.locationAdress =
            "CALLE AVAROA ENTRE CALLE GRAU Y CALLE CALVO #337";
          this.locationInfo = "+591 77137686 - +591 75216202";
          break;
        case "14":
          this.locationAdress =
            "AV. ARCE ZONA SAN JORGE - EDIFICIO FORTALEZA DECIMO PISO";
          this.locationInfo = "+591 65566615";
          break;
        case "15":
          this.locationAdress =
            "AVENIDA RAMÓM RIVERO - PLAZUELA QUINTANILLA";
          this.locationInfo = "EDIFICIO LOS TIEMPOS │ TORRE 1 PISO 5 │ CEL: +591 62671307";
          break;
        case "16":
          this.locationAdress =
            "CALLE JUNIN ENTRE LA PLATA Y SORIA GALVARRO #658";
          this.locationInfo = "PENDIENTE";
          break;
        case "17":
          this.locationAdress = "WENCESLAO ALBA #17";
          this.locationInfo = "+591 72413544 - +591 79433318";
          break;
        case "18":
          this.locationAdress =
            "AV. LA PAZ ENTRE CIRO TRIGO Y AVAROA - EDIFICIO SANTA CLARA TERCER PISO";
          this.locationInfo = "+591 7370861 - +591 667370861";
          break;
      }
    },
  },
  // Puedes agregar lógica de componente aquí si es necesario
};
</script>
  
  <style >
.footer-container {
  display: grid;
  align-items: center;
  float: left;
  width: 8in;
  height: 1in;
}
.footer-text {
  display: flex;
  flex-direction: column;
  place-items: center;
  font-size: larger;
  font-weight: bold;
}
.footer-line {
  height: 20px; /* Altura del pie de página */
  background: linear-gradient(
    to right,
    #7f1d1d,
    #142033
  ); /* Degradado de guindo a azul marino */
  color: white; /* Color del texto en el pie de página */
  width: 8.5in;
}
</style>
  