<template>
  <v-app>
    <navbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import navbar from "./components/master/Navbar.vue";
export default {
  name: "App",
  components: {
    navbar: navbar
  },
  data: () => ({
    //
  })
};
</script>
