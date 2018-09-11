function Bird(playerImage, crashSound, maxHits) {
  this.playerImage = playerImage;
  this.y = height / 2;
  this.x = 100;
  this.imgHeight = 45;

  this.gravity = 0.6;
  this.jump = -15;
  this.velocity = 0;

  this.hitCount = maxHits;
  // this.maxHits = maxHits;
  this.gameover = false;
  this.crashed = false;
  this.highlightDuration = 0;
  this.gameover = false;
  this.hitCeilingFloor = false;
  this.hitPipe = false;
  this.ranSound = false;
  this.crashSound = crashSound; // loadSound('assets/sounds/tim_crash_short.mp3');

  this.show = () => {
    fill(255);
    if (this.crashed || this.highlightDuration !== 0) {
      fill(255, 0, 0);
      // this.crashSound.play();
      this.crashed = false;
      // this.gameover = true;
    }
    if (this.highlightDuration !== 0 && (frameCount - this.highlightDuration > 5)) {
      // this.hitCount += 1;
      this.highlightDuration = 0;
    }

    // ellipse(this.x, this.y, 32, 32);
    imageMode(CENTER);
    image(playerImage, this.x, this.y, this.imgHeight, this.imgHeight);
    noStroke();
  }

  this.up = () => {
    this.velocity += this.jump;
    this.y += this.velocity;
  }

  this.crash = () => {
    if ((this.hitCeilingFloor && !this.ranSound) || this.hitPipe) {
      this.crashSound.setVolume(0.8);
      this.crashSound.play();
      this.hitCount -= 1;
      this.ranSound = true;
      this.hitPipe = false;
      // if (this.hitCount === this.maxHits) this.gameover = true;
    }
    this.crashed = true;
    this.highlightDuration = frameCount;
  }

  this.getHitCount = () => this.hitCount;

  this.isGameOver = () => this.hitCount === 0;

  this.update = () => {
    this.velocity += this.gravity;
    this.velocity *= 0.95;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.hitCeilingFloor = true;
      if (!this.gameover) this.crash();
    } else if (this.y < 0) {
      this.y = 0;
      this.hitCeilingFloor = true;
      if (!this.gameover) this.crash();
    } else {
      this.hitCeilingFloor = false;
      this.ranSound = false;
    }
  }


}