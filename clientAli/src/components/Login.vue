<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
        <v-flex xs12>
            <h2>Login to Globomantics</h2>
        </v-flex>
        <v-space></v-space>
        <v-flex xs12 sm6 offset-sm3>
            <v-text-field
                label="Email"
                v-model="email"
                v-bind:rules="emailRules"
                required>
            </v-text-field>
            <v-text-field
                label="Password"
                v-model="password"
                v-bind:type="'password'"
                v-bind:rules="passwordRules"
                required>
            </v-text-field>
        </v-flex>
        <v-flex>
            <v-btn v-on:click="cancel">Cancel</v-btn>
            <v-btn color="primary" v-on:click="login">Login</v-btn>
        </v-flex>
      <!-- <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 2" :key="`6${i}`" xs6>
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 3" :key="`4${i}`" xs4>
        <v-card dark color="primary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card dark color="secondary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 6" :key="`2${i}`" xs2>
        <v-card dark color="primary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 12" :key="`1${i}`" xs1>
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex> -->
    </v-layout>
    <v-snackbar
        :timeout="6000"
        :top="true"
        v-model="showAlert"
    >
    {{ message }}
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
        v => !!v || 'Email is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: 'ali',
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  methods: {
    login: function () {
      const vm = this
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('logInUser', payload)
        .then(() => {
          if (vm.isLoggedIn) {
            this.$router.push({ path: '/' })
          } else {
          // show alert on a component
            vm.showAlert = true
            vm.message = 'Login failed'
          }
        })
      // if (vm.password === 'ali') {
      //   this.$router.push({ path: '/' })
      // } else {
      //   // show alert on a component
      //   vm.showAlert = true
      //   vm.message = 'Login failed'
      // }
    },
    cancel: function () {
      const vm = this
      vm.showAlert = true
      vm.message = 'you clicked cancel'
    }
  }
}
</script>
