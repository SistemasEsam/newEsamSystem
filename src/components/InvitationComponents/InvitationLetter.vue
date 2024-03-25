<template>
  <div class="instructor-coordinator">
    <H1> Carta de Invitación</H1>
    <v-btn @click="exportToPDF()">DESCARGAR PDF</v-btn>
    <br />
    <div ref="firstPage" class="invitation-page">
      <div class="letter-header">
        <invitationheader></invitationheader>
      </div>
      <div class="main-content-letter">
        <div>
          <div align="right" class="current-date">
            <div>
              {{
                this.currentDate.getDate() +
                " de " +
                this.currentDate.toLocaleString("default", { month: "long" }) +
                " de " +
                this.currentDate.getFullYear()
              }}
            </div>
            <div>ID: {{ this.moduleData.moduleCode }}</div>
          </div>
          <div>
            {{
              "A: " +
              this.instructorData.name +
              " " +
              this.instructorData.lastNameF +
              " " +
              this.instructorData.lastNameM
            }}
          </div>
          <div>
            {{ "De: " + this.programData.programCoordinator }}
            <br />
            <div class="bold-data">Coordinadora de Programa</div>
          </div>
          <div align="right">
            <div class="bold-data">
              Ref: Invitacion para impartir docencia en:
            </div>
            {{ this.moduleData.moduleOrder+": "+this.moduleData.moduleName }}
            <br />
            {{ this.programData.programName }}
          </div>
          <br />
          <div>
            <p>
              Estimado/a Docente:
              <br />Como preámbulo, reciba usted el más cordial saludo y deseos
              de éxito en las labores que desempeña como profesional
              sobresaliente; conocedores de su amplia experiencia profesional y
              conocimientos académicos, nos permitimos hacerle la presente
              invitación para que pueda formar parte de nuestro selecto plantel
              docente, y pueda compartir sus conocimientos y experiencias. La
              Escuela de Negocios ESAM está avalada bajo convenio con la
              Universidad Nacional Siglo XX, seguros de contar con su valiosa
              participación, comparto el cronograma y el contenido mínimo del
              módulo, así como todo lo relacionado a la estructura de
              calificación y honorarios profesionales:
            </p>
          </div>
          <div>
            <h4>1. Cronograma y Contenido</h4>
            <v-container>
              <v-row>
                <v-col cols="4" class="row-sessions">
                  Contenidos minimos tentativos
                </v-col>
                <v-col class="row-sessions"> Actividad </v-col>
                <v-col class="row-sessions"> Fecha </v-col>
                <v-col class="row-sessions"> Hora </v-col>
              </v-row>
              <v-row>
                <v-col cols="4" class="row-content">
                  <p>
                    {{ this.moduleData.moduleContent }}
                  </p>
                </v-col>
                <v-col>
                  <v-row
                    class="row-sessions"
                    v-for="(dateSelected, index) in this.moduleData.moduleDates"
                    :key="index"
                  >
                    Sesión Clase {{ index + 1 }}
                  </v-row> </v-col
                ><v-col>
                  <v-row
                    class="row-sessions"
                    v-for="(dateSelected, index) in this.moduleData.moduleDates"
                    :key="index"
                  >
                    {{ dateSelected }}
                  </v-row> </v-col
                ><v-col>
                  <v-row
                    class="row-sessions"
                    v-for="(dateSelected, index) in this.moduleData.moduleDates"
                    :key="index"
                  >
                    {{ this.moduleData.moduleSchedule }}
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <br />
            Los contenidos mínimos del módulo al cual se la invita a participar,
            pueden ser ampliados y mejorados siempre que cumpla con el enfoque
            del programa.
          </div>
        </div>
      </div>
      <div class="letter-footer">
        <InvitationFooterVue :programSite=" this.programData.programSite "></InvitationFooterVue>
      </div>
    </div>
    <br />
    <div ref="secondPage" class="invitation-page">
      <div class="letter-header">
        <invitationheader></invitationheader>
      </div>
      <div class="main-content-letter">
        <div>
          <div>
            <h4>2.Metodologia Academica</h4>
            <b>● Plataforma Zoom</b> (Plataforma sincrónica) donde se llevan a
            cabo las clases de manera semanal y en donde los posgraduantes
            realizan sus dudas, consultas e interactúan con el docente.
            <br />
            <b>● Plataforma Moodle</b> (Plataforma asincrónica) donde se
            realizan las actividades y evaluaciones hacia los posgraduantes, por
            ello a su persona se le asigna un usuario y contraseña, para
            ingresar través de la siguiente URL (dirección de la plataforma):
            <br />
            <a href="url">
              https://esam.edu.bo/moodle/login/forgot_password.phpn
            </a>
          </div>
          <div>
            <h4>3. Planificacion Academica</h4>
            Deberá subir una semana antes de cada clase la siguiente
            documentación:
            <br />
            ● Plan global de la materia (Nombre del módulo, objetivos
            específicos de enseñanza, metodología, recursos didácticos y
            material bibliográfico).
            <br />
            ● Diapositivas de la semana.
            <br />
            ● Todo el Material bibliográfico de consulta (artículos, documentos
            referentes, enlaces, etc.).
            <br />
            ● Todas las Actividades Evaluativas con solucionarios.
            <br />
            ● Cápsulas resumen de videos.
            <br />
            *Las actividades planificadas deberán estar orientadas a la práctica
            contextual real.
          </div>
          <div>
            <h4>4. Metodologia para las evaluaciones</h4>
            <b>Las calificaciones deben registrarse en la Plataforma Moodle</b>
            de acuerdo al cronograma establecido de forma obligatoria, debiendo,
            además, enviar como respaldo la planilla de notas al
            <br />
            Correo Electrónico: {{ this.programData.programCoordinatorEmail }}
          </div>
          <div>
            <h4>5. Obligaciones del docente</h4>
            Deberá enviar su Hoja de Vida documentada (grados académicos,
            títulos y certificados), fotocopia del CI, para la carpeta académica
            de la Universidad Nacional Siglo XX, en formato pdf.
            <br />
            Presentar el plan global en la primera clase del módulo
            correspondiente.
            <br />
            Presentar las siguientes ACTAS:
            <br />
            <b>- Acta 01.</b> Conclusión del módulo (redacción en tiempo pasado
            del cumplimento del plan global). <br />- Acta 02. Plan de
            Desarrollo Curricular (redacción en tiempo pasado del cumplimento
            del plan global).
            <br />
            <b>- Acta 03.</b> Planilla de Acta de Notas (calificaciones finales
            y observaciones).
            <br />
            <b>- Acta 04.</b> Desarrollo Curricular de Notas (las columnas
            pueden ser modificadas acorde a las actividades calificadas).
            <br />
            <b>- Acta 05.</b> Planilla de Acta de Notas de Segunda Instancia
            (nota única de 71 puntos). <br />Las actas deben presentarse de
            acuerdo al cronograma. El incumplimiento de esta cláusula
            deshabilita al docente para seguir dentro del plantel docente.
            <br />En caso de que surja algún inconveniente que impida su
            presencia en el desarrollo del módulo, deberá enviar su reemplazo
            con una preparación académica igual o superior a la suya, con el fin
            de velar la calidad académica que la Universidad imparte a los
            postgraduantes. <br /><b
              >Es obligación del Docente gestionar las actividades en plataforma
              Moodle, interactuar y responder a las dudas del posgraduante.</b
            >
            <br />Al finalizar el módulo, el docente estará sujeto a la
            evaluación registrada por los posgaduantes, otorgando al docente una
            valoración cuali cuanti que permita al docente mejorar las
            competencias pedagógicas y su recontratación. Correo Electrónico:
            Correo Coordinadora
          </div>
        </div>
      </div>
      <div class="letter-footer">
        <InvitationFooterVue :programSite=" this.programData.programSite "></InvitationFooterVue>
      </div>
    </div>
    <br />
    <div ref="thirdPage" class="invitation-page">
      <div class="letter-header">
        <invitationheader></invitationheader>
      </div>
      <div class="main-content-letter">
        <div>
          <div>
            <h4>6. Honorarios profesionales</h4>
            A la conclusión del módulo en fechas establecidas en cronograma de
            clases, deberá realizar la presentación de las actas 01, 02 ,03, 04
            de manera obligatoria y 05 si corresponde, para realizar la
            solicitud de desembolso de honorarios de
            <b>{{ this.programData.programPayment+" "+this.moduleData.moduleInvoice }}</b>
            los cuales serán depositados al número de cuenta que sea brindado
            por su persona para el abono en fechas 11 o 26 del mes.
            <b
              >En caso de no presentar las actas, no se procede al cumplimiento
              del depósito en fechas estipuladas,</b
            >
            es responsabilidad del docente cumplir las fechas para la
            efectuación de pago. <br />Asimismo aclarar que se enviará el
            formato de los informes y los mismos deberán ser firmados y enviados
            vía correo electrónico. <br /><b>Nota:</b> Deberá emitir la factura
            correspondiente por los servicios prestados a favor de
            <b>ESCUELA DE NEGOCIOS ESAM S.R.L. (NIT: 380096028)</b> con el
            detalle: <b>Servicios Profesionales.</b> <br />Para ello debe tener
            habilitado su NIT con la actividad
            <b>CONSULTORES, SERVICIOS PROFESIONALES Y TÉCNICOS</b> para la
            emisión de factura por Servicios Profesionales. <br />Sin otro
            particular, me despido.
          </div>
          <br />
        </div>
      </div>
      <div class="letter-footer">
        <InvitationFooterVue :programSite=" this.programData.programSite "></InvitationFooterVue>
      </div>
    </div>
  </div>
