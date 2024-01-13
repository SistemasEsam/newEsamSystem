<template>
  <H1> Carta de Invitación</H1>

  <v-container>
    <div class="instructor-coordinator">
      <div>
        {{
          this.currentDate.getDate() +
          " de " +
          this.currentDate.toLocaleString("default", { month: "long" }) +
          " de " +
          this.currentDate.getFullYear()
        }}
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
        Coordinadora de Programa
      </div>
      <div>
        "Ref: Invitacion para impartir docencia en: "
        <br />
        {{ this.moduleData.moduleName }}
      </div>
      <div>
        <p>
          Estimado/a Docente: Como preámbulo, reciba usted el más cordial saludo
          y deseos de éxito en las labores que desempeña como profesional
          sobresaliente; conocedores de su amplia experiencia profesional y
          conocimientos académicos, nos permitimos hacerle la presente
          invitación para que pueda formar parte de nuestro selecto plantel
          docente, y pueda compartir sus conocimientos y experiencias. La
          Escuela de Negocios ESAM está avalada bajo convenio con la Universidad
          Nacional Siglo XX, seguros de contar con su valiosa participación,
          comparto el cronograma y el contenido mínimo del módulo, así como todo
          lo relacionado a la estructura de calificación y honorarios
          profesionales:
        </p>
      </div>
      <div>
        <h4>1. Cronograma y Contenido</h4>
        Aqui va la tabla
        <br />
        Los contenidos mínimos del módulo al cual se la invita a participar,
        pueden ser ampliados y mejorados siempre que cumpla con el enfoque del
        programa.
      </div>
      <div>
        <h4>2.Metodologia Academica</h4>
        ● Plataforma Zoom (Plataforma sincrónica) donde se llevan a cabo las
        clases de manera semanal y en donde los posgraduantes realizan sus
        dudas, consultas e interactúan con el docente.
        <br />
        ● Plataforma Moodle (Plataforma asincrónica) donde se realizan las
        actividades y evaluaciones hacia los posgraduantes, por ello a su
        persona se le asigna un usuario y contraseña, para ingresar través de la
        siguiente URL (dirección de la plataforma):
        <br />
        <a href="url">
          https://esam.edu.bo/moodle/login/forgot_password.phpn
        </a>
      </div>
      <div>
        <h4>3. Planificacion Academica</h4>
        Deberá subir una semana antes de cada clase la siguiente documentación:
        <br />
        ● Plan global de la materia (Nombre del módulo, objetivos específicos de
        enseñanza, metodología, recursos didácticos y material bibliográfico).
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
        Las calificaciones deben registrarse en la Plataforma Moodle de acuerdo
        al cronograma establecido de forma obligatoria, debiendo, además, enviar
        como respaldo la planilla de notas al
        <br />
        Correo Electrónico:
      </div>
      <div>
        <h4>5. Obligaciones del docente</h4>
        Deberá enviar su Hoja de Vida documentada (grados académicos, títulos y
        certificados), fotocopia del CI, para la carpeta académica de la
        Universidad Nacional Siglo XX, en formato pdf.
        <br>
        Presentar el plan global
        en la primera clase del módulo correspondiente. 
        <br>
        Presentar las siguientes
        ACTAS:
        <br> - Acta 01. Conclusión del módulo (redacción en tiempo pasado del
        cumplimento del plan global). 
        <br>- Acta 02. Plan de Desarrollo Curricular
        (redacción en tiempo pasado del cumplimento del plan global). 
        <br>- Acta 03.
        Planilla de Acta de Notas (calificaciones finales y observaciones). 
        <br>- Acta 04. Desarrollo Curricular de Notas (las columnas pueden ser
        modificadas acorde a las actividades calificadas). 
        <br>- Acta 05. Planilla
        de Acta de Notas de Segunda Instancia (nota única de 71 puntos). 
        <br>Las
        actas deben presentarse de acuerdo al cronograma. El incumplimiento de
        esta cláusula deshabilita al docente para seguir dentro del plantel
        docente. 
        <br>En caso de que surja algún inconveniente que impida su
        presencia en el desarrollo del módulo, deberá enviar su reemplazo con
        una preparación académica igual o superior a la suya, con el fin de
        velar la calidad académica que la Universidad imparte a los
        postgraduantes. 
        <br>Es obligación del Docente gestionar las actividades en
        plataforma Moodle, interactuar y responder a las dudas del posgraduante.
        <br>Al finalizar el módulo, el docente estará sujeto a la evaluación
        registrada por los posgaduantes, otorgando al docente una valoración
        cuali cuanti que permita al docente mejorar las competencias pedagógicas
        y su recontratación. Correo Electrónico: Correo Coordinadora
      </div>
      <div>
        <h4>6. Honorarios profesionales</h4>
        A la conclusión del módulo en fechas establecidas en cronograma de
        clases, deberá realizar la presentación de las actas 01, 02 ,03, 04 de
        manera obligatoria y 05 si corresponde, para realizar la solicitud de
        desembolso de honorarios de 650$ SEISCIENTOS CINCUENTA 00/100 DÓLARES
        AMERICANOS, los cuales serán depositados al número de cuenta que sea
        brindado por su persona para el abono en fechas 11 o 26 del mes. En caso
        de no presentar las actas, no se procede al cumplimiento del depósito en
        fechas estipuladas, es responsabilidad del docente cumplir las fechas
        para la efectuación de pago. 
        <br>Asimismo aclarar que se enviará el formato
        de los informes y los mismos deberán ser firmados y enviados vía correo
        electrónico. 
        <br>Nota: Deberá emitir la factura correspondiente por los
        servicios prestados a favor de ESCUELA DE NEGOCIOS ESAM S.R.L. (NIT:
        380096028) con el detalle: Servicios Profesionales. 
        <br>Para ello debe tener
        habilitado su NIT con la actividad CONSULTORES, SERVICIOS PROFESIONALES
        Y TÉCNICOS para la emisión de factura por Servicios Profesionales. 
        <br>Sin
        otro particular, me despido.
      </div>
    </div>
  </v-container>
</template>
<script>
import { database } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  props: ["userId"],
  data() {
    return {
      idUser: this.userId,
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
      },
      moduleData: {
        moduleCode: "",
        moduleName: "",
        moduleContent: "",
        moduleDates: [],
      },
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
          programDataSaved.data().programCoordinator;
        this.programData.programName = programDataSaved.data().programName;
        this.programData.programId = programDataSaved.data().programId;
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
        this.moduleData.moduleDates = moduleDataSaved.data().moduleDates;
      } else {
        console.log("Document does not exist");
      }
    },
  },
};
</script>
<style>
</style>