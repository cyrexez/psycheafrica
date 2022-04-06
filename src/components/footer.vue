<template>
<JoinUs/>
<div class="footer">
  <div class="">
    <p>  {{ year }} All rights reserved</p>
    <div>  
      <img src="../assets/img/bi_linkedin.png">
      <img src="../assets/img/fa-brands_twitter.png">
      <img src="../assets/img/facebook.png">
    </div>
  </div>
</div>

</template>

<script>
import JoinUs from '../components/JoinUs.vue' 
export default {
  components: {JoinUs},
  props: {
    msg: String
  },
  setup() {
    const Year = new Date();
    Year.getFullYear();
    return { year }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
