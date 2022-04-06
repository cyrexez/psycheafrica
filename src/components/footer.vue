<template>
<JoinUs/>
<div class="footer">
  <div>
    <p>{{ year }} 2022 Psyche Africa . All rights reserved</p>
  </div>
    <div>  
      <img src="../assets/img/bi_linkedin.png">
      <img src="../assets/img/fa-brands_twitter.png">
      <img src="../assets/img/facebook.png">
    </div>
</div>

</template>

<script>
import JoinUs from '../components/JoinUs.vue' 
export default {
  components: {JoinUs},
  // props: {
  //   msg: String
  // },
  // setup() {
  //   const Year = new Date();
  //   Year.getFullYear();
  //   return { year }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    border-top: 1px solid white;
    display: flex;
    justify-content: space-between;
    padding: 10px 80px;
  }
</style>
