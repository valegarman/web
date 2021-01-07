const { Scene } = require('phaser')

module.exports = class Preload extends Scene {
  constructor() {
    super({ key: 'Preload' })
  }

  init() {
    this.game.customParams = {
      centerX: this.cameras.main.centerX,
      centerY: this.cameras.main.centerY,
      styleText: {
        fontSize: '32px',
        fill: '#000',
      },
      goodObstacles: ['good1', 'good2', 'good3'],
      badObstacles: ['bad1', 'bad2', 'bad3'],
    }
  }

  preload() {
    this.load.spritesheet('dude', '/assets/game/dude.png', {
      frameWidth: 32,
      frameHeight: 48,
    })
    this.load.image('dudeHome', '/assets/game/dudeHome.png')

    this.load.image('ground', '/assets/game/platform.png')
    this.load.image('computer', '/assets/game/computer.png')
    this.load.image('win', '/assets/game/win.png')

    // bad
    this.load.image('bad1', '/assets/game/bad1.png')
    this.load.image('bad2', '/assets/game/bad2.png')
    this.load.image('bad3', '/assets/game/bad3.png')
    // good
    this.load.image('good1', '/assets/game/good1.png')
    this.load.image('good2', '/assets/game/good2.png')
    this.load.image('good3', '/assets/game/good3.png')
  }

  create() {
    this.scene.start('Home')
  }
}
