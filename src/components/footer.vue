<template>
<div class="footer">
<h2>Join Us Now!!!</h2>
<p>Be one of the first to know when we launch officially.</p>
<button class="bluebutton"> Get Early Access</button>
<div class="flex">
<p> All rights reserved</p> <img src="../assets/img/bi_linkedin.png"><img src="../assets/img/fa-brands_twitter.png"><img src="../assets/img/facebook.png">
</div>
</div>

</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.flex{
  display: grid;
  grid-template-columns: True;
}
.bluebutton{
  

justify-content: center;
align-items: center;
padding: 10px;


width: 140px;
height: 44px;


background: #0F5CA8;
border-radius: 5px;




font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

letter-spacing: -0.24px;

color: #FFFFFF;


}
</style>
