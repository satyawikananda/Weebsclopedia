<template>
  <v-card max-width="600">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="image"
      :lazy-src="image"
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
      <v-btn color="cyan darken-2" text>
        Read more
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    image: String,
    title: String,
    content: String
  }
};
</script>
