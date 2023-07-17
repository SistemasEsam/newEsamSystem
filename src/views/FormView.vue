<template>
    <v-tabs>
        <v-tab @click="activeComponent = 'personalProfile'">Personal Profile</v-tab>
        <v-tab @click="activeComponent = 'degreeProfile'">Degree Profile</v-tab>
    </v-tabs>
    <keep-alive>
        <component :is="activeComponent"/>
    </keep-alive>
        
</template>
    
<script>
    
    import personalProfile from '../components/PersonalProfile.vue'
    import degreeProfile from '../components/DegreeProfile.vue'
    
    
    
    export default {
      components: {
       personalProfile,
       degreeProfile
      },
    
      data() {
        return { activeComponent: 'personalProfile'}
      },
      methods: {
      
      }
    }
</script>