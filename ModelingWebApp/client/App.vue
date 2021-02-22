<!--
          RAB
-->

<template>
  <div>
       <div class="q-pa-md">
    <div class="q-gutter-md row">

    <h1>ModelingWebApp</h1>
     <q-btn color="blue">
          <router-link to="/register">Register</router-link>
      </q-btn>
       <q-btn color="blue" >
           <router-link to="/uml">Uml</router-link>
      </q-btn>
       <q-btn color="blue" >
           <router-link to="/paper">Paper</router-link>
      </q-btn>
        <q-btn color="blue" >
           <router-link to="/classe">Classe</router-link>
      </q-btn>
       </div>
  </div>
   
    <div>
      <router-view></router-view>
    </div>
  </div>
  
</template>

<script>
export default {
  
}
</script>

<style>
</style>