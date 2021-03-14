<template>
  <div class="q-pa-md">
      <q-layout view="lhh LpR lff" container style="height: 100vh" class="shadow-2 rounded-borders">
        <q-drawer
        side="left"
        v-model="drawerRight"
        bordered
        :width="400"
        :breakpoint="500"
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
           <div class="tools">
      <div v-for="(item, index) in tools" :key="index">
        <div class="title">{{ item.group }}</div>
        <div class="buttons">
          <a
            v-for="(btn, i) in item.children"
            :key="i"
            :title="btn.name"
            :draggable="btn.data"
          >
            <i :class="`iconfont ${btn.icon}`"></i>
          </a>
        </div>
      </div>
          </div>
          </div>
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
import Tools from '../services/canvas';
import { Topology, Node, Line } from 'topology-core';

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
      },
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Dashboard',
          icon: 'fa fa-user'
        },
        {
          href: '/charts',
          title: 'Charts',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '/charts/sublink',
              title: 'Sub Link'
            }
          ]
        }
      ]
    };
  }
};
</script>
