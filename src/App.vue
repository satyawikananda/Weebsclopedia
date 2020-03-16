<template>
  <v-app id="root">
    <navbar />
    <v-content>
      <vue-page-transition name="overlay-right-full">
        <router-view />
      </vue-page-transition>
    </v-content>
    <footers />
  </v-app>
</template>
<style>
.overlay-up,
.overlay-bottom,
.overlay-right,
.overlay-left {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/weebsclopedia.appspot.com/o/img%2F943209.png?alt=media&token=aa067c0d-d165-4e9f-ae86-704ae1036389") !important;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
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
