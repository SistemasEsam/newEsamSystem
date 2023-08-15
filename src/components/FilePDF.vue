<template>

  <div>
    
    <v-btn @click="exportToPDF">DESCARGAR PDF</v-btn>
    <div ref="pdfComponent" class="custom-text">
      <!-- Contenido del primer componente (File.vue) -->
      <File :user-id="idUser"/>
    </div>

    <!-- Contenido del segundo componente (SecondPage.vue) -->
    <div ref="secondPageComponent">
      <SecondPage :user-id="idUser"/>
    </div>

    <!-- Agrega un botón para exportar a PDF -->
    
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import File from './File.vue';
import SecondPage from './SecondPage.vue';
import { database } from '../firebase/firebase'
import { doc, getDoc} from 'firebase/firestore'


export default {
  props:[
    "userId"
  ],
  components: {
    File,
    SecondPage,
  },
  data() {
    return {
      idUser : this.userId,
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
      html2canvas(this.$refs.pdfComponent, options).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Verificar si la imagen es más alta que la hoja
        if (imgHeight > pdfHeight) {
          // Redimensionar la imagen para que se ajuste a la altura de la hoja
          const scaleRatio = pdfHeight / imgHeight;
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth * scaleRatio, pdfHeight);
        } else {
          // La imagen es más ancha o tiene el mismo tamaño que la hoja
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        }

        // Exportar contenido de la segunda página (SecondPage.vue)
        pdf.addPage();
        html2canvas(this.$refs.secondPageComponent, options).then(canvas => {
          const imgData2 = canvas.toDataURL('image/png');
          pdf.addImage(imgData2, 'PNG', 0, 0, pdfWidth, pdfHeight);
          pdf.save('cvESAM.pdf');
        });
      });
    },
    async getInstructorData(){
      const docSnap = await getDoc(doc(database,'instructors', this.idUser))
      if (docSnap.exists()) {
        this.name = docSnap.data().name
        this.capital = docSnap.data().capital
      } else {
        console.log('Document does not exist')
      }
    }
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

/* Estilos para que la imagen ocupe toda la hoja */
.image {
  width: 100%;
  height: 100%;
}
</style>
