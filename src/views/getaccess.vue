<template>
  <LoginTemp>
    <template #heading>
      get early access  
    </template>
    <template #form>
        <TextInput InputLabel="Full Name" InputType="text"/>
        <TextInput InputLabel="Email Address" InputType="email"/>
        <label class="phone-label">Phone Number</label>
        <div style="display:flex; justify-content: space-between;">
          <select class="number-box">
            <option value="+234">+234</option>
          </select>
          <input type="text" class="inputnumber" required>
        </div>
        <TextInput InputLabel="Password" InputType="password"/>
    </template>
    <template #submit>
      get access
    </template>
    <template #afterBtn>
      <div class="remember">
        <input type="checkbox">
        <p>By clicking the “Get Access” button, you agree
        to Psyche Africa <a href=""> Terms and Conditions</a></p> 
      </div>

    </template>
    <template #extra>
     <p>Already have an Account?
        &nbsp; <span class="getac"><router-link to="/otp"> Login</router-link></span>      
      </p>
    </template>
  </LoginTemp>
</template>

<script>
// @ is an alias to /src

import LoginTemp from '@/components/LoginTemp.vue'
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'Home',
  components: {
    LoginTemp,
    TextInput
  }
}
</script>
<style scoped>
  
.remember{
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* or 157% */
  text-align: left;
  letter-spacing: -0.24px;
  display: flex;
  margin-top: 32px;
  color: #595959;
}
.remember  p {
  margin: 0;
}
.getac{
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */
  letter-spacing: -0.24px;
  color: #0F5CA8;
}
.phone-label { 
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.24px;
    color: #595959; 
}
.number-box{
  text-align:center;
  align-items:center;
  justify-content:center;
  line-height: 32px;
  width: 25%;
  border: 1px solid rgba(89, 89, 89, 0.5);
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 15px;
}
.inputnumber{
  line-height: 32px;
  width: 72%;
  border: 1px solid rgba(89, 89, 89, 0.5);
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 15px;
}
.number-box:focus, .inputnumber:focus {
  outline: none;
  border: 1px solid lightblue;
}
</style>