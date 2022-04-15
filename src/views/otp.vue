<template>
   <LoginTemp>
    <template #heading>
        Enter your o.t.p
      <div class="enter-pw">
        A 6-digit Code has been sent to your Email {{ email}}. Enter the OTP Number below  
      </div>
    </template>
    <template #form>
       <div style="display: flex; flex-direction: row;">
          <VOtpInput ref="otpInput" input-classes="otp-input" separator="-" :num-inputs="4" :should-auto-focus="true" :is-input-num="true" @on-change="handleOnChange" @on-complete="handleOnComplete" />
      </div>
    </template>
    <template #after-btn>
        <p>Didn't get an email?</p>
        <a href="">Click here to resend</a>
    </template>
  </LoginTemp>
</template>

<script>
// @ is an alias to /src
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

<style scoped>

.enter-pw {
  margin-top: 15px;
  padding:0 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.24px;
}
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}

</style>