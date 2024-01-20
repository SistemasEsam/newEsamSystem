<template>
  <nav-bar></nav-bar>
  <h1 class="header-form">
    Registro Docente
  </h1>
    <keep-alive>
      <component :is="activeComponent" @show-next-form="showNextForm" :user-id="idUser" />
    </keep-alive>


</template>
    
<script>
    
    import personalProfile from '../../components/CVFormComponents/PersonalProfile.vue'
    import higherEducationPostDegree from '@/components/CVFormComponents/HigherEducationPostDegree.vue'
    import superiorEducationProfile from '../../components/CVFormComponents/SuperiorEducationProfile.vue'
    import extraCoursesProfile from '../../components/CVFormComponents/ExtraCoursesProfile.vue'
    import workExperienceProfile from '../../components/CVFormComponents/WorkExperiencieProfile.vue'
    import skillsProfile from '../../components/CVFormComponents/SkillsProfile.vue'
    import menuProfile from '@/components/CVFormComponents/MenuProfile.vue'
    import NavBar from '../../components/NavBar.vue'
    import gratitudeProfile from '@/components/CVFormComponents/GratitudeProfile.vue'
 
    export default {
      components: {
       personalProfile,
       higherEducationPostDegree,
       superiorEducationProfile,
       extraCoursesProfile,
       workExperienceProfile,
       skillsProfile,
       menuProfile,
       NavBar,
       gratitudeProfile,
      },
    
      data() {

        return {
          idUser:'',
          activeComponent: 'menu-profile',
          component: 'menuProfile',
        }
      },
      methods: {
        showNextForm(nextComponent,idUser){
          this.activeComponent = nextComponent
          this.idUser =  idUser
          
        },
      }
    }
</script>