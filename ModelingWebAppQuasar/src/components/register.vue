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
        <form @submit.prevent="submitFormRegister">
          <q-input v-model="emailinput" label="Adresse mail"></q-input>
          <q-input
            v-model="password"
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
        <p>{{showmessage}}</p>
      </q-card-actions>
    </q-card>
  </q-page>
</template>
<script>
import { mapActions, mapState } from 'Vuex';
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

var message = "" ; 
export default {
  data() {
    return {
      email: '',
      password: '',
      showmessage: message,
      emailinput:'',
    };
  },
  methods: {
    ...mapActions('auth', ['loginUser', 'logoutUser']),
    submitFormRegister() {
      firebase.auth().createUserWithEmailAndPassword(this.emailinput, this.password)
  .then((userCredential) => {
    var user = userCredential.user;
    message = "Création réusssite.";
    console.log("Création réusssite.")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    message = errorMessage ; 
    console.log(errorMessage);

  });
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
