function Pipe(pipeColors, difficulty) {

  var spacing = _getDifficulty(difficulty)
  var centerY = random(spacing, height - spacing);

  this.top = centerY - spacing / 2;
  this.bottom = height - (centerY + spacing / 2);
  this.x = width;
  this.w = 25;
  this.speed = 3;
  this.crashed = false;
  this.alreadyRegistered = false;

  function _getDifficulty(difficulty) {
    if (difficulty === 'EASY') {
      return random(85, height / 2);
    } else if (difficulty === 'MEDIUM') {
      return random(65, height / 3)
    } else if (difficulty === 'HARD') {
      return random(55, height / 5)
    }
    return random(55, height / 3);
  }

  this.isHitBy = function (bird) {
    if (this.alreadyRegistered &&
      (bird.y < this.top || bird.y > height - this.bottom)
      && (bird.x > this.x + this.w)) {
      this.crashed = false;
      this.alreadyRegistered = false;
      // bird.crash();
      // bird.crashed = false;
      return 0;
    }
    if (!this.alreadyRegistered &&
      (bird.y < this.top || bird.y > height - this.bottom)
      && (bird.x > this.x && bird.x < this.x + this.w)) {
      this.crashed = true;
      // bird.crashed = true;
      bird.hitPipe = true;
      bird.crash();
      this.alreadyRegistered = true;
      return 1;
    }
    if (this.alreadyRegistered &&
      (bird.y < this.top || bird.y > height - this.bottom)
      && (bird.x > this.x + this.w)) {
      this.crashed = false;
      bird.crash();
      // bird.crashed = false;
      this.alreadyRegistered = false;
      return 0;
    }
    return 0
  }

  this.show = () => {
    // fill(250, 133, 159);
    fill(pipeColors[0], pipeColors[1], pipeColors[2]);
    if (this.crashed) {
      fill(0, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, height);
  }

  this.update = () => {
    this.x -= this.speed;
  }

  this.offScreen = () => this.x < -this.w;
}