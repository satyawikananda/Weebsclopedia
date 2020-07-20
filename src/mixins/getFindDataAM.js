import { API_URL } from "@/const.js";
export const dataCardSearch = {
  inject: ["theme"],
  data() {
    return {
      firstLoad: true,
      loading: true,
      boilerplate: true,
      page: 1,
      limit: 1,
      search: ""
    };
  },
  methods: {
    async getSearch() {
      try {
        this.boilerplate = false;
        this.loading = true;
        const { data } = await this.$http.request({
          method: "GET",
          url: `${API_URL}search/` + this.type,
          params: {
            page: this.page,
            limit: this.limit,
            q: this.search
          }
        });
        this.datas = data.results;
        this.loading = false;
        this.firstLoad = false;
      } catch (err) {
        this.boilerplate = false;
        throw new err();
      }
    }
  }
};
