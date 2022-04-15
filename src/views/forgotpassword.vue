<template>
  <LoginTemp>
    <template #heading>
      password reset
    </template>
    <template #form>
        <TextInput InputLabel="Email Address" InputType="email"/>
    </template>
    <template #submit>
     reset password
    </template>
    
    <template #extra>
     <p>Remember your password?
        &nbsp; <span class="getac"><router-link to="/login"> Login</router-link></span>      
      </p>
    </template>
  </LoginTemp>
</template>

<script>
// @ is an alias to /src

import LoginTemp from '@/components/LoginTemp.vue'
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'ForgotPassword',
  components: {
    LoginTemp,
    TextInput
  }
}
</script>

<style scoped>
.remember{
  justify-content:space-between;
  align-items:left;
  text-align:left;
  display: flex;
}
.remember input[type='checkbox'] {
  display: inline;
}
.remember label{
  margin-left: 10px;
  font-family: 'Cera Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */
  letter-spacing: -0.24px;
  color: #595959;
}
.forgot-pw {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */
  letter-spacing: -0.24px;
}
</style>