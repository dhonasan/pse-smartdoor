<template>
  <div class="settings">
    <h1>Settings</h1>
    <hr/>
    <h2>Door Settings</h2>
    <b-alert :show="msg" dismissible fade :variant="msgVariant">{{msg}}</b-alert>
    <b-form-group label="Change Door Pin (8 Numbers)">
      <b-form-input type="number" v-model="pin" placeholder="Pin"></b-form-input>
      <b-button variant="primary" @click="changePin">Change Door Pin</b-button>
    </b-form-group>

  </div>
</template>

<script>
import { db } from '../main'
export default {
  name: 'settings',
  data(){
    return {
      pin: '',
      msg: false,
      msgVariant: ''
    }
  },
  methods: {
    changePin() {
      if(this.pin.length == 8 && this.pin != ''){
        db.collection('smartdoor').doc('password').set({
          pin: this.pin
        }, {merge: true});
        this.msgVariant = 'success';
        this.msg = 'Pin successfully changed!';
      } else {
        this.msgVariant = 'danger';
        this.msg = 'Your new pin should have 8 numbers!';
      }
    }
  }

}
</script>

<style>

</style>