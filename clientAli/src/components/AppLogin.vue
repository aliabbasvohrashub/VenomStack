<template>
  <div>
    <v-container>
      <v-alert type="warning" :value="alert">
        Please fill email and password
      </v-alert>
      <v-form @submit.prevent="submit" v-model="valid">
          <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          ></v-text-field>
           <v-text-field
          v-model="password"
          :rules="passwordRules"
          :counter="10"
          type="password"
          label="Password"
          required
          ></v-text-field>
          <v-btn color="info" @click="btnloginClicked">Login</v-btn>
          <v-btn class="success" type="submit">Submit</v-btn>
      </v-form>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    alert: false,
    valid: false,
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 10 || 'Password must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    btnloginClicked () {
      alert('hi')
    },
    submit () {
      if (!this.email && !this.password) {
        this.alert = true
        return
      }
      console.log('The name: ' + this.email + ' and password: ' + this.password)
      this.$router.push({ path: '/apphome' })
    }
  }
}
</script>
