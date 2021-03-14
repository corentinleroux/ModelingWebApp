<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'App',
});

</script>
<script>
import { mapActions } from "vuex";
export default {
  methods:{
    ...mapActions('auth', ['handleAuthStateChange'])
  },
  mounted(){
    this.handleAuthStateChange()
  }
}
</script>