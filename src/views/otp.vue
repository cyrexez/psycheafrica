<template>
 <head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
 </head>
 <img alt="Vue logo" src="../assets/psyche.png">
 <body class="alignform">
   <form class="loginform">
     <br>
   <img src="../assets/mail.png">
    <h2>Enter Your O.T.P</h2>

      <p class="rememberme">A 6-Figure Code has been sent to your Email <span style="  font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */

letter-spacing: -0.24px;

color: #0F5CA8;">psycheafrica@gmail.com. </span>Enter the OTP Number below</p>
       <div class="alignend">
          <input type="text" class="input" required>
             <input type="number" class="input" required><br><br><br>
                <input type="number" class="input" required><br>
                   <input type="number" class="input" required><br>
                      <input type="number" class="input" required><br>
                         <input type="number" class="input" required>
       </div>
      
       <p class="rememberme">Didn't get an email?</p> 
       <p class="password">    <router-link to="/forgotpassword">  Click here to receive</router-link></p>
     
      </form>

 
   
  </body>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'Home',
  components: {

  }
  
}
</script>
<style scoped>
.remember{
     justify-content:left;
  align-items:left;
  align-text:left;
  display: flex;
  margin-left: 30px;


}
.alignend{
   justify-content:center;
  align-items:center;
  align-text:center;
  display:flex; 
     margin-left: auto;
    margin-right: auto;

}
label{
   justify-content:left;
  align-items:left;
  align-text:left;
  display: flex;
  margin-left: 30px;

font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */

letter-spacing: -0.24px;

color: #595959;

}
::-ms-reveal {
    border: 1px solid transparent;
    border-radius: 50%;
    box-shadow: 0 0 3px currentColor;
}
.input{
width: 41px;
height: 45px;
padding: 20px;
margin: 0 auto;

border: 0.5px solid #595959;
box-sizing: border-box;
border-radius: 3px;
}
body{
 
justify-content:center;
  align-center:center;

}
.alignform{



}
.loginform{
    margin-left: auto;
    margin-right: auto;
  width: 383px;
height: 372px;
 justify-content:center;
  align-center:center;


background: #FFFFFF;
border-radius: 8px;
}
.rememberme{

font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 162% */

letter-spacing: -0.24px;

color: #595959;

}
.password{
  justify-content:right;
  align-items:right;
  font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */

letter-spacing: -0.24px;

color: #0F5CA8;
}
.submit{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;

width: 312px;
height: 44px;
 margin-left: auto;
    margin-right: auto;

background: #0F5CA8;
border-radius: 5px;
border-style: solid;
border-color:white;
color:white;
}
.needac{
  font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */

letter-spacing: -0.24px;

color: #000000;
}
.getac{
  font-family: 'Cera Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
/* identical to box height, or 157% */

letter-spacing: -0.24px;

color: #0F5CA8;
}


</style>