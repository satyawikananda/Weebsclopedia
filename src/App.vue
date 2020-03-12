<template>
  <v-app id="root">
    <navbar />
    <v-content>
      <router-view />
    </v-content>
    <footers />
  </v-app>
</template>

<script>
import footer from "./components/master/Footer.vue";
import navbar from "./components/master/Navbar.vue";
export default {
  name: "App",
  components: {
    navbar,
    footers: footer
  },
  data: () => ({
    //
  })
};
</script>
