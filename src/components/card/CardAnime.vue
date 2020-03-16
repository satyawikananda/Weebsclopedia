<template>
  <v-card max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="image"
      :lazy-src="image"
      contain
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-title class="text-black"> {{ title }} </v-card-title>

    <v-card-text class="text--primary">
      {{ content }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="cyan darken-2" text :to="route">
        Read more
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="like = !like">
        <v-icon>{{ like ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    image: String,
    title: String,
    content: String,
    route: Object
  },
  data() {
    return {
      like: false
    };
  }
};
</script>
