<template>
    <div>
      <component
          :is="activeComponent"
          :id-array="idArray"
        />
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
        idArray: [this.$route.params.id,this.$route.params.moduleId],
        activeComponent: "invitation-letter",
      };
    },
  };
  </script>
  <style>
  
  </style>