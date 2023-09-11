<template>
    <v-container width="1000" class="mx-auto">
        <h2 class="header-form">Diplomado/Maestria en Educación Superior</h2>
        <h3>
            {{ this.idUser }}
        </h3>
        <v-card class="card-style">
            <v-row>
                <v-col>
                    <v-text-field v-model="institutionName" @input="institutionName = institutionName.toUpperCase()"
                        label="Universidad o Institución" required>
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="nameHigherEducation"
                        @input="nameHigherEducation = nameHigherEducation.toUpperCase()" label="Nombre de Postgrado"
                        required>
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-select v-model="levelHigherEducation" label="Grado" :items="titlePostDegree" required>
                    </v-select>
                </v-col>

            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="countryHigherEducationName"
                        @input="countryHigherEducationName = countryHigherEducationName.toUpperCase()" label="País"
                        required>
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-select v-model="graduationModalityHigherEducation" label="Modalidad de Graduación"
                        :items="graduationModality" required>
                    </v-select>
                </v-col>
                <v-col>
                    <VueDatePicker v-model="graduationYearHigherEducation" year-picker :year-range="[1950, currentYear]"
                        :teleport="true" placeholder="Año de Titulación" />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p style="text-align: left;">Adjuntar título escaneado</p>
                    <v-file-input @change="loadHigherEducationFile($event); showAlert(); checkFormFilled()"
                        accept="application/pdf" label="Seleccionar archivo PDF" outlined></v-file-input>
                </v-col>
            </v-row>
            <v-col>
                <v-alert variant="elevated" closable density="compact" color="red" title="Atención" v-show="alertFlag"
                    text="Verifique que los datos ingresados sean correctos!"></v-alert>
            </v-col>
        </v-card>
    </v-container>
    <v-container>
        <v-btn prepend-icon="mdi-content-save-outline" @click="this.saveData()" width="150px" density="default"
            class="fixed-bottom mr-2 button-form" end>guardar</v-btn>
        <v-btn prepend-icon="mdi-arrow-left" @click="showPreviusForm()" width="150px" density="default"
            class="fixed-bottom mr-2 button-form">atras</v-btn>
    </v-container>
</template>
<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { database } from '../firebase/firebase'
import { addDoc, collection, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from 'firebase/storage'



export default {
    props: ["userId"],
    components: {
        VueDatePicker
    },
    data() {
        return {
            idUser: this.userId,
            alertFlag: false,
            institutionName: '',
            nameHigherEducation: '',
            levelHigherEducation: '',
            countryHigherEducationName: '',
            graduationModalityHigherEducation: '',
            graduationYearHigherEducation: '',
            higherEducationFile: '',
            currentYear: new Date().getFullYear(),
            formFilled: false,


            titlePostDegree: [
                'Diplomado',
                'Maestria'
            ],
            graduationModality: [
                'Monografia',
                'Tesis',
                'Otros'
            ],
        }
    },
    methods: {
        showNextForm() {
            let nextComponent = 'superior-education-profile'
            this.$emit('show-next-form', nextComponent, this.idUser);
        },
        showPreviusForm() {
            let nextComponent = 'personal-profile'
            this.$emit('show-next-form', nextComponent, this.idUser)
        },
        showAlert() {
            this.alertFlag = true
        },
        loadHigherEducationFile(e) {
            let newHigherEducationFile = e.target.files[0]
            this.higherEducationFile = newHigherEducationFile
            console.log(this.higherEducationFile.name)

        },
        saveDataHigherEducation() {
            const documentRef = doc(database, 'instructors', this.idUser)
            const collectionRef = collection(documentRef, 'higherEducationPostDegree')
            addDoc(collectionRef, {
                institutionName: this.institutionName,
                nameHigherEducation: this.nameHigherEducation,
                levelHigherEducation: this.levelHigherEducation,
                countryHigherEducationName: this.countryHigherEducationName,
                graduationModalityHigherEducation: this.graduationModalityHigherEducation,
                graduationYearHigherEducation: this.graduationYearHigherEducation,
            })

        },
        uploadHigherEducationFile() {
            const storage = getStorage();
            let newIdUser = this.idUser
            const storageRef = ref(storage, newIdUser + '/higherEducationFile/' + this.higherEducationFile.name)
            console.log(this.higherEducationFile.name)
            uploadBytes(storageRef, this.higherEducationFile).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            })
        },
        checkFormFilled() {
            if (this.institutionName &&
                this.nameHigherEducation &&
                this.levelHigherEducation &&
                this.countryHigherEducationName &&
                this.graduationModalityHigherEducation &&
                this.graduationYearHigherEducation &&
                this.higherEducationFile
            ) {
                this.formFilled = true
            }
            return this.formFilled

        },
        saveData() {
            if (this.checkFormFilled()) {
                this.showNextForm()
                this.uploadHigherEducationFile()
                this.saveDataHigherEducation()
            } else {
                this.alertFlag = true
            }
        }
    }
}
</script>
