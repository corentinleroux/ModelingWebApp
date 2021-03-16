<template>
  <div class="q-pa-md">
     <q-btn v-if="loggedIn" @click="logoutUser">Se deconnecter</q-btn>
    Etat de connexion : {{loggedIn}}
    <form @submit.prevent="submitForm">
      <q-input v-model="formData.email" label="Adresse mail"></q-input>
      <q-input v-model="formData.password" type="password" label="Mot de passe"></q-input>
      <q-btn :class="$q.dark.isActive ? 'bg-primary text-white' : 'bg-white text-blue'" color="primary"  type="submit">Se connecter</q-btn>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from 'Vuex'

export default {
  data() {
    return {
      formData: {email: 'test@gmail.fr', password: 'testtest'}
    }
  },
  methods:{
    ...mapActions('auth', ['loginUser','logoutUser']),
    submitForm(){
      console.log('fonction de connexion');
      this.loginUser(this.formData)
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  }
}
</script>