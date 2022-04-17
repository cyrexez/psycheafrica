<template>
   <LoginTemp>
    <template #heading>
        Enter your o.t.p
      <div class="enter-pw">
        A 6-digit Code has been sent to your Email {{ email }}. Enter the OTP Number below  
      </div>
    </template>
    <template #form>
       <div class="otp-div">
          <VOtpInput ref="otpInput" input-classes="otp-input" separator=" " :num-inputs="6" :should-auto-focus="true" :is-input-num="true" @on-change="handleOnChange" @on-complete="handleOnComplete"/>
        </div>
    </template>
    <template #afterBtn>
        <p class="resend-div">Didn't get an email? <br>
        <a href="">Click here to resend</a> </p>
    </template>
  </LoginTemp>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import LoginTemp from '@/components/LoginTemp.vue'
import TextInput from '@/components/TextInput.vue'
import VOtpInput from 'vue3-otp-input'

export default {
  name: 'OTP',
  components: {
    LoginTemp,
    TextInput,
    VOtpInput,
  },

  setup() {
    const otpInput = ref(null)

    const handleOnComplete = (value) => {
      console.log('OTP completed: ', value);
    };

    const handleOnChange = (value) => {
      console.log('OTP changed: ', value);
    };

     const clearInput = () => {
      otpInput.value.clearInput()
    }

    return { handleOnComplete, handleOnChange, clearInput, otpInput };
  },
}
</script>

<style>
.enter-pw {
  margin-top: 15px;
  padding:0 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.24px;
}
.otp-div {
  display: flex; 
  width:100%;  
  flex-direction: row;
  margin: 24px 0 50px;
}
.otp-input {
  width: 41px;
  height: 45px;
  padding: 5px;
  margin: 0 4px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
.otp-input:focus {
  outline: none;
  border: 1px solid lightblue;
}
/* button[type='submit'] {
  display: none !important;
} */
.resend-div {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.23999999463558197px;
  text-align: center;
  color: #595959;
}
</style>