import { API_URL } from "@/const.js";
export const getChara = {
  data() {
    return {
      endpoint: "characters_staff",
      idAnime: this.$route.params.id
    };
  },
  methods: {
    async getChara() {
      try {
        const { data } = await this.$http.request({
          method: "GET",
          url: `${API_URL}anime/` + this.idAnime + "/" + this.endpoint
        });
        console.log(data);
      } catch (err) {
        throw new err();
      }
    }
  },
  created() {
    this.getChara();
  }
};
