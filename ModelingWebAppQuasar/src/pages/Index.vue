<template>
  <q-page
    class="bg-image window-height window-width column justify-center items-center"
  >
  <div>
    <h2> Bienvenue sur <b>ModelingWebApp </b> </h2>
    <p> Application réalisée dans le cadre du module Veille Technologique. 
      <br> Il vous est possible d'accéder à <a href='/#/editor'>Stack 1 (Diagram-vue)</a> et au <a href='/#/editor2'>Stack 2 (JointJS)</a></p>
    </div>
    <div>
      <q-btn
        to="/login"
        color="primary"
        label="Nous rejoindre"
        class="q-mt-md"
        rounded
        icon-right="send"
        size="25px"
        align="center"
      >
        <q-tooltip
          content-class="bg-secondary"
          transition-show="rotate"
          transition-hide="rotate"
          content-style="font-size: 14px"
          
          >Connecter-vous ou inscrivez-vous !</q-tooltip
        >
      </q-btn>
      </div>
            <p class="realise"> Réalisé par : DOGLOBE Gérard, MEURIC Camille, BENOUZGHAR Mehdi, ABIZMIL Raphael, PIOTROWSKI Paul et LE ROUX Corentin.</p>

  </q-page>
</template>
<script>
export default {
  data() {
    return {
      teal: true,
      orange: false,
      red: false,
      cyan: true
    };
  }
};
</script>
<style scoped>
.bg-image {
  background: linear-gradient(120deg, #3b5998, #ffffff);
  background-repeat: repeat;
}
h2 {
  padding-bottom : 0px ; 
  margin-bottom : 20px ; 
  margin-top : 40px ; 
}
p {
  text-align : center ; 
  padding-top : 0px ; 
  padding-top : 10px ; 
  font-size : 16px ; 
}
.realise {
  margin-top : 200px ; 
  font-size : 14px ;
  color : #353535 ;
  
}
</style>
