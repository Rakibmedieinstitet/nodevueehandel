<template>
  <div class="hello">
      Register component 
      <input type="email" name="email" placeholder="Ange ditt mejl"
      v-model="email"
       />
 <input type="password" name="email" placeholder="Ange ditt Lösenord" 
  v-model="password"
 />

 <button @click="register">Register </button>
  </div>
</template>

<script>
 import AuthenticationApi from "@/services/AuthenticationApi.js"
export default {
   
  name: 'Register',
  data () {
    return {
        email:"",
        password:""
    }
  }, 
  methods:{
     async register(){
       const promise= await  AuthenticationApi.register(
              {email:this.email,
               password:this.password}
              )
          console.log("registerbutton is clicked" , promise.data)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
