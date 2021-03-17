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
        <form @submit.prevent="submitFormMail">
          <h6>e-mail :</h6>
          <q-input        type="email" v-model="emailinput"     id="mailinput"
 :value="emailuser"> </q-input>
          <q-btn
            color="primary"
            class="full-width"
            label="Mettre à jour l'email"
            type="submit"
          />
        </form>
      </q-card-section>
      <q-card-section vertical align="left">
        <p>
          <b>Etat validité mail :</b><span> {{ verified }} </span>
        </p>
      </q-card-section>
      <q-card-section vertical align="left">
                  <form @submit.prevent="submitFormUsername">

        <h6>Nom d'affichage :</h6>
        <q-input v-model="userinput" >{{ username }} </q-input>
        <q-btn
          color="secondary"
          class="full-width"
          label="Mettre à jour le nom d'affichage"
          type="submit"
        />
        </form>
      </q-card-section>
      <q-card-section vertical align="left">
        <p>
          <b> ID du compte :</b> <span>{{ ID }} </span>
        </p>
        <p>
          test : <span>{{ displayedmessage }} </span>
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
var message = "" ; 
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
      verified: emailVerified,
      displayedmessage: message,
      emailinput : email,
      userinput : name
    };
  },
  methods: {
    ...mapActions('auth', ['loginUser', 'logoutUser']),
    submitFormUsername(){
        user.updateProfile({
  displayName: this.userinput
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
    },
    submitFormMail() {
      console.log('bouton appuyé');
      user
        .updateEmail(this.emailinput)
        .then(function() {
          console.log('réussite');

          message = 'Changement réalisé avec succès.';
        })
        .catch(function(error) {
          console.log('echec');
          message = 'Une erreur est survenue';
            displayedmessage : message ; 

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
  height: 80vh;
  width: 40vw;
}

#subbutton {
  margin-top: 30px;
}

h6 {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.q-btn {
  margin-top: 10px;
  margin-bottom: 10px;
}
.bg-image {
  background: linear-gradient(120deg, #3b5998, #ffffff);
  background-repeat: repeat;
}
</style>
