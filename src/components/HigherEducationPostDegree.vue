<template>
    <v-container width="1000" class="mx-auto">
        <h2>Diplomado/Maestria en Educación Superior</h2>
        <v-card>
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
                    <VueDatePicker v-model="graduationYearHigherEducation" year-picker :year-range="[1950, 2023]"
                        :teleport="true" placeholder="Año de Titulación" />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <p style="text-align: left;">Adjuntar título escaneado</p>
                    <v-file-input @change="loadHigherEducationFile($event)" accept="application/pdf"
                        label="Seleccionar archivo PDF" outlined></v-file-input>
                </v-col>
            </v-row>

        </v-card>
    </v-container>
    <v-container>
        <v-btn @click="showNextForm()" width="100px" density="comfortable" color="warning" class="fixed-bottom mr-2">guardar
        </v-btn>
        <v-btn @click="showPreviusForm()" width="100px" density="comfortable" color="warning"
            class="fixed-bottom mr-2">atras
        </v-btn>
    </v-container>
</template>
<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
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
            institutionName: '',
            nameHigherEducation: '',
            levelHigherEducation: '',
            countryHigherEducationName: '',
            graduationModalityHigherEducation: '',
            graduationYearHigherEducation: '',
            higherEducationFile: '',


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
            this.$emit('show-next-form', nextComponent);
        },
        showPreviusForm() {
            let nextComponent = 'personal-profile'
            this.$emit('show-next-form', nextComponent)
        },
        loadHigherEducationFile(e) {
            let newHigherEducationFile = e.target.files[0]
            this.higherEducationFile = newHigherEducationFile
            console.log(newHigherEducationFile)

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
            const storageRef = ref(storage, newIdUser + '/higherEducationFile/' + postDegreeFileValue.name)
            uploadBytes(storageRef, this.higherEducationFile).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            })
        },
    }
}
</script>
