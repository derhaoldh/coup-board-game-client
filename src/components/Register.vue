<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Registration Form</v-toolbar-title>
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
                  <v-text-field
                    v-model="password"
                    label="password"
                    name="password"
                    prepend-icon="mdi-account-key"
                    type="password"
                    counter
                    :rules="[rules.required, rules.counter]"
                    solo
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    label="email"
                    name="email"
                    prepend-icon="mdi-email"
                    type="text"
                    :rules="[rules.required, rules.email]"
                    solo
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="reset()" color="primary">Reset</v-btn>
                <v-btn color="primary">Submit</v-btn>
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
  name: "Register",
  data: function () {
    return {
      username: "",
      email: "",
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (value) =>
          value.length > 4 || "Please use a username of at least 5 characters",
        counter: (value) => value.length <= 20 || "Max 20 characters",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    register: function () {
      this.$http
        .post("http://localhost:3000/register", {
          username: this.username,
        })
        .then((response) => document.write(response.data))
        .catch((error) => console.log(error));
    },
    reset: function () {
      this.username = "";
      this.email = "";
      this.password = "";
    },
  },
  computed: {
    isButtonDisabled() {
      return this.username.length <= 4;
    },
  },
};
</script>
