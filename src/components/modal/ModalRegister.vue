<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn text large color="#00838F" v-on="on">
        {{ title }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <v-alert type="error" v-if="error" class="mx-auto">
          {{ error }}
        </v-alert>
        <span class="title mx-auto font-weight-light"
          >W E E B S C L O P E D I A &nbsp; &nbsp; &nbsp; &nbsp; R E G I S T E
          R</span
        >
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="12" sm="12">
              <v-text-field
                label="Your Name*"
                type="text"
                v-model="form.name"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" sm="12">
              <v-text-field
                label="Email*"
                type="email"
                v-model="form.email"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12" sm="12">
              <v-text-field
                label="Password*"
                type="password"
                v-model="form.password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row cols="6" sm="12" md="12" class="d-flex justify-center">
            <v-btn
              @click.prevent="submit"
              class="ma-2"
              outlined
              color="primary"
              :loading="isLoading ? true : false"
              >Register now</v-btn
            >
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import firebase from "firebase";
export default {
  props: {
    title: String
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      dialog: false,
      isLoading: false,
      error: ""
    };
  },
  methods: {
    async submit() {
      this.isLoading = true;
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          console.log(data);
          data.user.updateProfile({
            displayName: this.form.name
          });
          alert("Register was successfully!!");
        })
        .catch(err => {
          this.error = err;
          setTimeout(() => {
            this.error = "";
          }, 1000);
        });
      this.isLoading = false;
    }
  }
};
</script>
