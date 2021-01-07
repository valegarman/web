<template>
  <section>
    <div id="phaser-game" class="phaser-game"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      game: null,
    }
  },
  mounted() {
    if (process.browser) {
      const Preload = require('~/lib/scenes/Preload')
      const Home = require('~/lib/scenes/Home')
      const PlayScene = require('~/lib/scenes/PlayScene')
      const gameConfig = require('~/lib/gameConfig')
      const home = new Home()
      const playScene = new PlayScene()
      const preload = new Preload()
      const scene = [preload, home, playScene]
      this.initializeGame({ scene, gameConfig })
    }
  },
  methods: {
    initializeGame({ scene, gameConfig }) {
      const Phaser = require('phaser')
      this.game = new Phaser.Game({
        ...gameConfig,
        parent,
        scene,
      })
    },
    setColor({ value }) {
      this.game.scene.scenes[1].cameras.main.setBackgroundColor(value)
    },
    destroyGame() {
      this.game.destroy()
    },
  },
}
</script>
<style scoped>
.phaser-game {
  max-height: 600px;
}
</style>
