<template>
  <v-app-bar app color="primary" dark inverted-scroll>
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

    <template v-if="user.loggedIn">
      <v-toolbar-items>
        <v-btn v-for="item in menu" :key="item.key" text large>{{
          item.title
        }}</v-btn>
        <v-btn text large>
          {{ user.data.displayName }}
        </v-btn>
        <v-btn text large @click.prevent="logout">
          Sign Out
        </v-btn>
      </v-toolbar-items>
    </template>

    <template v-else>
      <v-toolbar-items>
        <v-btn v-for="item in menu" :key="item.key" text large>{{
          item.title
        }}</v-btn>
        <login title="Login" />
        <register title="Register" />
      </v-toolbar-items>
    </template>
  </v-app-bar>
</template>
<script>
import register from "../modal/ModalRegister.vue";
import login from "../modal/ModalLogin.vue";
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  data() {
    return {
      menu: [
        {
          title: "Anime",
          link: "/",
          key: "anime"
        },
        {
          title: "Manga",
          link: "/",
          key: "manga"
        }
      ]
    };
  },
  components: {
    login: login,
    register: register
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Homepage"
          });
        });
    }
  }
};
</script>
