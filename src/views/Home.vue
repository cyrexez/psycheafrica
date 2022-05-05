<template>
 
  <Navbar/>
  <Hero/>
  <PaidMoney/>
  <BankingCrypto/>
  <MultiCurrency />
  <Footer/>

</template>

<script>
// @ is an alias to /src
require('vue2-animate/dist/vue2-animate.min.css')
import Navbar from '../components/Navbar.vue'
import Hero from "../components/Hero.vue";
import PaidMoney from '../components/PaidMoney.vue'
import BankingCrypto from '../components/BankingCrypto.vue'
import Footer from '../components/Footer.vue'
import MultiCurrency from "../components/MultiCurrency.vue";

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero,
    PaidMoney,
    MultiCurrency,
    BankingCrypto,
    Footer
  }
  
}
</script>
