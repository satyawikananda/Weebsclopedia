<template>
  <section>
    <v-parallax :src="sectionOne.src" height="650">
      <v-layout column align-center justify-center>
        <h3 class="display-4 font-weight-reguler">{{ sectionOne.title }}</h3>
        <h3 class="title mt-5 font-weight-light">
          {{ sectionOne.subtitle }}
        </h3>
        <v-btn class="mt-10" x-large outlined color="primary">{{
          sectionOne.btn
        }}</v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>
<script>
export default {
  data() {
    return {
      sectionOne: {
        src:
          "https://firebasestorage.googleapis.com/v0/b/weebsclopedia.appspot.com/o/img%2F1006752.png?alt=media&token=de851af6-b841-45c9-be9c-468bb59b0b6f",
        title: "Weebsclopedia",
        subtitle: "Find and search your favorite anime and manga",
        btn: "Explore now"
      }
    };
  }
};
</script>
