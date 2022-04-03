<template>
 <head>
 <title>PsycheAfrica</title>
 </head>
<body>
<nav>

    <ul>
           <li class="logo">  <img alt="Psyche logo" src="../assets/psyche.png"> </li>
<div class="item">
    <li > <router-link to="/login"><button class="login">Login</button></router-link></li>
   <li>  <button class="bluebutton">Get Early Access</button></li>
   </div>
     </ul>
</nav>
<div class="firstflex">
  <div>
    <p>Multi-currencies with a single account</p>
  <h1> Save Money, Send Money and Get Paid in Crypto</h1>
  <p>Psyche lets you fly the world without any exchange rate hurdles, spending limit just with a single debit card for all. </p>
 <button class="bluebutton">Get Early Access</button>
    </div>

    <div></div>

</div>
</body>


</template>

<script>
export default {
  name: 'Navbar',
  props: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  margin: 20px;
   background: #C8E6FF;

 

}
h3 {
  margin: 40px 0 0;
}
li{
  float:left;
  margin: auto 20px;
}
ul {

  list-style-type: none;
display: flex;
margin: 0;
padding:0;
overflow:hidden;
}

body {
   background: #C8E6FF;
  width: 1280px;
height: 720px;


}
.logo{
float:left;
margin:0;
}
.item{
  display: inline-block;
  margin:0;
  margin-left: 700px;
  
  float:right;
}
.login{
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
 background: #C8E6FF;


width: 61px;
height: 44px;


border: 1px solid #0F5CA8;
box-sizing: border-box;
border-radius: 8px;

font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

letter-spacing: -0.24px;

color: #000000;

}
.bluebutton{
  display: flex;

justify-content: center;
align-items: center;
padding: 10px;


width: 140px;
height: 44px;


background: #0F5CA8;
border-radius: 1px;




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
