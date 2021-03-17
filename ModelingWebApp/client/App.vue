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
<head>
    <script type="text/javascript" src="C:\workspace\ModelingWebApp\ModelingWebApp\node_modules\autolayout\AutoLayout.js"></script>
</head>
<template>
    <div>
        <h1>Home</h1>
        <div id="app"></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            let graph = new joint.dia.Graph;

            let paper = new joint.dia.Paper({
                el: $('#app'),
                width: 6000,
                height: 2000,
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
            let rect3 = rect.clone();
            rect3.translate(500);

            let link = new joint.dia.Link({
                source: { id: rect.id },
                target: { id: rect2.id }
            });
            let link2 = new joint.dia.Link({
                source: { id: rect2.id },
                target: { id: rect3.id }
            });
            
            graph.addCells([rect, rect2, rect3, link, link2]);
           
        }
    }
</script>
