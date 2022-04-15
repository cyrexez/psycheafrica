<template>
 
 <img alt="logo" src="../assets/img/psyche.png">
 <div class="alignform">
   <form class="loginform">
    <h2>Login</h2>
 
      <label>Email Address</label><br>
      <input type="text" class="input" required><br><br>
       <label>Password</label><br>
      <input class="input" type="password" required>
      <i class="far fa-eye" id="togglePassword" style="margin-left: -30px; cursor: pointer;"></i>
      <br>
      <div class="remember"> <p class="rememberme"><input type="checkbox">Remember me</p> &emsp;  &emsp;  &emsp;  &emsp;  &emsp; 
       <p class="password">    <router-link to="/forgotpassword">  Forgot Password?</router-link></p></div>
      <button type="submit" class="submit">Login</button>
      </form>

 
     <div class="alignend"> <p class="needac">  Need an Account?</p> &nbsp; <p class="getac"><router-link to="/getaccess"> Get Access</router-link></p></div>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'Login',
  components: {

  }
  
}
</script>
<style scoped>
.remember{
  justify-content:left;
  align-items:left;
  text-align:left;
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