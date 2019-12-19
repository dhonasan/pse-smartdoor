<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <h2>Hello, {{user}}</h2>
    <h3>Status: Door {{lock_status}}</h3>
    <b-button @click="change_lock">{{lock_open_close}} Door</b-button>
  </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../main';

var loggedUser = firebase.auth().currentUser;

export default {
  name: 'dashboard',
  data(){
    return {
      user: loggedUser.email,
      lock_status: '',
      lock_open_close: ''
    }
  },
  created: function(){
    this.check_lock();
  },    
  methods: {
    change_lock: function(){
      if(this.lock_status == 'Locked'){
        db.collection('smartdoor').doc('status').set({
          locked: false
        })
      } else {
        db.collection('smartdoor').doc('status').set({
          locked: true
        })
      }
      this.check_lock();
    },
    check_lock: function(){
      db.collection('smartdoor').doc('status').get().then(doc =>{
        if(doc.data().locked){
          this.lock_status = 'Locked';
          this.lock_open_close = 'Open';
        } else {
          this.lock_status = 'Unlocked';
          this.lock_open_close = 'Close';
        }
      })
    }
  }
}
</script>