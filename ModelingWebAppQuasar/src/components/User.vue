<template>
  <q-page
    class="bg-image window-height window-width row justify-center items-center"
  >
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">ModelingWebApp</div>
        <div class="text-subtitle2">Informations du compte</div>
      </q-card-section>

      <q-card-actions vertical align="center">
        <p>e-mail : <span>{{emailuser}} </span></p>
      </q-card-actions>
    </q-card>
  </q-page>
</template>
<script>
import { mapActions, mapState } from 'Vuex';
import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('user connecté');
    name = user.displayName;
    email = user.email,
    emailVerified = user.emailVerified;
    uid = user.uid;
  }
  else {
      name = "";
    email = "",
    emailVerified = "";
    uid = "";
  }
});

export default {
  data() {
    return {
      emailuser: email,
      uid
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
  width: 20vw;
}

#subbutton {
  margin-top: 30px;
}

.bg-image {
  background: linear-gradient(120deg, #3b5998, #ffffff);
  background-repeat: repeat;
}
</style>
