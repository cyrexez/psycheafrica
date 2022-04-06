<template>
<JoinUs/>
<div class="footer">
  <div class="flex">
    <p> All rights reserved</p> <img src="../assets/img/bi_linkedin.png"><img src="../assets/img/fa-brands_twitter.png"><img src="../assets/img/facebook.png">
  </div>
</div>

</template>

<script>
import JoinUs from '../components/JoinUs.vue' 
export default {
  name: 'Footer',
  components: {JoinUs},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
