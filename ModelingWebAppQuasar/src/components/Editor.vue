<template>
  <div class="q-pa-md">
      <q-layout view="lhh LpR lff" container style="height: 100vh" class="shadow-2 rounded-borders">
        <q-drawer
        side="left"
        v-model="drawerRight"
        bordered
        :width="200"
        :breakpoint="500"
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
            <h6> Diagramme de Classe </h6>
            <hr>
            <h6> Diagramme de Séquence </h6>
            <hr>
            <h6> Diagramme BPMN </h6>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <q-page>

      <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />
    <div id="editor">
      <DiagramEditor v-model="graph" />
    </div>
</q-page>
      </q-page-container>
        </q-layout>
  </div>

</template>

<script>
import { DiagramEditor } from 'diagram-vue';
import 'diagram-vue/dist/diagram.css';
import Tools from 'src/services/canvas.ts';

export default {
  name: 'HelloWorld',
  components: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    DiagramEditor
  },
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      tools: Tools,
      drawerLeft: false,
      drawerRight: true,
      graph: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: '#f0f0f0',
        nodes: [],
        links: []
      },
      props: {
        node: null,
        line: null,
        nodes: null,
        multi: false,
        expand: false,
        locked: false
      }
    };
  }
};
</script>


<style>

h3, h2 {
  font-size : 14px ; 
}
</style>