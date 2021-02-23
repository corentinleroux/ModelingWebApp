<!--
          RAB
-->
<template>
  <div>
    <h2>UML Component</h2>
    <div id="myholder"></div>
  </div>
</template>

 <script>
export default {
  mounted() {
    var graph = new joint.dia.Graph();

    var paper = new joint.dia.Paper({
      el: document.getElementById("myholder"),
      width: 600,
      height: 600,
      model: graph,
      gridSize: 10,
    });

    function setGrid(paper, gridSize, color) {
      // Set grid size on the JointJS paper object (joint.dia.Paper instance)
      paper.options.gridSize = gridSize;
      // Draw a grid into the HTML 5 canvas and convert it to a data URI image
      var canvas = $("<canvas/>", { width: gridSize, height: gridSize });
      canvas[0].width = gridSize;
      canvas[0].height = gridSize;
      var context = canvas[0].getContext("2d");
      context.beginPath();
      context.rect(2, 2, 2, 2);
      context.fillStyle = color || "#AAAAAA";
      context.fill();
      // Finally, set the grid background image of the paper container element.
      var gridBackgroundImage = canvas[0].toDataURL("image/png");
      paper.$el.css("background-image", 'url("' + gridBackgroundImage + '")');
    }

    // Example usage:
    setGrid(paper, 10, "black");
  },
};
</script>
 