<template>
    <InvitationForm :user-id="idUser"></InvitationForm>
    
</template>
<script>
import InvitationForm from '@/components/InvitationComponents/InvitationForm.vue'

export default {
    setup() {
        
    },
    components:{
        InvitationForm,
    },
    data() {
        return {
            idUser: this.$route.params.id
        }
    },
}
</script>
<style>

</style>