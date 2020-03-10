<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn text large color="#00838F" v-on="on">
        {{ title }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="title mx-auto font-weight-light"
          >W E E B S C L O P E D I A &nbsp; &nbsp; L O G I N</span
        >
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="1" md="12">
              <v-text-field
                label="Email*"
                type="email"
                v-model="form.email"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                label="Password*"
                type="password"
                v-model="form.password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row cols="6" sm="12" md="12" class="d-flex justify-center">
            <v-btn class="ma-2" outlined color="primary">Login now</v-btn>
            <v-btn class="ma-2" outlined color="red darken-1"
              >Login with Google</v-btn
            >
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
// import firebase from "firebase";
export default {
  props: {
    title: String
  },
  data() {
    return {
      dialog: false,
      form: {
        email: "",
        password: ""
      }
    };
  }
};
</script>
