<template>
  <div>
    <div>
      <input type="text" placeholder="new node name" v-model.trim="nodeName" v-on:keyup.ctrl.enter="add" />
      <input type="button" v-on:click="add" value="add node" />
      <input type="checkbox" id="checkLink" v-model="linkMode" v-on:change="check" />
      <label for="checkLink">link mode</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InputForm',
    data() {
      return {
          nodeName: '',
          linkMode: false
      }
    },
    methods: {
      add() {
        if (!this.nodeName) {
            return;
        }
        this.$emit('addNode', this.nodeName)
        this.nodeName = ''
      },
      check() {
        this.$emit('checkLink', this.linkMode)
      }
    }
  }
</script>