<template>
  <div>
    <!-- Coloca una referencia al componente que deseas convertir -->
    <div ref="pdfComponent" class="custom-text">
      <!-- Contenido de tu componente de Vue con Vuetify -->
      <v-card>
        <v-card-title class="blue--text text--darken-1 font-times">Componente de Vue con Vuetify</v-card-title>
        <v-card-text class="blue--text text--darken-2 font-times font-size-12">
          <!-- Contenido del componente -->
          <!-- Aquí puedes colocar tus elementos Vuetify -->
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices nunc vel dolor pellentesque, ut congue mi
          ultricies. Quisque congue, nunc id aliquet ullamcorper, velit diam facilisis massa, in sagittis enim nunc id
          ipsum. Duis consectetur nisi sed nunc vehicula cursus. Proin facilisis purus ac tellus consectetur, nec
          rhoncus erat tincidunt. Ut vestibulum, quam nec sagittis sagittis, purus eros facilisis quam, vitae faucibus
          nisi tortor eget nunc.
        </v-card-text>
      </v-card>
    </div>

    <!-- Agrega un botón para exportar a PDF -->
    <v-btn @click="exportToPDF">Exportar a PDF</v-btn>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default {
  methods: {
    exportToPDF() {
      const pdf = new jsPDF('p', 'mm', 'a4');

      const options = {
        background: 'white',
        scale: 3 // Ajusta el tamaño de la imagen al exportar
      };

      html2canvas(this.$refs.pdfComponent, options).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 190; // Tamaño del ancho del PDF
        const pageHeight = 277; // Tamaño del alto del PDF
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight; // Cambio const a let
        let position = 0; // Cambio const a let

        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);

        // Asegurar que el contenido quepa en múltiples páginas (opcional)
        while (heightLeft >= 0) {
          position = heightLeft - pageHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('componente.pdf');
      });
    },
  },
};
</script>

<style>
.custom-text {
  font-family: 'Times New Roman', Times, serif;
}

.font-times {
  font-family: 'Times New Roman', Times, serif;
}

.font-size-12 {
  font-size: 12px;
}
</style>
