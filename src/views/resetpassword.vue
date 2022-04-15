<template>
  <LoginTemp>
    <template #heading>
     reset your password
     <div class="enter-pw">
       Hi Psyche, enter your new password to continue 
     </div>
    </template>
    <template #form>
      <TextInput InputLabel="New Password" InputType="password"/>
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
  name: 'ResetPassword',
  components: {
    LoginTemp,
    TextInput
  }
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