<template>
 
  <Navbar/>
  <Hero/>
  <PaidMoney/>
  <BankingCrypto/>
  <Footer/>

</template>

<script>
// @ is an alias to /src

import Navbar from '../components/Navbar.vue'
import PaidMoney from '../components/PaidMoney.vue'
import BankingCrypto from '../components/BankingCrypto.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    PaidMoney,
    BankingCrypto,
    Footer
  }
  
}
</script>
