<template>
  <div id="notFound">
    <h1>Sorry <font-awesome-icon :icon="['far', 'frown']"/></h1>
    <p>The page you are looking for does not exist.</p>
    <b-button variant="success" @click="goBack" class="mr-3"><font-awesome-icon icon="arrow-left"/> Back</b-button>
    <b-button variant="primary" to="/"><font-awesome-icon icon="home"/> Home</b-button>
  </div>
</template>

<script>
export default {
  name: 'notFound',
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
}
</script>
