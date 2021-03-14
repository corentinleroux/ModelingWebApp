<template>
  <div class="q-pa-md">
    <q-btn v-if="!loggedIn">LogIn</q-btn>
     <q-btn v-else @click="logoutUser">Logout</q-btn>
    <q-btn v-if="!loggedIn">LogUp</q-btn>
    {{loggedIn}}
    <form @submit.prevent="submitForm">
      <q-input v-model="formData.email" label="Ingrese correo"></q-input>
      <q-input v-model="formData.password" label="Ingrese password"></q-input>
      <q-btn type="submit">Ingresar</q-btn>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      formData: {email: 'test@gmail.fr', password: 'testtest'}
    }
  },
  methods:{
    ...mapActions('auth', ['loginUser','logoutUser']),
    submitForm(){
      console.log('funciona form');
      this.loginUser(this.formData)
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  }
}
</script>