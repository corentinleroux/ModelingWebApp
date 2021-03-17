<template>
  <q-page
    class="bg-image window-height window-width row justify-center items-center"
  >
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">ModelingWebApp</div>
        <div class="text-subtitle2">Informations du compte</div>
      </q-card-section>

     <q-card-section vertical align="left">
        <h6> e-mail : </h6>
        <q-input :value="emailuser" > </q-input>
    </q-card-section>
    <q-card-section vertical align="left">
        <h6> Etat validité mail :</h6> 
          <p>{{ verified }} </p>
    </q-card-section>
     <q-card-section vertical align="left">
          <h6>Nom d'affichage : </h6>
           <q-input>{{ username }} </q-input>
  </q-card-section>
  <q-card-section vertical align="left">
        <p>
          ID du compte : <span>{{ ID }} </span>
        </p>
      </q-card-section>
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
    (email = user.email), (emailVerified = user.emailVerified);
    uid = user.uid;
  } else {
  }
});


export default {
  data() {
    return {
      emailuser: email,
      ID: uid,
      username: name,
      verified: emailVerified
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
  height: 60vh;
  width: 40vw;
}

#subbutton {
  margin-top: 30px;
}

h6 {
    margin-top : 0px ; 
    margin-bottom : 0px; 
    padding-bottom : 0px 
}


.bg-image {
  background: linear-gradient(120deg, #3b5998, #ffffff);
  background-repeat: repeat;
}
</style>
