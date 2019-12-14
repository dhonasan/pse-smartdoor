<template>
  <div class="signup">
    <h1>Sign Up</h1>
      <form @submit.prevent="signup">
        <label for="name">Name</label>
        <input type="text" v-model="name" name="name" placeholder="Your Name" required>

        <label for="email">Email</label>
        <input type="email" v-model="email" name="email" placeholder="E-mail" required>

        <label for="password">Password</label>
        <input type="password" v-model="password" name="password" placeholder="Password" required>
        
        <button>Sign Up</button>
      </form>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'signup',
    data(){
      return {
        name: '',
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