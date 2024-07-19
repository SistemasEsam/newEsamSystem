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
  import InvitationLetter from "@/components/InvitationComponents/InvitationLetter.vue";
  
  export default {
    setup() {},
    components: {
      InvitationLetter,
    },
    data() {
      return {
        idUser: this.$route.params.id,
        activeComponent: "invitation-form",
      };
    },
  };
  </script>
  <style>
  
  </style>