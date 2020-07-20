import { API_URL } from "@/const.js";
export const dataTopTen = {
  data() {
    return {
      page: 1
    };
  },
  methods: {
    async getData() {
      try {
        const { data } = await this.$http.request({
          method: "GET",
          url:
            `${API_URL}top/` + this.type + "/" + this.page + "/" + this.subtype,
          json: true
        });
        this.datas = data.top.slice(0, 10);
      } catch (err) {
        throw new err();
      }
    }
  },
  created() {
    this.getData();
  }
};
