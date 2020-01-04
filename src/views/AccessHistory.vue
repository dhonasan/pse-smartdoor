<template>
  <div class="access-history">
    <h1 class="py-1">Access History</h1>
    <b-pagination align="center" v-model="currentPage" :total-rows="rows"
    :per-page="perPage" aria-controls="historyTable"></b-pagination>
    <!-- <p>Filter:</p>
    <b-button @click="show_today = false">All</b-button>
    <b-button @click="show_today = true" variant="success">Today</b-button> -->
    <b-table id="historyTable" striped hover :items="items" :per-page="perPage" :current-page="currentPage"></b-table>
  </div>
</template>

<script>
import { db } from '../main';

export default {
  name: 'access-history',
  data() {
    return {
      // sortBy: '',
      // fields: [
      //     { key: 'time', sortable: false },
      //     { key: 'opened_by', sortable: true },
      // ],
      items: [
        // { time: '00.00', opened_by: 'Loading' },
      ],
      currentPage: 1,
      perPage: 20,
      show_today: false
    }
  },
  computed: {
    rows(){
      if(!this.show_today){
        return this.items.length
      }else{
        return 10
      }
    }
  },
  created: function() {
    db.collection('access_history').orderBy('time').onSnapshot(col => {
      col.docChanges().forEach(changes => {
        this.items.unshift({
          "time": new Date(changes.doc.data().time.seconds * 1000).toLocaleString(),
          "opened_by": changes.doc.data().openedBy
          });
      })
    })
  },
}
</script>

<style>

</style>