<template>
  <div id="app">
    <v-app light>
      <v-navigation-drawer 
        fixed
        clipped
        app
        v-model="drawer"
      >
        <v-toolbar flat>
          <v-list>
              <v-list-tile>
              <v-list-tile-title class="title">
                MyWebsite
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>

        <v-list dense class="pt-0">
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to="item.path == '#' ? '' : item.path"
            :exact="item.exact"
            class="yellow--text"
            active-class="red--text"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="pink lighten-1" 
        app
        clipped-left
        fixed
        dark>
        <v-toolbar-side-icon  @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? '' : 'min-width: 72px'" class="ml-0 pl-3">MyWebsite</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <router-link to="/apphome"><v-btn flat>Home</v-btn></router-link>
          <router-link to="/about"><v-btn flat>About</v-btn></router-link>
          <router-link to="/contact"><v-btn flat>Contact</v-btn></router-link>
          <router-link to="/applogin"><v-btn flat>Login</v-btn></router-link>
        </div>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <!-- <app-header></app-header> -->
          <router-view></router-view>
          <app-footer></app-footer>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      drawer: null,
      clipped: true,
      items: [
        {
          action: 'home',
          title: 'Home',
          path: '/home',
          items: []
        },
        {
          action: 'restaurant',
          title: 'Breakfast',
          path: '/breakfast',
          items: [
            {
              action: 'meaat',
              title: 'Meat',
              path: '/meat',
              items: []
            },
            {
              action: 'meaat',
              title: 'Meat',
              path: '/meat',
              items: []
            }]
        },
        {
          action: 'meaat',
          title: 'Meat',
          path: '/meat',
          items: []
        },
        {
          action: 'sushi',
          title: 'Sushi',
          path: '/sushi',
          items: []
        }
      ]
    }
  }
}
</script>

<style>
@import 'vuetify/dist/vuetify.min.css';
@import 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons';
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