</template>
<script>
import invitationheader from "../InvitationComponents/InvitationHeader.vue";
import { database } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import InvitationFooterVue from "./InvitationFooter.vue";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default {
  components: {
    invitationheader,
    InvitationFooterVue,
  },
  props: ["idArray"],
  data() {
    return {
      idUser: this.idArray,
      currentDate: new Date(),
      instructorData: {
        name: "",
        lastNameF: "",
        lastNameM: "",
      },
      programData: {
        programCoordinator: "",
        programName: "",
        programId: "",
        programCoordinatorEmail: "",
        programType: "",
        programPayment: "",
        programSite:"",
      },
      moduleData: {
        moduleCode: "",
        moduleName: "",
        moduleContent: "",
        moduleSchedule: "",
        moduleOrder:"",
        moduleInvoice: "",
        moduleDates: [],
      },
      headers: [
        { key: "content", title: "Contenido Mínimo" },
        { key: "activity", title: "Actividad" },
        { key: "date", title: "Fecha" },
        { key: "hour", title: "Hora" },
      ],
    };
  },
  created() {
    this.getInstructorData();
    this.getProgramData();
    this.getModuleData();
  },
  methods: {
    async getInstructorData() {
      const personalProfileData = await getDoc(
        doc(database, "instructors", this.idUser[0])
      );
      if (personalProfileData.exists()) {
        this.instructorData.name = personalProfileData.data().name;
        this.instructorData.lastNameF = personalProfileData.data().lastNameF;
        this.instructorData.lastNameM = personalProfileData.data().lastNameM;
      } else {
        console.log("Document does not exist");
      }
    },
    async getProgramData() {
      const programCodeArray = this.idUser[1].split("-");
      const programCode =
        programCodeArray[0] +
        "-" +
        programCodeArray[1] +
        "-" +
        programCodeArray[2];
      const programDataSaved = await getDoc(
        doc(database, "postDegreePrograms", programCode)
      );
      if (programDataSaved.exists()) {
        this.programData.programCoordinator =
          programDataSaved.data().programCoordinatorName +
          " " +
          programDataSaved.data().programCoordinatorLastame;
        this.programData.programName = programDataSaved.data().programName;
        this.programData.programId = programDataSaved.data().programId;
        this.programData.programSite = programDataSaved.data().programSite;
        this.programData.programCoordinatorEmail = programDataSaved
          .data()
          .programCoordinatorEmail.toLowerCase();
        this.programData.programType = programDataSaved.data().programType;
        switch (programDataSaved.data().programType) {
          case "Diplomado":
            this.programData.programPayment =
              "1775 Un Mil Setecientos Setenta y Cinco 00/100 Bolivianos";
            break;
          case "Maestria":
            this.programData.programPayment =
              "3550 Tres Mil Quinientos Cincuenta 00/100 Bolivianos";
            break;
        }
      } else {
        console.log("Document does not exist");
      }
    },
    async getModuleData() {
      const programCodeArray = this.idUser[1].split("-");
      const programCode =
        programCodeArray[0] +
        "-" +
        programCodeArray[1] +
        "-" +
        programCodeArray[2];
      const moduleDataSaved = await getDoc(
        doc(
          database,
          "postDegreePrograms",
          programCode,
          "modules",
          this.idUser[1]
        )
      );
      if (moduleDataSaved.exists()) {
        this.moduleData.moduleCode = moduleDataSaved.data().moduleCode;
        this.moduleData.moduleName = moduleDataSaved.data().moduleName;
        this.moduleData.moduleContent = moduleDataSaved.data().moduleContent;
        this.moduleData.moduleOrder = moduleDataSaved.data().moduleOrder;
        switch (moduleDataSaved.data().moduleInvoice) {
          case "0":
          this.moduleData.moduleInvoice =
              "Con Factura";
            break;
          case "1":
          this.moduleData.moduleInvoice =
              "Con Retención";
            break;
        }
        this.moduleData.moduleSchedule =
          moduleDataSaved.data().moduleStartHour +
          "-" +
          moduleDataSaved.data().moduleEndHour;
        this.moduleData.moduleDates = this.formatDate(
          moduleDataSaved.data().moduleDates
        );
      } else {
        console.log("Document does not exist");
      }
    },
    formatDate(dates) {
      const formatedDates = [];
      dates.forEach((date) => {
        const listDate = new Date(date);
        const newDate =
          listDate.getDate() +
          "/" +
          (listDate.getMonth() + 1) +
          "/" +
          listDate.getFullYear();
        formatedDates.push(newDate);
      });
      console.log(formatedDates);
      return formatedDates;
    },
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
        { allowTaint: false, useCORS: true, scale: 5 },
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
          "MEDIUM"
        );
        // Exportar contenido de la segunda página (SecondPage.vue)
        pdf.addPage();
        html2canvas(
          this.$refs.secondPage,
          { allowTaint: false, useCORS: true, scale: 5 },
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
            "MEDIUM"
          );
          pdf.addPage();
          html2canvas(
            this.$refs.thirdPage,
            { allowTaint: false, useCORS: true, scale: 5 },
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
              "thirdPage",
              "MEDIUM"
            );
            pdf.save(this.idUser[0] + "invitation.pdf");
          });
        });
      });
    },
  },
};
</script>
<style>
.instructor-coordinator {
  width: 100%;
  position: absolute;
  display: grid;
  place-content: center;
}

.invitation-page {
  position: relative;
  width: 8.5in;
  height: 11in;
  background-color: white;
  border-style: solid;
  border-width: 0.1px;
  font-size: 12px;
}
.main-content-letter {
  position: relative;
  margin: auto;
  place-items: center;
  width: 7in;
  height: auto;
  display: grid;
}
.letter-header {
  position: relative;
  display: grid;
  place-items: center;
  margin: 0;
  height: 1.5in;
}
.letter-footer {
  position: absolute;
  width: 7in;
  height: 1.5in;
  bottom: -5%;
}
.row-sessions {
  height: 4rem;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
}
.row-content {
  border: 1px solid black;
  align-items: center;
  justify-content: center;
}
.bold-data {
  font-weight: bold;
}
</style>