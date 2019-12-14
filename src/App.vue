<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="check_auth()" to="/">Dashboard</router-link>
      <router-link v-if="!check_auth()" to="/login">Login</router-link>
      <router-link v-if="check_auth()" to="/logout">Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'app',
    data(){
      return {
        login_state: 'a',
      }
    },
    // created: function() {
    //   if(firebase.auth().currentUser==null){
    //     this.login_state = 'Login'
    //   } else {
    //     this.login_state = 'Logout'
    //   }
    // },
    methods: {
      check_auth: function() {
        return firebase.auth().currentUser != null
      },
      logout: function() {
        firebase.auth().signOut().then(
          () => {
            alert('You are logged out');
            this.$router.push('home');
          },
          (err) => {
            alert('Error' + err);
            this.$router.push('home');
          })
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
