<!--<template>
    <div>
        <p>This is a Vue component and below is the current date:<br/>{{date}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: new Date(),
            };
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>-->

<template>
    <div>
        <h1>Home</h1>
        <div id="app"></div>
    </div>
</template>
<!--
<script>
    export default {
        mounted() {
            let graph = new joint.dia.Graph;

            let paper = new joint.dia.Paper({
                el: $('#app'),
                width: 600,
                height: 200,
                model: graph,
                gridSize: 1,
            });

            let rect = new joint.shapes.basic.Rect({
                position: { x: 100, y: 30 },
                size: { width: 100, height: 30 },
                attrs: { rect: { fill: 'blue' }, text: { text: 'my box', fill: 'white' } }
            });

            let rect2 = rect.clone();
            rect2.translate(300);

            let link = new joint.dia.Link({
                source: { id: rect.id },
                target: { id: rect2.id }
            });

            graph.addCells([rect, rect2, link]);
        }
    }
</script>
-->
