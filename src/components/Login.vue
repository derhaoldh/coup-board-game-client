<template>
  <!-- <v-app-bar color="primary">
            <v-toolbar-title color="primary">
              Coup-Multiplayer Game
            </v-toolbar-title>
  </v-app-bar>-->
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    name="username"
                    prepend-icon="mdi-account"
                    type="text"
                    :rules="[rules.required, rules.counter, rules.min]"
                    solo
                    counter
                    maxlength="20"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="$router.push('register')">Register</v-btn>
                <v-btn
                  :disabled="isButtonDisabled"
                  @click.once="register(username)"
                  color="primary"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data: function () {
    return {
      username: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (value) =>
          value.length > 4 || "Please use a username of at least 5 characters",
        counter: (value) => value.length <= 20 || "Max 20 characters",
      },
    };
  },
  methods: {
    login: function () {
      console.log(this.username);
      this.$http
        .post("http://localhost:3000/register", {
          username: this.username,
        })
        .then((response) => document.write(response.data))
        .catch((error) => console.log(error));
    },
  },
  computed: {
    isButtonDisabled() {
      return this.username.length <= 4;
    },
  },
};
</script>
