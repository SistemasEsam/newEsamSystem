<template>
  <h1>
    Registro Docente
  </h1>
  <!-- <NavBarForm/>
  <v-tabs>
    <v-tab @click="component ='personalProfile'">Perfil Personal</v-tab>
    <v-tab :disabled="ableDegree" @click="component ='superiorEducationProfile'" >Educación Superior</v-tab>
    <v-tab :disabled="ableCourses" @click="component ='extraCoursesProfile'">Cursos Adicionales</v-tab>
    <v-tab :disabled="ableCourses" @click="component ='workExperienceProfile'">Experiencia Profesional</v-tab>
    <v-tab :disabled="ableCourses" @click="component ='skillsProfile'">Habilidades e Idiomas</v-tab>


  </v-tabs>
  <keep-alive>
    <personal-profile v-if="component === 'personalProfile'" @able-degree-form="ableDegreeForm " ></personal-profile>
  </keep-alive>

    <superior-education-profile v-if="component === 'superiorEducationProfile'" @able-courses-form="ableCoursesForm" :user-id="idUser" ></superior-education-profile>
    <extra-courses-profile v-if="component === 'extraCoursesProfile'" :user-id="idUser"></extra-courses-profile>
    <work-experience-profile v-if="component === 'workExperienceProfile'" :user-id="idUser"></work-experience-profile>
    <skills-profile v-if="component === 'skillsProfile'" :user-id="idUser"></skills-profile> -->
    <keep-alive>
      <component :is="activeComponent" @show-next-form="showNextForm" :user-id="idUser" />
    </keep-alive>
<Footer/>

</template>
    
<script>
    
    import personalProfile from '../components/PersonalProfile.vue'
    import superiorEducationProfile from '../components/SuperiorEducationProfile.vue'
    import extraCoursesProfile from '../components/ExtraCoursesProfile.vue'
    import workExperienceProfile from '../components/WorkExperiencieProfile.vue'
    import skillsProfile from '../components/SkillsProfile.vue'
    import NavBarForm from '@/components/NavBarForm.vue'
    import Footer from '@/components/Footer.vue'
    export default {
      components: {
       personalProfile,
       superiorEducationProfile,
       extraCoursesProfile,
       workExperienceProfile,
       skillsProfile,
       NavBarForm,
       Footer
      },
    
      data() {

        return {
          idUser:'aljiar23@gmail.com',
          activeComponent: 'personal-profile',
          component: 'personalProfile',
        }
      },
      methods: {
        showNextForm(nextComponent){
          this.activeComponent = nextComponent
          
        },
      }
    }
</script>