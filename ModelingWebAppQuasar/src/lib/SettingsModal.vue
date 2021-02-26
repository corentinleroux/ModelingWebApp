<template>
  <q-dialog :isActive="isActive" @clickModal="cancel">
    <h2>Settings</h2>
    <h3>Field Size</h3>
    <label>Width</label>
    <q-input type="number" v-model="newSettings.width" />
    <label>Height</label>
    <q-input type="number" v-model="newSettings.height" /><br />
    <h3>Scale</h3>
    <q-select v-model="newSettings.scale">
      <option value="0.5">Small</option>
      <option value="1" selected>Medium</option>
      <option value="2">Large</option>
    </q-select>
    <h3>Fluid</h3>
    <q-ckbox v-model="newSettings.isFluid"> Toggle fluid </q-ckbox>
    <h3>Background</h3>
    <q-checkbox v-model="newSettings.showGrid"> Show grid </q-checkbox><br /><br />
    <q-btn @click="ok">OK</q-btn>
    <q-btn class="danger" @click="cancel">Cancel</q-btn>
  </q-dialog>
</template>
<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    settings: {
      type: Object,
      default() {
        return {
          width: 1500,
          height: 1000,
          scale: "1",
          isFluid: false,
          showGrid: false
        };
      }
    }
  },
  watch: {
    isActive(val) {
      if (val) {
        this.newSettings = Object.assign({}, this.settings);
      }
    }
  },
  data() {
    return {
      newSettings: {
        width: 0,
        height: 0,
        showGrid: false
      }
    };
  },
  methods: {
    changeGrid() {
      this.$emit("changeGrid");
    },
    ok() {
      this.$emit("ok", this.newSettings);
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>
