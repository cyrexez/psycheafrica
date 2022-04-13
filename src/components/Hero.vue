<template>
    <div class="hero">
        <div class="hero-content">
                <p>Multi-currencies with a single account</p>
                <h1> Save Money<span>,</span> Send Money <span>and</span> Get Paid <span>in Crypto</span></h1>
                <p>Psyche lets you fly the world without any exchange rate hurdles, spending limit just with a single debit card for all. </p>
                <EarlyAccess/>
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
import EarlyAccess from '../components/EarlyAccess.vue'
export default {
    components: {EarlyAccess}
}
</script>
<style scoped>
    .hero {
        display: flex;
        justify-content: space-between;
        padding: 20px 80px 0;
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
        background-size: contain;
    }
    .frames {
        background: transparent;
        position: absolute;
        width: 600px;
        top: 500px;
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
    @media screen and (max-width: 768px) {
        .hero {
            padding: 25px 10px 0;
        }
         .hero-content, .hero-image {
            width: 47%;
            display: inline-block;
        }
         .hero-content h1 {
            font-size: 36px;
            line-height: 46px;
            color: #0F5CA8;
            margin: 0;
        }
        .frames {
            top: 350px;
            width: 350px;
        }
        .hero-image >img {
            width: 350px;
            height: auto;
        }
    }
    @media screen and (max-width: 576px) {
        .hero {
            padding: 25px 5px 0;
            flex-direction: column-reverse;
        }
         .hero-content, .hero-image {
            width: 100%;
            display: block;
        }
        .hero-content {
            padding: 15px 0 30px;
        }
        .hero-image {
       
            box-sizing: content-box; }
        .hero-image >img {
            width: 350px;
            height: auto;
        }
        .hero-content {

        }
    }
</style>