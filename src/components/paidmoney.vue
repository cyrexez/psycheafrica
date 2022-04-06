<template>
 
  <div class="paid-money">
    <div class="image-div">
      <img alt="pound" class="pound" src="../assets/img/pound.png">
      <img alt="bitcoin" class="bitcoin" src="../assets/img/bitcoin2.png"> 
      <img alt="dollar" class="dollar" src="../assets/img/dollar.png">
    </div>

    <div class="text-div">
        <h3>Get paid in cash or crypto with direct deposit</h3>
        <p>Set up a direct deposit and recieve part of your payment in Dollar cash, Euro Cash, Naira Cash or Crypto in any wallet of your choice.</p>
        <ul class="list-div">
          <li><p>Seamless and Fast</p></li>
          <li><p>No Transaction Fee</p></li>
          <li><p>Withdraw in cash or to any wallet of your choice</p></li>
        </ul>
    </div>

  </div>


</template>

<script>
export default {
  name: 'PaidMoney',
  props: {
  
  }
}
</script>

<style scoped>
    .paid-money {
      background: #FFFF;
      display: flex;
      padding: 10px 80px 40px;
    }
    .image-div, .text-div {
      width: 50%;
    }
    .image-div img {
       vertical-align: text-top;
    }
    .text-div {
      text-align: left;
      max-width: 450px;
      padding-left: 20px;
      padding-top: 50px;
    }
    .text-div h3 {
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0em;
      color: black;
      margin-bottom: 6px;
    }
    .text-div p {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin-top: 6px;
      letter-spacing: -0.23999999463558197px;
      color: #595959;
    }
    .list-div {
      list-style: url('../assets/img/greencheck.png');
    }
    .list-div p {
      font-size: 14px;
      font-weight: 500;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: left;
      color: #0d0d0d;
      margin: 0 0 5px;
    }
</style>
