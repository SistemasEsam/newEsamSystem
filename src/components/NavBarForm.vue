<template>
    <v-navigation-drawer app v-model="drawer" :clipped="clipped">
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.path" router>
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  
    <v-app-bar app :color="appBarColor" :dark="appBarDark" :clipped-left="clipped">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-italic">{{ appBarTitle }}</v-toolbar-title>
      
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'CustomNavbar',
    data() {
      return {
        drawer: false,
        clipped: false,
        items: [
          { title: 'Home', path: '/', icon: 'mdi-home' },
          { title: 'Contactanos', path: '/contact', icon: 'mdi-email' },
          { title: 'Sobre nosotros', path: '/about', icon: 'mdi-information' },
          // Agrega más elementos del menú según tus necesidades
        ],
        itemrout: {
          path1: '/form-view',
          path2: '/login',
        },
        appBarColor: '#0D47A1',
        appBarDark: true,
        appBarTitle: 'ESAM Escuela De Negocios',
      };
    },
  };
  </script>
  
  <style scoped>
  .v-navigation-drawer {
    background-color: #0D47A1;
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
    background-color: #0D47A1;
    color: white;
  }
  </style>
  