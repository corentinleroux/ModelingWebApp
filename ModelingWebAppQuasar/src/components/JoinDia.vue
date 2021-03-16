<template>
  <div>
    <div ref="myholder"></div>
  </div>
</template>

<script>
window.$ = require('jquery');
window.joint = require('jointjs');
  export default {
    name: 'JointDia',
    mounted() {
      this.graph = new joint.dia.Graph
      this.graph.on('add', (elm) => {
        console.log('add : ' + elm.cid)
      })
      let paper = new joint.dia.Paper({
        el: this.$refs.myholder,
        model: this.graph,
        width: window.innerWidth,
        height: window.innerHeight,
        gridSize: 1,
        drawGrid: true,
        background: {
          color: 'rgba(63, 127, 191, 0.2)'
        }
      })
      paper.on('cell:pointerup', (cellView) => {
        const linkMode = this.linkMode
        if (!linkMode) return
        if (this.from === null) {
          cellView.highlight()
          this.cellViewFrom = cellView
          this.from = cellView.model
        } else if (this.to === null) {
          this.to = cellView.model
        }
        if (this.from && this.to) {
          this.addLink(this.from, this.to)
          this.from = null
          this.to = null
          this.cellViewFrom.unhighlight()
        }
      })
      const rect1 = this.addNode('ex1')
      const rect2 = this.addNode('ex2')
      const rect3 = this.addNode('ex3')
      this.addLink(rect1, rect2)
      this.addLink(rect1, rect3)
    },
    data() {
      return {
        graph: {},
        colors: ['red', 'blue','green'],
        cellViewFrom: null,
        from: null,
        to: null,
      }
    },
    props: {
      nodeName: String,
      linkMode: Boolean,
    },
    watch: {
      nodeName: {
        handler (newVal, oldVal) {
          this.addNode(newVal)
        }
      },
      linkMode: {
        handler (newVal, oldVal) {
          if (this.cellViewFrom) {
            this.cellViewFrom.unhighlight()
          }
          this.cellViewFrom = null
          this.from = null
          this.to = null
        }
      }
    },
    methods: {
      addNode(name) {
        const rect = new joint.shapes.standard.Rectangle()
        const x = Math.random() * 330
        const y = Math.random() * 220
        rect.position(x, y)
        rect.resize(100, 40)
        rect.attr({
          body: {
            fill: this.colors[parseInt(Math.random() * Math.floor(this.colors.length))]
          },
          label: {
            text: name,
            fill: 'white'
          }
        })
        rect.on('change:position', (e, position)=> {
          console.log(e.cid, position.x, position.y)
        })
        rect.addTo(this.graph)
        return rect
      },
      addLink(source, target) {
        const link = new joint.shapes.standard.Link()
        link.source(source)
        link.target(target)
        link.addTo(this.graph)
      }
    }
  }
</script>