<template>
  <div class="signup">
    <h1>Sign Up</h1>
    <b-form @submit.prevent="signup">
      <b-form-group label="E-mail address">
        <b-form-input type="email" v-model="email" name="email" placeholder="E-mail" required></b-form-input>
      </b-form-group>
      <b-form-group label="Password">
        <b-form-input type="password" v-model="password" name="password" placeholder="Password" required></b-form-input>
      </b-form-group>        
      <b-button block type="submit">Sign Up</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'signup',
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
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
.signup{
  width: 75vw;
  max-width: 500px;
  margin: auto;
}
</style>