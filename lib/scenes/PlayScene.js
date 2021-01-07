const { Scene } = require('phaser')

const rithms = [[0, 1.5], [1], [2]]

module.exports = class PlayScene extends Scene {
  constructor() {
    super({ key: 'PlayScene' })
    this.jumpVelocity = 1800
    this.delayObjects = 20000
  }

  create() {
    this.cursors = null
    this.score = 0
    this.scoreText = null
    this.customObj = {
      obstacles: {},
      platform: {},
      computer: {},
      player: {},
    }

    this.customObj.platform = this.physics.add.staticGroup()

    this.customObj.platform
      .create(this.scale.width * 0.5, this.scale.height * 1, 'ground')
      .setScale(2)
      .refreshBody()

    this.customObj.player = this.physics.add.sprite(
      this.scale.width * 0.25,
      this.scale.height * 0.7,
      'dude'
    )

    this.customObj.player.setScale(2)

    this.customObj.computer = this.physics.add.sprite(
      this.scale.width * 0.1,
      this.scale.height * 0.8,
      'computer'
    )

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 8,
      repeat: -1,
    })

    this.cursors = this.input.keyboard.createCursorKeys()
    this.pointer = this.input.activePointer

    this.scoreText = this.add.text(
      this.scale.width * 0.1,
      this.scale.height * 0.1,
      'Score: 0',
      this.game.customParams.styleText
    )

    this.customObj.player.anims.play('right', true)

    this.physics.add.collider(this.customObj.player, this.customObj.platform)
    this.physics.add.collider(this.customObj.computer, this.customObj.platform)

    this.customObj.timeEvent = this.time.addEvent({
      delay: this.delayObjects,
      callback: this.createObstacles,
      callbackScope: this,
      loop: true,
    })

    this.customObj.obstacles = this.physics.add.group({ allowGravity: false })

    this.createObstacles()
    this.physics.add.overlap(
      this.customObj.player,
      this.customObj.obstacles,
      this.collectObstacle,
      null,
      this
    )
    this.physics.add.overlap(
      this.customObj.computer,
      this.customObj.obstacles,
      this.destroyObstacle,
      null,
      this
    )
  }

  update() {
    if (
      this.input.activePointer.isDown ||
      this.cursors.up.isDown ||
      this.cursors.space.isDown
    ) {
      if (this.customObj.player.body.touching.down) {
        this.jump()
      } else if (this.customObj.player.body.velocity.y > 0) {
        this.jumpDown()
      }
    }
  }

  jump() {
    this.customObj.player.setVelocityY(-this.jumpVelocity)
    this.customObj.player.anims.pause()
    this.time.addEvent({
      delay: 700,
      callback: () => this.customObj.player.anims.resume(),
      callbackScope: this,
      loop: false,
    })
  }

  jumpDown() {
    this.customObj.player.setVelocityY(this.jumpVelocity)
  }

  createObstacles() {
    const pulses = 32
    let currentPulse = 1
    while (pulses - currentPulse > 0) {
      const num = Math.floor(Math.random() * rithms.length)
      const durationRithm = Math.floor(rithms[num][rithms[num].length - 1] + 1)
      if (durationRithm <= pulses - currentPulse) {
        for (let i = 0; i < rithms[num].length; i++) {
          const obstacleType =
            Math.floor(Math.random() * 400) === 0
              ? 'win'
              : Math.floor(Math.random() * 2)
              ? 'obstacle'
              : 'coin'

          this.createObstacle(obstacleType, currentPulse + rithms[num][i])
        }
      }
      currentPulse = currentPulse + durationRithm
    }
    this.customObj.obstacles.setVelocityX(-this.scale.width * 0.35)
  }

  createObstacle(key, pulse) {
    const distanceAbsolutePulse = this.scale.width * 0.234
    const distanceAbsolute = distanceAbsolutePulse * (pulse - 1)

    const setXY = {
      x: this.scale.width + distanceAbsolute,
      y: this.scale.height * 0.9,
    }

    let keyFromArrray
    if (key === 'obstacle') {
      const element = Math.floor(
        Math.random() * this.game.customParams.badObstacles.length
      )
      keyFromArrray = this.game.customParams.badObstacles[element]
    } else if (key === 'coin') {
      const element = Math.floor(
        Math.random() * this.game.customParams.goodObstacles.length
      )
      keyFromArrray = this.game.customParams.goodObstacles[element]
    } else {
      keyFromArrray = key
    }

    const obstacle = this.add.sprite(setXY.x, setXY.y, keyFromArrray)

    obstacle.kind = key === 'obstacle' ? 0 : key === 'win' ? 2 : 1
    obstacle.setScale(2)
    this.customObj.obstacles.add(obstacle)
  }

  collectObstacle(_player, obstacle) {
    switch (obstacle.kind) {
      case 0:
        this.scene.pause()
        this.gameFinal({ text: 'GAME OVER' })
        break
      case 2:
        this.scene.pause()
        this.gameFinal({ text: 'WIN' })
        break
      default:
        obstacle.destroy()
        this.score += 10
        this.scoreText.setText('Score: ' + this.score)
    }
  }

  destroyObstacle(_computer, obstacle) {
    obstacle.destroy()
  }

  gameFinal(message) {
    this.uiBlocked = true
    const style = { ...this.game.customParams.styleText, align: 'center' }
    this.add
      .text(
        this.game.customParams.centerX,
        this.game.customParams.centerY * 1.3,
        message.text,
        style
      )
      .setOrigin(0.5, 0.5)
    setTimeout(() => {
      this.scene.start('Home', message)
    }, 500)
  }
}
