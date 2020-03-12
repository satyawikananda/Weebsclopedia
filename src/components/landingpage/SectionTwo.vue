<template>
  <section id="sectionTwo">
    <v-row no-gutters>
      <v-col
        cols="12"
        md="12"
        sm="12"
        lg="5"
        id="bg-sectionTwo"
        :style="{ backgroundColor: '#0288D1', padding: '50px' }"
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
                  Find Your Anime
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
                  placeholder="Search anime"
                  solo
                  rounded
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
              This is the result
            </h3>
            <v-row no-gutters>
              <v-col cols="12" sm="12" md="12" lg="6" class="mx-auto mt-5">
                <card-anime
                  :image="data.image"
                  :title="data.title"
                  :content="data.content"
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
export default {
  data() {
    return {
      data: {
        image:
          "https://cdn.myanimelist.net/images/anime/1694/104929.jpg?s=f5f4c91024fb648f756a10c0a78ccb06",
        title: "Haikyuu!!: To the Top",
        content:
          "With Karasuno High School preparing for the Spring Nationals, enthusiasm and tension are high among the team. However, when Kageyama is invited to the All-Japan Youth Training Camp, and Tsukishima is..."
      }
    };
  },
  components: {
    "card-anime": cardAnime
  }
};
</script>
