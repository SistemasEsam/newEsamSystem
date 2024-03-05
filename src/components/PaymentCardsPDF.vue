
<script>
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PaymentCardsFiles from './PaymentCardsFile.vue';
import { database } from '../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'


export default {
  props: [
    "paymentCardsId"
  ],
  components: {
    PaymentCardsFiles,
  },
  data() {
    return {
      idPaymentCards:this.paymentCardsId,
    }
  },

  methods: {


    exportToPDF() {
      const pdfWidth = 8.5 * 72; // Ancho de hoja carta en puntos (1 pulgada = 72 puntos)
      const pdfHeight = 11 * 72; // Alto de hoja carta en puntos (1 pulgada = 72 puntos)
      const pdf = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]);

      const options = {
        background: 'white'
      };

      // Exportar contenido de la primera página (File.vue)
      html2canvas(this.$refs.pdfComponent  ,options).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, 'firstPage','FAST')
         //Exportar conteido de la segunda página (SecondPage.vue)
       pdf.addPage();

          pdf.save(this.idPaymentCards + '_PDF.pdf');
        
        
      });
    },
    async getInstructorData() {
      const docSnap = await getDoc(doc(database, 'paymentCards', this.idPaymentCards))
      if (docSnap.exists()) {
        this.programId = docSnap.data().programId
        this.bank = docSnap.data().bank
      } else {
        console.log('Document does not exist')
      }
    }
  },
};
</script>
<template>
  <div>

    <v-btn @click="exportToPDF">DESCARGAR PDF</v-btn>
    <div ref="pdfComponent" class="custom-text">
      <!-- Contenido del primer componente (File.vue) -->
      <PaymentCardsFiles :paymentCards-id="paymentCardsId" />
    </div>  
  </div>
</template>

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

/* Estilos para que la imagen ocupe toda la hoja */
.image {
  width: 100%;
  height: 100%;
}

</style>
