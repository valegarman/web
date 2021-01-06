<template>
  <div id="funko-container" class="pt-3 mb-8">
    <canvas
      ref="canvas"
      :width="`${width * scale}px`"
      :height="`${height * scale}px`"
      @click="onFunko"
    ></canvas>
  </div>
</template>

<script>
export default {
  data: () => ({
    scale: 0.3,
    width: 406,
    height: 599,
  }),
  mounted() {
    const img = new Image()
    img.src = '/images/funkoManu-406-sprit.png'
    img.onload = function () {
      init()
    }
    const canvas = this.$refs.canvas
    const ctx = canvas.getContext('2d')

    const scale = this.scale
    const width = this.width
    const height = this.height
    const scaledWidth = scale * width
    const scaledHeight = scale * height

    function drawFrame(frameX, frameY, canvasX, canvasY) {
      ctx.drawImage(
        img,
        frameX * width,
        frameY * height,
        width,
        height,
        canvasX,
        canvasY,
        scaledWidth,
        scaledHeight
      )
    }

    const cycleLoop = [0, 1, 2, 3, 4, 5]
    let currentLoopIndex = 0
    let frameCount = 0

    function step() {
      frameCount++
      if (frameCount < 15) {
        window.requestAnimationFrame(step)
        return
      }
      frameCount = 0
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0)
      currentLoopIndex++
      if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0
      }
      window.requestAnimationFrame(step)
    }

    function init() {
      window.requestAnimationFrame(step)
    }
  },
  methods: {
    onFunko() {
      console.log('asdsahdgsadas')
    },
  },
}
</script>

<style scoped>
#funko-container {
  text-align: center;
}
</style>
