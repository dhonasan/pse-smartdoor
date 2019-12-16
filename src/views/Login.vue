<template>
  <div class="login">
    <h1>Login</h1>
    <b-form @submit.prevent="login">
      <b-form-group label="E-mail address">
        <b-form-input type="email" v-model="email" name="email" placeholder="E-mail" required></b-form-input>
      </b-form-group>
      <b-form-group label="Password">
        <b-form-input type="password" v-model="password" name="password" placeholder="Password" required></b-form-input>
      </b-form-group>
      <b-button block type="submit">Login</b-button>
    </b-form>
    <p>Don't have an account? <router-link to="signup">Sign Up</router-link></p>
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
        },
        (err) => {
          alert('Error! ' + err.message);
        }
      );
    }
  }
}
</script>

<style>
.login {
  width: 75vw;
  max-width: 500px;
  margin: auto;
}

.form-group, p {
  margin: 20px 0;
}
</style>