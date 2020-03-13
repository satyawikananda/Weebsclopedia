<template>
  <section id="sectionFour">
    <v-row no-gutters>
      <v-col
        cols="12"
        md="12"
        sm="12"
        lg="5"
        id="bg-sectionTwo"
        :style="{ padding: '50px' }"
      >
        <v-container fluid>
          <v-layout column align-center justify-center>
            <v-row
              align="center"
              justify="space-around"
              class="d-flex justify-center align-center my-12"
            >
              <v-col cols="12" sm="12" md="12" lg="12">
                <h3
                  class="display-1 font-weight-reguler text-white text-center"
                >
                  Find Your Manga
                </h3>
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <p
                  class="body-1 font-weight-reguler text-white text-center m-5"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis a magni veritatis, illum officia ullam perspiciatis
                  aliquid repellat eveniet accusantium ut quam beatae, impedit
                  aliquam doloremque quis tenetur mollitia! Eum.
                </p>
              </v-col>
              <v-col cols="12" sm="8" md="8" class="mx-auto">
                <v-text-field
                  label="Solo"
                  placeholder="Example: Shokugeki no souma"
                  solo
                  rounded
                  v-model="search"
                  @keyup.enter="getSearch"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-layout>
        </v-container>
      </v-col>
      <v-col
        cols="12"
        md="12"
        sm="12"
        lg="7"
        :style="{ padding: '50px', backgroundColor: '#ecf0f1' }"
      >
        <v-container fluid>
          <v-layout column align-center justify-center>
            <h3 class="display-1 font-weight-reguler text-black text-center">
              Manga Search: {{ search }}
            </h3>
            <v-row no-gutters>
              <v-col cols="12" sm="12" md="12" lg="12" class="mx-auto mt-5">
                <v-sheet color="accent">
                  <v-skeleton-loader
                    type="card, article"
                    width="400"
                    :boilerplate="boilerplate"
                    v-if="firstLoad"
                    :loading="loading"
                  >
                  </v-skeleton-loader>
                </v-sheet>
                <card-anime
                  v-show="!firstLoad"
                  :loading="loading"
                  v-for="(data, index) in datas"
                  :key="index"
                  :image="data.image_url"
                  :title="data.title"
                  :content="data.synopsis"
                />
              </v-col>
            </v-row>
          </v-layout>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import cardAnime from "@/components/card/CardAnime.vue";
import { dataCardSearch } from "@/mixins/getFindDataAM.js";
export default {
  mixins: [dataCardSearch],
  data() {
    return {
      datas: [],
      type: "manga"
    };
  },
  components: {
    "card-anime": cardAnime
  }
};
</script>
