<template>
 <head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
 </head>
 <img alt="Vue logo" src="../assets/img/psyche.png">
 <body class="alignform">
   <form class="loginform">
   
    <h2>Get Early Access</h2>
       <label>Full Name</label><br>
      <input type="text" class="input" required><br>
 
      <label>Email Address</label><br>
      <input type="text" class="input" required><br>
      <label>Phone Number</label><br>
      <div style="display:flex; padding:10px; margin-left:auto; margin-right:auto;">
      <div class="numberbox"><p>+234</p></div>&nbsp;
      <input type="text" class="inputnumber" required></div>
       <label>Password</label><br>
      <input class="input" type="password" required>
      <i class="far fa-eye" id="togglePassword" style="margin-left: -30px; cursor: pointer;"></i>
      <br>
      <div class="remember"> <p class="rememberme"><input type="checkbox">Remember me</p> &emsp;  &emsp;  &emsp;  &emsp;  &emsp;  <p class="password">      Forgot Password?</p></div>
      <button type="submit" class="submit">Login</button>
           <div class="remember"> <p class="rememberme"><input type="checkbox">By clicking the “Get Access” button, you agree
            to Psyche Africa Terms and Conditions</p> </div>
      </form>

 <br>
     <div class="alignend"> <p class="needac">  Already have an Account?</p> &nbsp; <p class="getac"><router-link to="/otp"> Login</router-link></p></div>
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
.numberbox{
  
  align-text:center;
  align-items:center;
  justify-content:center;
  width:74px;
height:40px;
border: 1px solid rgba(89, 89, 89, 0.5);
box-sizing: border-box;
border-radius: 8px;

}
.inputnumber{
width:230px;
height:40px;
border: 1px solid rgba(89, 89, 89, 0.5);
box-sizing: border-box;
border-radius: 8px;
}
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
width: 312px;
height: 40px;

border: 1px solid rgba(89, 89, 89, 0.5);
box-sizing: border-box;
border-radius: 8px;
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
height: 600px;
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