<template>
    <div class="join-us">
        <h2>Join Us Now!!!</h2>
        <p>Be one of the first to know when we launch officially.</p>
        <EarlyAccess/>   
    </div>
</template>

<script>
import EarlyAccess from '../components/EarlyAccess.vue'
export default {
    components: {EarlyAccess}
}
</script>

<style scoped>
    .join-us  {
        padding: 40px 0 90px;
        color: black;
    }
    .join-us h2 {
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0em;
        margin-bottom: 8px;
    }
    .join-us p {
        margin: 0 auto;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: -0.23999999463558197px;
        max-width: 449px;
    }
</style>