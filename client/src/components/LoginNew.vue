<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Login to Globomantics</h2>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
          label="E-mail"
          v-model="email"
          v-bind:rules="emailRules"
          required>
        </v-text-field>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
          label="Password"
          v-model="password"
          v-bind:rules="passwordRules"
          v-bind:type="'password'"
          required>
        </v-text-field>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn v-on:click="cancel">Cancel</v-btn>
        <v-btn color="primary" v-on:click="login">Login</v-btn>
      </v-flex>
    </v-layout>
    <v-snackbar
      :timeout="6000"
      :top="true"
      v-model="showAlert"
    >
      {{ loginErrorNew }}
      <v-btn flat color="pink" v-on:click="showAlert = false">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      showAlert: false,
      message: '',
      email: 'a@a.com',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: 'ali',
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  computed: {
    isLoggedInNew () {
      return this.$store.getters['usernew/isLoggedInNew']
    },
    loginErrorNew () {
      return this.$store.getters['usernew/loginErrorNew']
    }
  },
  methods: {
    login: function () {
      const vm = this
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('usernew/loginUserNew', payload)
        .then(() => {
          // var userLoggedIn = vm.isLoggedInNew == null ? this.$store.getters['usernew/isLoggedInNew'] : vm.isLoggedInNew
          if (vm.isLoggedInNew) {
            this.$router.push({ path: '/' })
          } else {
            vm.showAlert = true
          }
        })
    },
    cancel: function () {
      console.log('The user does not want to login!')
    }
  }
}
</script>

<style>

</style>
