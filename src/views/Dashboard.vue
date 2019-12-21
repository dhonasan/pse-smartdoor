<template>
  <div class="dashboard">
    <h1 class="py-1">Dashboard</h1>
    <h3 class="py-1">Status: <font-awesome-icon :icon="lock_icon" /> {{lock_status}}</h3>
    <b-button @click="change_lock" :variant="button_variant">{{lock_open_close}} Door</b-button>
  </div>
</template>

<script>
import { db } from '../main';

export default {
  name: 'dashboard',
  data(){
    return {
      lock_status: '',
      lock_open_close: '',
      button_variant: '',
      lock_icon: ''
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
          this.button_variant = 'success';
          this.lock_icon = 'lock';
        } else {
          this.lock_status = 'Unlocked';
          this.lock_open_close = 'Close';
          this.button_variant = 'danger';
          this.lock_icon = 'lock-open';
        }
      })
    }
  }
}
</script>