<template>
<div>
<q-btn color="secondary" label=" Menu">
        <q-menu auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section >New Node</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator></q-separator>
            <q-item clickable>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator></q-separator>
            <q-item clickable>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator></q-separator>
            <q-item clickable>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      
  <div id="editor">
    <DiagramEditor v-model="graph"/>
  </div>
  </div>
</template>

<script>
import { DiagramEditor } from 'diagram-vue';
import 'diagram-vue/dist/diagram.css';
export default {
  name: 'HelloWorld',
  components: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    DiagramEditor
  },
  data() {
    return {
      graph: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: '#f0f0f0',
        nodes: [],
        links: []
      }
    };
  }
};
</script>