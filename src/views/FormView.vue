<template>
  <v-tabs>
    <v-tab @click="component ='personalProfile'">Personal Profile</v-tab>
    <v-tab :disabled="ableDegree" @click="component ='superiorEducationProfile'">Superior Education Profile</v-tab>
    <v-tab :disabled="ableCourses" @click="component ='extraCoursesProfile'">Extra Courses Profile</v-tab>
    <v-tab @click="component ='workExperienceProfile'">Work Experience Profile</v-tab>
    <v-tab @click="component ='skillsProfile'">Skills Profile</v-tab>


  </v-tabs>
    <personal-profile v-if="component === 'personalProfile'" @able-degree-form="ableDegreeForm " ></personal-profile>
    <superior-education-profile v-if="component === 'superiorEducationProfile'" @able-courses-form="ableCoursesForm" ></superior-education-profile>
    <extra-courses-profile v-if="component === 'extraCoursesProfile'"></extra-courses-profile>
    <work-experience-profile v-if="component === 'workExperienceProfile'"></work-experience-profile>
    <skills-profile v-if="component === 'skillsProfile'"></skills-profile>
</template>
    
<script>
    
    import personalProfile from '../components/PersonalProfile.vue'
    import superiorEducationProfile from '../components/SuperiorEducationProfile.vue'
    import extraCoursesProfile from '../components/ExtraCoursesProfile.vue'
    import workExperienceProfile from '../components/WorkExperiencieProfile.vue'
    import skillsProfile from '../components/SkillsProfile.vue'

    export default {
      components: {
       personalProfile,
       superiorEducationProfile,
       extraCoursesProfile,
       workExperienceProfile,
       skillsProfile
      },
    
      data() {

        return { 
          ableDegree : true ,
          ableCourses: true,
          idUser:'',
          activeComponent: 'personalProfile',
          component: 'personalProfile',
        }
      },
      methods: {
        ableDegreeForm(idUserProfile){
          this.idUser = idUserProfile
          this.ableDegree = false
          
        },
        ableCoursesForm(){
          this.ableCourses = false
        }
      }
    }
</script>