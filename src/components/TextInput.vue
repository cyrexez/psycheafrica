<template>
    <div>
        <label for="{{ InputType }}">{{ InputLabel }}</label>   
        <input type="{{ InputType }}"> 
    </div>
</template>
<script>
export default {
    props: {
    InputType: String,
    InputLabel: String
  }
}
</script>
<style scoped>
    label {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.24px;
        color: #595959; 
    }
    input {
        border: 1px solid rgba(89, 89, 89, 0.5);
        box-sizing: border-box;
        border-radius: 8px;
        margin-bottom: 15px;
        padding: 2px;
        line-height: 32px;
        width: 100%;
    }
    input:focus {
        outline: none;
        border: 1px solid lightblue;
        
    }
</style>