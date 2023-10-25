<template>
   <div class="maindiv">
    <div class="divone">
      <NewNavBarVue></NewNavBarVue>
      <LitleNavBar></LitleNavBar>
      <NewFront></NewFront>
    </div>

    <div class="divtwo">
      <BlogPaperList />
    </div>
  </div>
</template>
<script>
import BlogPaperList from '@/components/BlogComponents/BlogPaperList.vue';
import NewNavBarVue from "@/components/NewNavBar.vue";
import LitleNavBar from "@/components/LitleNavBar.vue";
import NewFront from "@/components/NewFront.vue";

export default {
    components: {
        BlogPaperList,
        NewNavBarVue,
        LitleNavBar,
        NewFront,
    }

}
</script>
<style>
.maindiv {
  position: absolute;
  width: 100%;
}
.divone {
  position: relative;
  margin-top: 5.5%;
}

.divtwo {
  position: relative;
  margin-top: 5%;
}
</style>