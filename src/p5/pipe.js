export default function Pipe(p, pipeColors, difficulty) {

  var spacing = _getDifficulty(difficulty)
  var centerY = p.random(spacing, p.height - spacing);

  this.top = centerY - spacing / 2;
  this.bottom = p.height - (centerY + spacing / 2);
  this.x = p.width;
  this.w = 25;
  this.speed = 3;
  this.crashed = false;
  this.alreadyRegistered = false;

  function _getDifficulty(difficulty) {
    if (difficulty === 'EASY') {
      return p.random(85, p.height / 2);
    } else if (difficulty === 'MEDIUM') {
      return p.random(65, p.height / 3)
    } else if (difficulty === 'HARD') {
      return p.random(55, p.height / 5)
    }
    return p.random(55, p.height / 3);
  }

  this.isHitBy = function (bird) {
    if (this.alreadyRegistered &&
      (bird.y < this.top || bird.y > p.height - this.bottom)
      && (bird.x > this.x + this.w)) {
      this.crashed = false;
      this.alreadyRegistered = false;
      // bird.crash();
      // bird.crashed = false;
      return 0;
    }
    if (!this.alreadyRegistered &&
      (bird.y < this.top || bird.y > p.height - this.bottom)
      && (bird.x > this.x && bird.x < this.x + this.w)) {
      this.crashed = true;
      // bird.crashed = true;
      bird.hitPipe = true;
      bird.crash();
      this.alreadyRegistered = true;
      return 1;
    }
    if (this.alreadyRegistered &&
      (bird.y < this.top || bird.y > p.height - this.bottom)
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
    // p.fill(250, 133, 159);
    p.fill(pipeColors[0], pipeColors[1], pipeColors[2]);
    if (this.crashed) {
      p.fill(0, 0, 0);
    }
    p.rect(this.x, 0, this.w, this.top);
    p.rect(this.x, p.height - this.bottom, this.w, p.height);
  }

  this.update = () => {
    this.x -= this.speed;
  }

  this.offScreen = () => this.x < -this.w;
}