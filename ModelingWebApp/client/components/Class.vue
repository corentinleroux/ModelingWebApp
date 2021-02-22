<!--
          RAB
-->
<template>
  <div>
    <div  id="myholder" @click="createClass">Click</div>
    <h4>Nom</h4>
    <input type="text" v-model="nameC">
   
  </div>
</template>

<script>
export default {
  data: {
    nameC: "",
  },
  methods: {
    createClass() {
      let graph = new joint.dia.Graph();

      let paper = new joint.dia.Paper({
        el: document.getElementById('myholder'),
        width: 600,
        height: 600,
        model: graph,
        gridSize: 1,
      });

      var uml = joint.shapes.uml;
      var classes = {
        ma: new uml.Interface({
          position: { x: 300, y: 50 },
          size: { width: 240, height: 100 },
          name: this.nameC,
          attributes: ["dob: Date"],
          methods: [
            "+ setDateOfBirth(dob: Date): Void",
            "+ getAgeAsDays(): Numeric",
          ],
          attrs: {
            ".uml-class-name-rect": {
              fill: "#feb662",
              stroke: "#ffffff",
              "stroke-width": 0.5,
            },
            ".uml-class-attrs-rect": {
              fill: "#fdc886",
              stroke: "#fff",
              "stroke-width": 0.5,
            },
            ".uml-class-methods-rect": {
              fill: "#fdc886",
              stroke: "#fff",
              "stroke-width": 0.5,
            },
            ".uml-class-attrs-text": {
              ref: ".uml-class-attrs-rect",
              "ref-y": 0.5,
              "y-alignment": "middle",
            },
            ".uml-class-methods-text": {
              ref: ".uml-class-methods-rect",
              "ref-y": 0.5,
              "y-alignment": "middle",
            },
          },
        }),
      };
      Object.keys(classes).forEach(function (key) {
        graph.addCell(classes[key]);
      });
    },
  },
};
</script>
