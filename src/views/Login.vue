<template>
 
 <img alt="Vue logo" src="../assets/img/psyche.png">
 <body class="alignform">
   <form class="loginform">
   
    <h2>Login</h2>
 
      <label>Email Address</label>
      <input type="text"><br>
       <label>Password</label>
      <input type="password"><br>
      <div style="display:flex" ><input type="checkbox"><p>Remember me</p>   <p> Forgot Password</p></div>
      <button type="submit">Login</button>
      </form>

 
  <p> Need an Account ? Get Access</p>
  </body>
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
.alignform{


}
.loginform{
  
  width: 383px;
height: 372px;


background: #FFFFFF;
border-radius: 8px;
}

</style>