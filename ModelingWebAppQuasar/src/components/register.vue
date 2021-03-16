<template>
  <q-page
    class="bg-image window-height window-width row justify-center items-center"
  >
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">ModelingWebApp</div>
        <div class="text-subtitle2">Inscription</div>
      </q-card-section>

      <q-card-actions vertical align="center">
        <form @submit.prevent="submitForm">
          <q-input v-model="formData.email" label="Adresse mail"></q-input>
          <q-input
            v-model="formData.password"
            type="password"
            label="Mot de passe"
          ></q-input>
          <q-btn id="subbutton"
            :class="
              $q.dark.isActive ? 'bg-primary text-white' : 'bg-white text-blue'
            "
            color="primary"
            type="submit"
            >S'inscrire</q-btn
          >
        </form>
      </q-card-actions>
    </q-card>
  </q-page>
</template>
<script>
import { mapActions, mapState } from 'Vuex';

export default {
  data() {
    return {
      formData: { email: 'test@gmail.fr', password: 'testtest' }
    };
  },
  methods: {
    ...mapActions('auth', ['loginUser', 'logoutUser']),
    submitForm() {
      console.log('fonction de connexion');
      this.loginUser(this.formData);
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  }
};
</script>

<style scoped>
.my-card {
   height: 40vh;
    width: 20vw
}
  

#subbutton {
    margin-top : 30px ;
}

.bg-image {
    background : linear-gradient(120DEG, #3B5998, #FFFFFF);
    background-repeat: repeat;  }
</style>
