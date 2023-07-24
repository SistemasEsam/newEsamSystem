<template>
  <div>
    <!-- Coloca una referencia al componente que deseas convertir -->
    <div ref="pdfComponent">
      <!-- Contenido de tu componente de Vue con Vuetify -->
      <v-card>
        <v-card-title>Componente de Vue con Vuetify</v-card-title>
        <v-card-text>
          <!-- Contenido del componente -->
          <!-- Aquí puedes colocar tus elementos Vuetify -->
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

      html2canvas(this.$refs.pdfComponent).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 10, 10, 190, 277);
        pdf.save('componente.pdf');
      });
    },
  },
};
</script>
