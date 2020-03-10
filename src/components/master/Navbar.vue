<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://firebasestorage.googleapis.com/v0/b/weebsclopedia.appspot.com/o/img%2F001.png?alt=media&token=51063fad-a321-45bb-9e6b-d7fe2ac43d5f"
        transition="scale-transition"
        width="40"
      />

      <h5 class="title font-weight-regular">Weebsclopedia</h5>
    </div>

    <v-spacer></v-spacer>
    <span class="subtitle-1 font-weight-regular mr-5">Anime</span>
    <span class="subtitle-1 font-weight-regular">Manga</span>
    <v-spacer></v-spacer>

    <div class="mr-4">
      <login title="Login" />
    </div>
    <div class="mr-4">
      <register title="Register" />
    </div>
  </v-app-bar>
</template>
<script>
import register from "../modal/ModalRegister.vue";
import login from "../modal/ModalLogin.vue";
export default {
  components: {
    login: login,
    register: register
  }
};
</script>
