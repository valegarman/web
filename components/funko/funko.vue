<template>
  <div class="pa-1">
    <div class="container-bubble">
      <div class="bubble bubble-bottom-left">
        {{ messages[actualMessage].message }}
      </div>
    </div>
    <div id="funko-container">
      <canvas
        ref="canvas"
        class="pointer"
        :width="`${width * scale}px`"
        :height="`${height * scale}px`"
        @click="animate"
      ></canvas>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    actualMessage: 0,
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
    nextMessage() {
      if (this.actualMessage < this.messages.length - 1) {
        this.actualMessage++
      } else {
        this.actualMessage = 0
      }
    },
    animate() {
      this.step()
      this.nextMessage()
    },
  },
}
</script>

<style scoped>
#funko-container {
  text-align: center;
}
.container-bubble {
  display: flex;
  flex-direction: column;
}
.pointer {
  cursor: pointer;
}
.bubble {
  align-self: center;
  position: relative;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 24px;
  max-width: 300px;
  background: #fff;
  border-radius: 40px;
  padding: 24px;
  text-align: center;
  color: #000;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
}

.bubble-bottom-left:before {
  content: '';
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 14px solid #fff;
  border-right: 24px solid transparent;
  border-top: 12px solid #fff;
  border-bottom: 20px solid transparent;
  right: 20px;
  bottom: -24px;
}
</style>
