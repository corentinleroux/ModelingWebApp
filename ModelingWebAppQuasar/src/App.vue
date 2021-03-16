<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'App',
  methods:{
    ...mapActions('auth', ['handleAuthStateChange'])
  },
  mounted(){
    this.handleAuthStateChange()
  }
});
</script>