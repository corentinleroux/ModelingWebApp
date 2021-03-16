<script src="go-debug.js"></script>

<template>
  <div class="q-pa-md">
    <q-layout
      view="lhh LpR lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
      
    >
      <q-drawer
        side="left"
        v-model="drawerRight"
        bordered
        :width="200"
        :breakpoint="500"
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <div class="test">
            <div class="q-pa-md">
              <div class="cursor-pointer">
                {{ nickname }}
                <q-popup-edit v-model="nickname">
                  <template
                    v-slot="{
                      initialValue,
                      value,
                      emitValue,
                      validate,
                      set,
                      cancel
                    }"
                  >
                    <q-input
                      autofocus
                      dense
                      :value="nickname"
                      hint="Changez l'attribut"
                      :rules="[]"
                      @input="emitValue"
                    >
                      <template v-slot:after>
                        <q-btn
                          flat
                          dense
                          color="negative"
                          icon="cancel"
                          @click.stop="cancel"
                        />
                        <q-btn
                          flat
                          dense
                          color="positive"
                          icon="check_circle"
                          @click.stop="set"
                          :disable="
                            validate(value) === false || initialValue === value
                          "
                        />
                      </template>
                    </q-input>
                  </template>
                </q-popup-edit>
              </div>
            </div>

            <h6>Diagramme de Classe</h6>

            <svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" ref="box" class="box">
          
              <!-- Rounded corner rect element -->
              
     <defs>
    <g id="Port">
      <rect width="50" height="50" rx="15" ry="15" 
              class="square"
      fill="red"
      :x="square.x"
      :y="square.y"
      :style="cursor"
      @mousedown="drag"
      @mouseup="drop"
      />
    </g>
  </defs>
    <use x=+50 href="#Port" />
    

            </svg>
            <hr />
            <h6>Diagramme de Séquence</h6>
            <hr />
            <h6>Diagramme BPMN</h6>
          </div>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <q-page>
          <q-btn
            flat
            @click="drawerRight = !drawerRight"
            round
            dense
            icon="menu"
          />
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

export default {
  name: 'HelloWorld',
  components: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    DiagramEditor
  },
  data() {
    return {
      square: {
        x: 0,
        y: 0,
      },
      dragOffsetX: null,
      dragOffsetY: null,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      drawerLeft: false,
      drawerRight: true,
      nickname: 'Attribut',
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
  ,
  computed: {
    cursor() {
      return `cursor: ${this.dragOffsetX ? 'grabbing' : 'grab'}`
    },
  },
  methods: {
    drag({offsetX, offsetY}) {
      this.dragOffsetX = offsetX - this.square.x;
      this.dragOffsetY = offsetY - this.square.y;
      this.$refs.box.addEventListener('mousemove', this.move)
    },
    drop() {
      this.dragOffsetX = this.dragOffsetY = null;
      this.$refs.box.removeEventListener('mousemove', this.move)
    },
    move({offsetX, offsetY}) {
      this.square.x = offsetX - this.dragOffsetX;
      this.square.y = offsetY - this.dragOffsetY;
    }
  }
};
</script>

<style>
h3,
h2 {
  font-size: 14px;
}
.test {
  padding-left: 10px !important ;
}
h6 {
  margin-bottom : 5px ; 
  margin-top : 5px ; 
}
</style>
