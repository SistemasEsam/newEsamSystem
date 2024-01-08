<template>
    <keep-alive>
      <component :is="activeComponent" @show-next-form="showNextForm" :user-id="idUser" />
    </keep-alive>
    
</template>
<script>
import InvitationForm from '@/components/InvitationComponents/InvitationForm.vue'
import InvitationModuleSection from '@/components/InvitationComponents/InvitationModuleSection.vue';

export default {
    setup() {
        
    },
    components:{
        InvitationForm,
        InvitationModuleSection
    },
    data() {
        return {
            idUser: this.$route.params.id,
            activeComponent: 'invitation-form',
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
<style>

</style>