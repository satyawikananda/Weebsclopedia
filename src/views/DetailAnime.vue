<template>
  <section id="sectionDetailAnime">
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md5 xs12>
          <card-detail-anime
            :imageAnime="data.image_url"
            :titleAnime="data.title"
            :titleEnglish="data.title_english"
          >
          </card-detail-anime>
        </v-flex>
        <v-flex md7 xs12>
          <v-row>
            <v-col cols="6" class="mx-auto" md="4" sm="6">
              <card-rates title="Popularity" :value="data.popularity" />
            </v-col>
            <v-col cols="6" class="mx-auto" md="4" sm="6">
              <card-rates
                title="Rank"
                :value="data.rank == null ? 'N/a' : data.rank"
              />
            </v-col>
            <v-col cols="12" class="mx-auto" md="4" sm="12">
              <card-rates title="Favorite" :value="data.fav" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="mx-auto" md="12" sm="12">
              <card-synopsis :synopsis="data.synopsis" />
            </v-col>
            <v-col cols="12" class="mx-auto" md="12" sm="12">
              <card-chara :nameAnime="data.title" />
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script>
import cardDetailAnime from "@/components/card/CardDetailAnime.vue";
import cardRates from "@/components/card/CardRates.vue";
import cardSynopsis from "@/components/card/CardSynopsis.vue";
import cardChara from "@/components/card/CardCharacter.vue";
import { getDetail, getChara } from "@/mixins/getDetailAnime.js";
export default {
  mixins: [getDetail, getChara],
  name: "DetailAnime",
  components: {
    "card-detail-anime": cardDetailAnime,
    "card-rates": cardRates,
    "card-synopsis": cardSynopsis,
    "card-chara": cardChara
  },
  data() {
    return {
      type: "anime",
      data: {
        image_url: "",
        title: "",
        title_english: "",
        score: "",
        rank: "",
        popularity: "",
        fav: "",
        synopsis: ""
      }
    };
  }
};
</script>
