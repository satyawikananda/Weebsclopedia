<template>
  <section>
    <v-parallax :src="sectionOne.src" height="650">
      <v-layout column align-center justify-center>
        <v-img
          alt="Weebsclopedia Logo"
          class="shrink mr-2"
          contain
          :src="sectionOne.logo"
          transition="scale-transition"
          width="150"
        />
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
        btn: "Explore now",
        logo:
          "https://firebasestorage.googleapis.com/v0/b/weebsclopedia.appspot.com/o/img%2F001.png?alt=media&token=51063fad-a321-45bb-9e6b-d7fe2ac43d5f"
      }
    };
  }
};
</script>
