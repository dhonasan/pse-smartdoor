<template>
  <div class="login">
    <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="email">Email</label>
        <input type="email" v-model="email" name="email" placeholder="E-mail" required>

        <label for="password">Password</label>
        <input type="password" v-model="password" name="password" placeholder="Password" required>
        
        <button>Login</button>
      </form>
      <h2>Don't have an account? <router-link to="signup">Sign Up</router-link></h2>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'login',
    data(){
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          () => {
            this.$router.push('dashboard');
            // alert(firebase.auth().currentUser.email);
          },
          (err) => {
            alert('Error! ' + err.message);
          }
        );
      }
    }
  }
</script>