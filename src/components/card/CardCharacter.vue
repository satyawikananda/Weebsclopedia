<template>
  <v-card shaped elevation="6">
    <v-list shaped rounded two-line>
      <v-subheader class="title font-reguler text-black"
        >Character anime {{ nameAnime }}</v-subheader
      >
      <v-divider class="mt-1 mb-2 mx-auto" style="width:95%;" />
      <v-list-item-group color="primary">
        <v-list-item v-for="(chara, index) in datas" :key="index">
          <v-list-item-avatar>
            <v-img :src="chara.image_url" :lazy-src="chara.image_url" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span class="subtitle-1 font-weight-reguler">{{
                chara.name
              }}</span>
            </v-list-item-title>
            <v-list-item-content>
              <span class="subtitle-2 font-weight-bold"
                >Role: {{ chara.role }}</span
              >
            </v-list-item-content>
          </v-list-item-content>
          <v-spacer />
          <v-btn icon @click="like = !like">
            <v-icon>{{ like ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
          </v-btn>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
import { getChara } from "@/mixins/getDetailAnime.js";
export default {
  mixins: [getChara],
  props: {
    nameAnime: String
  },
  data() {
    return {
      datas: [],
      like: false
    };
  }
};
</script>
