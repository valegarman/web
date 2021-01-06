<template>
  <div id="funko-container" class="pt-3 mb-8">
    <canvas
      ref="canvas"
      :width="`${width * scale}px`"
      :height="`${height * scale}px`"
      @click="step"
    ></canvas>
  </div>
</template>

<script>
export default {
  data: () => ({
    img: null,
    scale: 0.3,
    width: 406,
    height: 599,
    canvas: null,
    ctx: null,
    scaledWidth: null,
    scaledHeight: null,
    cycleLoop: [0, 1, 2, 0, 3, 5, 0, 4, 0, 4],
    currentLoopIndex: 0,
    frameCount: 0,
  }),
  mounted() {
    this.img = new Image()
    this.img.src = '/images/funkoManu-406-sprit.png'
    const step = this.step
    function init() {
      window.requestAnimationFrame(step)
    }
    this.img.onload = function () {
      init()
    }
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')

    this.scaledWidth = this.scale * this.width
    this.scaledHeight = this.scale * this.height
  },
  methods: {
    drawFrame(frameX, frameY, canvasX, canvasY) {
      this.ctx.drawImage(
        this.img,
        frameX * this.width,
        frameY * this.height,
        this.width,
        this.height,
        canvasX,
        canvasY,
        this.scaledWidth,
        this.scaledHeight
      )
    },
    step() {
      this.frameCount++
      this.frameCount = 0
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.drawFrame(this.cycleLoop[this.currentLoopIndex], 0, 0, 0)
      this.currentLoopIndex++
      if (this.currentLoopIndex >= this.cycleLoop.length) {
        this.currentLoopIndex = 0
      }
    },
  },
}
</script>

<style scoped>
#funko-container {
  text-align: center;
}
</style>
