<template>
  <PaymentCardsPDFVue :paymentCards-id="idPaymentCards"/>
</template>
<script>
import PaymentCardsPDFVue from '@/components/PaymentCardsPDF.vue';



export default {
  components: {
    PaymentCardsPDFVue
  },
  data() {
    return{
      idPaymentCards: this.$route.params.id

    }
  }
};
</script>
