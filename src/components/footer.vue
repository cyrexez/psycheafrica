<template>
<JoinUs/>
<div class="footer">
  <div>
    <p>2022 Psyche Africa . All rights reserved</p>
  </div>
    <div class="socials">  
     <a href=""><img src="../assets/img/bi_linkedin.png"></a>
     <a href=""><img src="../assets/img/fa-brands_twitter.png"></a>
     <a href=""><img src="../assets/img/facebook.png"></a>
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
  .socials img {
    margin: 10px 6px 0;    
  }
   @media screen and (max-width: 768px) {
        .footer {
            padding: 10px;
        }
    }
    @media screen and (max-width: 576px) {
        .footer {
            padding: 10px 5px;
            flex-direction: column;
        }
    }
</style>
