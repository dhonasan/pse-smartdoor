<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <h2>Hello, {{user}}</h2>
    <h3>Status: Door {{lock_status}}</h3>
    <b-button>{{lock_open_close}} Door</b-button>
  </div>
</template>

<script>
  import firebase from 'firebase';

  var loggedUser = firebase.auth().currentUser;
  export default {
    name: 'login',
    data(){
      return {
        user: loggedUser.email,
        lock_status: '',
        lock_open_close: 'Open'
      }
    },
    methods: {
    }
  }
</script>