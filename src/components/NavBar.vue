<template>
  <v-app-bar
    app
    :color="appBarColor"
    :dark="appBarDark"
    :clipped-left="clipped"
  >
    <v-toolbar-title class="font-italic">{{ appBarTitle }}</v-toolbar-title>
  </v-app-bar>
</template>
  
  <script>
export default {
  name: "CustomNavbar",
  data() {
    return {
      drawer: false,
      clipped: false,
      items: [
        { title: "Home", path: "/", icon: "mdi-home" },
        { title: "Contactanos", path: "/contact", icon: "mdi-email" },
        { title: "Sobre nosotros", path: "/about", icon: "mdi-information" },
        // Agrega más elementos del menú según tus necesidades
      ],
      itemrout: {
        path1: "/form-view",
        path2: "/login",
      },
      appBarColor: "#162d4a",
      appBarDark: true,
      appBarTitle: "Sistema Academico ESAM",
    };
  },
};
</script>
  
  <style scoped>
.v-navigation-drawer {
  background-color: #162d4a;
}

.v-list-item {
  color: white;
}

.v-btn.warning {
  background-color: yellow;
  color: black;
}

.v-btn.success {
  background-color: green;
  color: white;
}

.v-app-bar {
  background-color: #162d4a;
  color: white;
}
</style>
  