<template>
  <div class="access-history">
    <h1 class="py-1">Access History</h1>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
import { db } from '../main';

export default {
  name: 'access-history',
  data() {
    return {
      items: [
        // { time: '00.00', opened_by: 'Loading' },
      ]
    }
  },
  created: function() {
    db.collection('access_history').onSnapshot(col => {
      col.forEach(doc => {
        this.items.unshift({
          "time": new Date(doc.data().time.seconds * 1000).toLocaleString(),
          "opened_by": doc.data().openedBy
          });
      })
    })
  }

}
</script>

<style>

</style>