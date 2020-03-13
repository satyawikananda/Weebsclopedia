<template>
  <section id="section3">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="12" lg="12">
          <div class="text-center">
            <h1 class="text-black display-2 font-weight-light mb-3">
              Top 10 Anime
            </h1>
            <span class="subtitle-1 font-weight-light"
              >This is the top 10 anime airing in this season, is there any of
              your favorite anime included in the ranking?</span
            >
            <v-divider />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="12" md="12" sm="12">
          <v-sheet class="mx-auto mt-5" elevation="8" max-width="900">
            <v-slide-group class="pa-4" multiple show-arrows>
              <v-slide-item v-for="(data, index) in datas" :key="index">
                <card-top-anime
                  :title="data.title"
                  :image="data.image_url"
                  :rank="data.rank"
                />
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import CardTopAnime from "@/components/card/CardTopAnime.vue";
import { dataTopTen } from "@/mixins/getTopTen.js";
export default {
  mixins: [dataTopTen],
  components: {
    "card-top-anime": CardTopAnime
  },
  data() {
    return {
      datas: [],
      type: "anime",
      subtype: "airing"
    };
  }
};
</script>
