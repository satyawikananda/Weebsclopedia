import { API_URL } from "@/const.js";
export const getDetail = {
  data() {
    return {
      idInfo: this.$route.params.id
    };
  },
  methods: {
    async getData() {
      try {
        const { data } = await this.$http.request({
          method: "GET",
          url: `${API_URL}anime/` + this.idInfo
        });
        this.data.image_url = data.image_url;
        this.data.title = data.title;
        this.data.title_english = data.title_english;
        this.data.type = data.type;
        this.data.source = data.source;
        this.data.status = data.status;
        this.data.duration = data.duration;
        this.data.aired = data.aired.string;
        this.data.score = parseFloat(data.float);
        this.data.rank = parseInt(data.rank);
        this.data.popularity = parseInt(data.popularity);
        this.data.fav = parseInt(data.favorites);
        this.data.synopsis = data.synopsis;
        this.data.episodes = parseInt(data.episodes);
      } catch (err) {
        throw new err();
      }
    }
  },
  created() {
    this.getData();
  }
};
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
        this.datas = data.characters;
      } catch (err) {
        throw new err();
      }
    }
  },
  created() {
    this.getChara();
  }
};
