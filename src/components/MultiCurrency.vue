<template>
 <div class="multi-currency">
    <div class="image-div">
      <img alt="card" class="" src="../assets/img/Card.png">
    </div>

    <div class="text-div">
        <h3>A Multi-currency and crypto checking account everywhere you go</h3>
        <p>Manage your cash and crypto in one single account.</p>
        <EarlyAccess/>
    </div>

  </div>

</template>
<script>
  import EarlyAccess from '../components/EarlyAccess.vue'
export default {
  components: {EarlyAccess}  
}
</script>
<style scoped>
    .multi-currency {
      background: #FFFF;
      display: flex;
      padding: 50px 80px 80px;
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
</style>