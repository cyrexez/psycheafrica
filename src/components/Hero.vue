<template>
    <div class="hero">
        <div class="hero-content">
                <p>Multi-currencies with a single account</p>
                <h1> Save Money<span>,</span> Send Money <span>and</span> Get Paid <span>in Crypto</span></h1>
                <p>Psyche lets you fly the world without any exchange rate hurdles, spending limit just with a single debit card for all. </p>
                <button class="blue-btn">Get Early Access</button>
        </div>
        <div class="hero-image">
            <img src="../assets/img/man.png" alt="">
            <div class="frames">
                <img src="../assets/img/frame15.png" alt="">
                <img src="../assets/img/frame16.png" alt="">
            </div>
        </div>  
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .hero {
        display: flex;
        justify-content: space-between;
        padding: 20px 80px;
    }
    .hero-content, .hero-image {
        width: 50%;
        display: inline-block;
    }
    .hero-content {
        margin: auto 0;
        text-align: left;
        padding: 0 10px;
    }
    .hero-content p:first-of-type {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #494343;
        text-transform: uppercase;
        margin-bottom: 10px;
    }
    .hero-content h1 {
        font-style: normal;
        font-weight: 900;
        font-size: 42px;
        line-height: 56px;
        color: #0F5CA8;
        margin: 0;
    }
    .hero-content h1 span{
        color: black;
    }
    .hero-content p:last-of-type{
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: -0.23999999463558197px;
        text-align: left;
        max-width: 449px;
    }
    .hero-image {
        background: url('../assets/img/bluevector.png');
        background-repeat: no-repeat;
        background-position: top center;
    }
    .blue-btn{
        padding: 12px;
        background: #0F5CA8;
        border-radius: 5px;
        letter-spacing: -0.24px;
        color: #FFFFFF;
        outline: none;
        border: none;
        font-size: 16px;
        margin-top: 20px;
    }
    .frames {
        background: transparent;
        position: relative;
        top: -176px;
    }
    .frames img {
        display: block;
    }
    .frames img:first-of-type {
        margin-bottom: 22px;
    }
    .frames img:last-of-type {
        float: right;
    }
</style>