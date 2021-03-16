<template>
<div class="q-pa-md">
    <q-layout
      view="lhh LpR lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
      
    >
  <div id="app">
    <div class="menu-haut">
      <h6>Modélisation JointJS </h6>
    <InputForm v-on:addNode="addNode" v-on:checkLink="checkLink" />
    </div> 
    <JointDia v-bind:nodeName="nodeName" v-bind:linkMode="linkMode" />
  </div>
  </q-layout>
  </div>
</template>

<script>
import JointDia from 'src/components/JoinDia.vue'
import InputForm from 'src/components/InputForm.vue'
export default {
  name: 'app',
  components: {
    JointDia,
    InputForm
  },
  data() {
    return {
      nodeName: '',
      linkMode: false
    }
  },
  methods: {
    addNode(name) {
      this.nodeName = name
    },
    checkLink(checkLink) {
      this.linkMode = checkLink
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 90%;
}
input {
  margin-right : 20px !important ;
  margin-left : 10px ; 
}

h6 {
  margin-top : 5px ;
  margin-bottom: 5px ; 
  margin-left : 10px; 
}

#app > div.menu-haut > div > div > input[type=button]:nth-child(2){
  background-color: #008CBA ;
  color : white ; 
  font-size: 14px;
  padding: 5px 20px;
  border-radius: 8px;
  border : none ;
  margin-bottom : 5px;
  transition-duration: 0.8s;
}
#app > div.menu-haut > div > div > input[type=button]:nth-child(2):hover{
   box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
#app > div.menu-haut > div > div > input[type=text]:nth-child(1){
  border: none;
    font-size: 14px;
    border-bottom: 4px solid #008CBA; 
    width: 130px;
    -webkit-transition: width 0.5s ease-in-out;
    transition: width 0.5s ease-in-out;
}
#app > div.menu-haut > div > div > input[type=text]:nth-child(1):hover{
  border: none;
    border-bottom: 4px solid #008CBA; 
}
#app > div.menu-haut > div > div > input[type=text]:nth-child(1):focus{
  border: none;
    border-bottom: 4px solid #008CBA; 
        width: 25%;

}
#checkLink {
height : 20px;
width : 20px ;
color : #008CBA ; 
}
#checkLink:checked {
color : #008CBA ; 
}
#app > div.menu-haut > div > div > label {
  font-size : 14px ; 
}
</style>