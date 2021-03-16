<template>
  <div id="app">
    <InputForm v-on:addNode="addNode" v-on:checkLink="checkLink" />
    <JointDia v-bind:nodeName="nodeName" v-bind:linkMode="linkMode" />
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
</style>