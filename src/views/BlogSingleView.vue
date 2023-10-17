<template>
  <div class="maindiv">
    <div class="divone">
      <NewNavBarVue></NewNavBarVue>
      <LitleNavBar></LitleNavBar>
      <NewFront></NewFront>
    </div>

    <div class="divtwo">
      <BlogSinglePost />
    </div>
  </div>
</template>
<script>
import BlogSinglePost from "@/components/BlogSinglePost.vue";
import NewNavBarVue from "@/components/NewNavBar.vue";
import LitleNavBar from "@/components/LitleNavBar.vue";
import NewFront from "@/components/NewFront.vue";
export default {
  components: {
    BlogSinglePost,
    NewNavBarVue,
    LitleNavBar,
    NewFront,
  },
};
</script>

<style scoped>
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
  margin-top:2% ;
}
</style>
