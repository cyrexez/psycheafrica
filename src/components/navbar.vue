<template>

  <nav>
      <div class="logo"><img alt="Psyche logo" src="../assets/img/psyche.png"></div>
      <div>
        <router-link to="/login"><button class="login-btn">Login</button></router-link>
        <button class="blue-btn">Get Early Access</button>
      </div>
    <!-- <ul>
        <li class="logo"></li>
        <li><router-link to="/login"><button class="login">Login</button></router-link></li>
        <li><button class="bluebutton">Get Early Access</button></li> 
    </ul> -->
  </nav>
  
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
  display: flex;
  padding: 40px 80px;
  justify-content: space-between;
}
.logo{
  height: 46px;
  width: auto;
}
.login-btn{
  display: inline-block;
  padding: 10px;
  background: transparent;
  width: 61px;
  height: 44px;
  border: 1px solid #0F5CA8;
  box-sizing: border-box;
  border-radius: 8px;
  letter-spacing: -0.24px;
  color: #000000;
  }
.blue-btn{
  padding: 10px;
  width: 140px;
  height: 44px;
  background: #0F5CA8;
  border-radius: 1px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.24px;
  color: #FFFFFF;
}

</style>