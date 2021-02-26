<template>
  <div>
    <q-btn to="/login" color="primary" label="Nous rejoindre" class="q-mt-md" icon-right="send" size="16px" align="center" >
      <q-tooltip content-class="bg-accent">Connecter-vous ou inscrivez-vous !</q-tooltip>
    </q-btn>
  </div>

</template>
<script>
export default {
  data () {
    return {
      teal: true,
      orange: false,
      red: false,
      cyan: true
    }
  }
}
</script>
