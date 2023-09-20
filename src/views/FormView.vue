<template>
  <h1 class="header-form">
    Registro Docente
  </h1>
    <keep-alive>
      <component :is="activeComponent" @show-next-form="showNextForm" :user-id="idUser" />
    </keep-alive>
<Footer/>

</template>
    
<script>
    
    import personalProfile from '../components/PersonalProfile.vue'
    import higherEducationPostDegree from '@/components/HigherEducationPostDegree.vue'
    import superiorEducationProfile from '../components/SuperiorEducationProfile.vue'
    import extraCoursesProfile from '../components/ExtraCoursesProfile.vue'
    import workExperienceProfile from '../components/WorkExperiencieProfile.vue'
    import skillsProfile from '../components/SkillsProfile.vue'
    import NavBarForm from '@/components/NavBarForm.vue'
    import Footer from '@/components/Footer.vue'
    export default {
      components: {
       personalProfile,
       higherEducationPostDegree,
       superiorEducationProfile,
       extraCoursesProfile,
       workExperienceProfile,
       skillsProfile,
       NavBarForm,
       Footer
      },
    
      data() {

        return {
          idUser:'',
          activeComponent: 'personal-profile',
          component: 'personalProfile',
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