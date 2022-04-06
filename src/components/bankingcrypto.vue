<template>
 <head>
 <title>PsycheAfrica</title>
 </head>
<body>
  <h3>Banking Meets Crypto</h3>
  <p>Save naira cash, spend in dollars, Euro or Crypto while seamlessly managing all your cash and crypto in one place.</p>

<div class="firstflex">


    <div>
    <div><img alt="Psyche logo" src="../assets/img/Group19.png"> 
    <img alt="Psyche logo" src="../assets/img/Group25.png"> </div>
    
    
    </div>

      <div>
  

    <img alt="Psyche logo" src="../assets/img/Group35.png"> 
      <img alt="Psyche logo" src="../assets/img/Group47.png"> 
     
    </div>

</div>
</body>


</template>

<script>
export default {
  name: 'BankingCrypto',
  props: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



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

.firstflex {
  display:flex;
   background-color: white;
  width: 100vw;
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
