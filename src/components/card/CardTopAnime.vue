<template>
  <v-card class="ma-4" max-width="400">
    <v-img :src="image" :lazy-src="image" height="200px" contain>
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle class="font-weight-bold text-black">
      Rank: {{ rank }}
    </v-card-subtitle>

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
    rank: Number,
    route: Object
  },
  data() {
    return {
      like: false
    };
  }
};
</script>
