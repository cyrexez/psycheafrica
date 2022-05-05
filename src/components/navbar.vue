<template>

  <nav>
      <div class="logo"><img alt="Psyche logo" src="../assets/img/psyche.png"></div>
      <div class="other">
        <router-link to="/login"><button class="login-btn">Login</button></router-link>
        <EarlyAccess/>
      </div>
    <!-- <ul>
        <li class="logo"></li>
        <li><router-link to="/login"><button class="login">Login</button></router-link></li>
        <li><button class="bluebutton">Get Early Access</button></li> 
    </ul> -->
  </nav>
  
</template>

<script>
  
import EarlyAccess from '../components/EarlyAccess.vue'

export default {
  name: 'Navbar',
  components: {EarlyAccess},
  setup(props) {
    
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
.logo img{
  height: 46px;
  width: auto;
}
.login-btn{
  display: inline-block;
  padding: 11px;
  margin-right: 14px;
  background: transparent;
  border: 1px solid #0F5CA8;
  border-radius: 8px;
  letter-spacing: -0.24px;
  color: #000000;
}
.other {
  margin: auto 0;
}
@media screen and (max-width: 768px) {
    nav {
      padding: 10px;
    }
  }
@media screen and (max-width: 576px) {
    nav {
      padding: 5px;
    }
    .logo {
      margin: auto;
    }
    .logo img{
      height: 38px;
      width: auto;
    }
    .other {
      display: none;
    }
    .login-btn {
      margin-right: 8px;
    }
  }
</style>