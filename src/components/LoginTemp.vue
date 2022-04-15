<template>
    <img class="logo" alt="Vue logo" src="../assets/img/psyche.png">
    <div class="login">
        <h3>
            <slot name="heading"></slot>
        </h3>
        <form action="">
            <slot name="form">

            </slot>
            <button type="submit">
                <slot name="submit"></slot>
            </button>
            <div>
                <slot name="afterBtn">

                </slot>
            </div>
        </form>
    </div>
      <div class="extra">
            <slot name="extra">

            </slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .logo{ 
        margin: 40px 0; 
        text-align: center;
    }
    form {
        text-align: left ;
    }
    .login{
        padding: 40px 35px;
        background: white;
        border-radius: 8px;
        width: 385px;
        margin: auto;
    }
    .login h3 {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.24px;
        text-transform: uppercase;
        color: #595959;
    }
    button[type='submit'] {
        background: #0F5CA8;
        border-radius: 5px;
        width: 100%;
        color: white;
        text-transform: capitalize;
        border: none;
        padding: 12px 0;
        margin-top: 15px;
    }
    .extra{
        margin: 15px auto 40px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.24px;
        color: #000000;
    }

</style>