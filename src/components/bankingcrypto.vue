<template>
  <div class="heading">
    <h3>Banking Meets Crypto</h3>
    <p>Save naira cash, spend in dollars, Euro or Crypto while seamlessly managing all your cash and crypto in one place.</p>
  </div>
  <div class="banking-crypto">
    <div class="col-1">
      <img alt="Psyche logo" src="../assets/img/Group19.png"> 
      <img alt="Psyche logo" src="../assets/img/Group25.png">
    </div>
    <div class="col-2">
      <img alt="Psyche logo" src="../assets/img/Group35.png"> 
      <img alt="Psyche logo" src="../assets/img/Group47.png"> 
    </div>

  </div>

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
  .heading {
    margin: 40px 0 30px;
  }
  .heading h3 {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    margin-bottom: 6px;
  }
  .heading p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.23999999463558197px;
    max-width: 450px;
    margin: auto;
    margin-top: 6px;
  }
  .banking-crypto {
    display: flex;
    margin-bottom: 80px;
  }
  .col-1, .col-2 {
    width: 50%;
    padding: 15px;
  }
  .col-1 img {
    float: right;
    margin: 15px 0;
  }
  .col-2 {
    margin-top: 120px;
  }
  .col-2 img {
    float: left;
    margin: 15px 0;
  }
   @media screen and (max-width: 768px) {
        .banking-crypto {
            padding: 0 10px;
        }
         .col-1, .col-2 {
          width: 45%;
          padding: 10px;
        }
        .col-1 img, .col-2 img {
            width: 320px;
            height: auto;
        }

    }
     @media screen and (max-width: 576px) {
        .heading {
          margin: 40px 0 20px;
          padding: 5px;
        }
        .banking-crypto {
            padding: 0 5px;
            flex-direction: column;
        }
        .col-1, .col-2 {
          width: 100%;
          padding: 5px;
          text-align: center;
        }
        .col-1 img, .col-2 img {
          float: none;
        } 
        .col-2 {
          margin-top: 15px;
        }
     }
</style>
