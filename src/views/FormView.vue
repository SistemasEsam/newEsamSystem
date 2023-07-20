<template>
  <v-tabs>
    <v-tab @click="component ='personalProfile'">Personal Profile</v-tab>
    <v-tab :disabled="ableForm" @click="component ='superiorEducationProfile'">Superior Education Profile</v-tab>
    <v-tab @click="component ='extraCoursesProfile'">Extra Courses Profile</v-tab>

  </v-tabs>
    <personal-profile v-if="component === 'personalProfile'" @able-degree-form="ableDegreeForm" ></personal-profile>
    <superior-education-profile v-if="component === 'superiorEducationProfile'"></superior-education-profile>
    <extra-courses-profile v-if="component === 'extraCoursesProfile'"></extra-courses-profile>
</template>
    
<script>
    
    import personalProfile from '../components/PersonalProfile.vue'
    import superiorEducationProfile from '../components/SuperiorEducationProfile.vue'
    import extraCoursesProfile from '../components/ExtraCoursesProfile.vue'

    export default {
      components: {
       personalProfile,
       superiorEducationProfile,
       extraCoursesProfile
      },
    
      data() {

        return { 
          ableForm : true ,
          activeComponent: 'personalProfile',
          component: 'personalProfile',
        }
      },
      methods: {
        ableDegreeForm(){
          this.ableForm = false
        }

      }
    }
</script>