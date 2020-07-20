import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.cyan.lighten1,
        secondary: colors.cyan.darken1,
        accent: colors.grey.lighten2
      }
    }
  }
});
