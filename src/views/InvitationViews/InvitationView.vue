<template>
  <div>
    <keep-alive>
      <component
        :is="activeComponent"
        @show-next-form="showNextForm"
        :id-array="idUser"
      />
    </keep-alive>
  </div>
</template>
<script>
import InvitationForm from "@/components/InvitationComponents/InvitationForm.vue";
import InvitationModuleSection from "@/components/InvitationComponents/InvitationModuleSection.vue";
import InvitationLetter from "@/components/InvitationComponents/InvitationLetter.vue";

export default {
  setup() {},
  components: {
    InvitationForm,
    InvitationModuleSection,
    InvitationLetter,
  },
  data() {
    return {
      idUser: this.$route.params.id,
      activeComponent: "invitation-form",
    };
  },
  methods: {
    showNextForm(nextComponent, idUser) {
      this.activeComponent = nextComponent;
      this.idUser = idUser;
    },
  },
};
</script>
<style>

</style>