<template>
  <b-container id="app">
    <b-navbar id="nav" toggleable="md" type="light" variant="light" class="mb-4">
      <b-navbar-brand to="/">Smart Door</b-navbar-brand>
      <b-navbar-toggle v-if="check_auth()" target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Left -->
        <b-navbar-nav v-if="check_auth()">
          <b-nav-item to="/dashboard">Dashboard</b-nav-item>
          <b-nav-item to="/dashboard/access-history">Access History</b-nav-item>
        </b-navbar-nav>
        <!-- Right -->
        <b-navbar-nav v-if="check_auth()" class="ml-auto">
          <b-nav-item-dropdown :text="User">
            <b-dropdown-item to="/dashboard/settings">Settings</b-dropdown-item>
            <b-dropdown-item @click.prevent="logout" href="/logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
      <b-btn variant="outline-secondary" v-if="!check_auth()" to="/login">Login</b-btn>
    </b-navbar>
    <router-view/>
  </b-container>
</template>

<script>
import firebase from 'firebase'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

export default {
  name: 'app',
  data(){
    return {
      User: 'Loading'
    }
  },
  created: function() {
    if (this.check_auth()) {
      this.User = firebase.auth().currentUser.email
    }
  },
  methods: {
    check_auth: function() {
      return firebase.auth().currentUser != null;
    },
    logout: function() {
      firebase.auth().signOut().then(
        () => {
          alert('You are logged out');
          this.$router.push('/');
        });
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    // color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
