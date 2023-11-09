<template>
  <div class="cv-main-page">
    <v-btn @click="exportToPDF">DESCARGAR PDF</v-btn>
    <div class="cv-page-separator"></div>
    <div ref="firstPage" class="cv-page">
      <div class="info-section">
      </div>
    </div>
    <div class="cv-page-separator"></div>
    <div ref="secondPage" class="cv-page">
      <div class="info-section">
      </div>
    </div>
    <div class="cv-page-separator"></div>
    <div ref="thirdPage" class="cv-page">
      <div class="info-section">
      </div>
    </div>
    <div class="cv-page-separator"></div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default {
  setup() {},
  methods: {
    exportToPDF() {
      const pdfWidth = 8.5 * 72; // Ancho de hoja carta en puntos (1 pulgada = 72 puntos)
      const pdfHeight = 11 * 72; // Alto de hoja carta en puntos (1 pulgada = 72 puntos)
      const pdf = new jsPDF("p", "pt", [pdfWidth, pdfHeight]);

      const options = {
        background: "white",
      };

      // Exportar contenido de la primera página (File.vue)
      html2canvas(
        this.$refs.firstPage,
        { allowTaint: false, useCORS: true },
        options
      ).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          pdfWidth,
          pdfHeight,
          "firstPage",
          "FAST"
        );
        // Exportar contenido de la segunda página (SecondPage.vue)
        pdf.addPage();
        html2canvas(
          this.$refs.secondPage,
          { allowTaint: false, useCORS: true },
          options
        ).then((canvas) => {
          const imgData2 = canvas.toDataURL("image/png");
          pdf.addImage(
            imgData2,
            "PNG",
            0,
            0,
            pdfWidth,
            pdfHeight,
            "secondPage",
            "FAST"
          );
          pdf.addPage();
          html2canvas(
            this.$refs.thirdPage,
            { allowTaint: false, useCORS: true },
            options
          ).then((canvas) => {
            const imgData2 = canvas.toDataURL("image/png");
            pdf.addImage(
              imgData2,
              "PNG",
              0,
              0,
              pdfWidth,
              pdfHeight,
              "secondPage",
              "FAST"
            );
            pdf.save(this.idUser + "CVESAM.pdf");
          });
        });
      });
    },
  },









};
</script>
<style>
.cv-main-page {
  width: 100%;
  position: absolute;
  display: grid;
  place-content: center;
}

.cv-page {
  position: relative;
  width: 8.5in;
  height: 11in;
  background-color: white;
  border: 1px solid black;
}
.cv-page-separator {
  position: relative;
  width: 8.5in;
  height: 1in;
  color: white;
}
.info-section{
  background-color: #162d4a;
  width: 2.5in;
  height: 11in;
}
</style>