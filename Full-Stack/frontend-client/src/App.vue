<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <span
        v-show="loggedIn"
        class="text-caption white--text text--darken-1"
      >signed in as <br> <span class="text-subtitle-2 font-italic">{{ userName }}</span></span>

      <v-spacer></v-spacer>

      <v-btn
        v-show="!loggedIn"
        @click="signup"
        color="green darken-2"
      >
        sign up
      </v-btn>

    </v-app-bar>

    <v-main>
      <HelloWorld v-if="loggedIn" />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  }),

  computed: {
    ...mapState(["loggedIn", "userName"])
  },

  methods: {
    ...mapActions(["signup"])
  }
};
</script>
