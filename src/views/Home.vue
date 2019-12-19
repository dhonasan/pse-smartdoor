<template>
  <div class="home">
    <h1>Smart Door</h1>
    <h2>A <i>smarter</i> door for you</h2>
  </div>
</template>

<script>

export default {
  name: 'home',
  // created: function() {
  //   if(this.$route.name == 'home'){
  //     document.body.className = 'home';
  //   }
  //   else{
  //     document.body.className = '';
  //   }
  // },
}
</script>

<style>
h2 {
  font-size: 20px;
}

body, html{
  height: 100%;
}

/* body.home {
  background-image: url("../assets/smartdoor_bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */
</style>