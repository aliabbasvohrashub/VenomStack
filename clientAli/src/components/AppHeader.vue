<template>
  <v-toolbar color="pink lighten-1" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="black--text">MyWebsite</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <!-- <v-btn flat>About</v-btn>
      <v-btn flat>Contact</v-btn>
      <v-btn flat>Login</v-btn> -->
      <router-link to="/apphome"><v-btn flat>Home</v-btn></router-link>
      <router-link to="/about"><v-btn flat>About</v-btn></router-link>
      <router-link to="/contact"><v-btn flat>Contact</v-btn></router-link>
      <router-link to="/applogin"><v-btn flat>Login</v-btn></router-link>
    </div>
  </v-toolbar>
</template>
