<template>
 
  <Navbar/>
  <Paidmoney/>
  <Bankingcrypto/>
    <Footer/>
   <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Paidmoney from '@/components/paidmoney.vue'
import Bankingcrypto from '@/components/bankingcrypto.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Paidmoney,
    Bankingcrypto,
    Footer
  }
  
}
</script>
