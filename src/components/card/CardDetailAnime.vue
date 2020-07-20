<template>
  <v-sheet max-width="400" elevation="6" class="pb-5 pa-2">
    <div class="d-flex justify-center mt-5">
      <div class="text-center mt-3">
        <v-avatar size="105">
          <v-img :src="imageAnime" :lazy-src="imageAnime" />
        </v-avatar>
        <h4 class="text-grey headline mt-3">{{ titleAnime }}</h4>
        <span class="text-grey subtitle-1 font-weight-light mt-1 d-block">{{
          titleEnglish
        }}</span>
        <span>Like this anime</span>
        <v-btn icon @click="like = !like">
          <v-icon>{{ like ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
        </v-btn>
      </div>
    </div>
    <list-detail title="Type" :detail="data.type" />
    <list-detail title="Source" :detail="data.source" />
    <list-detail title="Status" :detail="data.status" />
    <list-detail title="Episodes" :detail="data.episodes" />
    <list-detail title="Duration" :detail="data.duration" />
    <list-detail title="Aired" :detail="data.aired" />
  </v-sheet>
</template>
<script>
import listDetail from "@/components/list/ListSpecificAnime.vue";
import { getDetail } from "@/mixins/getDetailAnime.js";
export default {
  mixins: [getDetail],
  props: {
    imageAnime: String,
    titleAnime: String,
    titleEnglish: String
  },
  data() {
    return {
      like: false,
      data: {
        type: "",
        source: "",
        status: "",
        episodes: "",
        duration: "",
        aired: ""
      }
    };
  },
  components: {
    "list-detail": listDetail
  }
};
</script>
