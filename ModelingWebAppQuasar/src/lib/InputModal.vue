<template>
  <q-dialog :isActive="isActive" @clickModal="cancel">
    <div>
      <textarea
        class="input"
        v-model="tmp"
        required
        placeholder="JSON"
      ></textarea
      ><br />
      <q-btn @click="ok">OK</q-btn>
      <q-btn class="danger" @click="cancel">Cancel</q-btn>
    </div>
  </q-dialog>
</template>
<script>
export default {
  props: {
    isActive: Boolean,
    text: String
  },
  watch: {
    text(val) {
      this.tmp = val;
    }
  },
  data() {
    return {
      tmp: ""
    };
  },
  methods: {
    ok() {
      this.$emit("ok", {
        text: this.tmp
      });
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>
<style lang="scss" scoped>
.input {
  width: 100%;
  height: 100px;
  margin-bottom: 5px;
}
</style>
