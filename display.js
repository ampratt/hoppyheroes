function Display(bird, music, crashSound, maxHits) {

  this.score = 0;
  this.distance = 0;
  this.hitCount = maxHits;
  this.penalty = 0;

  function quitGame() {
    music.stop();
    crashSound.stop();
    remove();
    // var urlPath = getURLPath();
    // console.log('url: ', urlPath);
    // history.push('/');
    // window.location = '/';
  }
  this.show = function () {
    this.display = createDiv(''); //.size(windowWidth, windowHeight);
    this.display.class('scoreDisplay');
    this.distanceDisplay = createElement('h3', 'Distance: 0');
    this.hitsDisplay = createElement('h3', 'Hits Left: 0');
    this.scoreDisplay = createElement('h3', 'Score: 0');
    this.distanceDisplay.parent(this.display);
    this.hitsDisplay.parent(this.display);
    this.scoreDisplay.parent(this.display);

    // this.button = createButton('Exit');
    this.button = createA('./', 'Exit');
    // this.button.position(windowWidth, windowHeight);
    this.button.class('exitBtn');
    this.button.parent(this.display);
    this.button.mousePressed(quitGame);
  }

  this.update = function () {
    this.hitCount = bird.getHitCount();
    this.distance = Math.floor(frameCount / 20);
    // this.penalty = Math.abs(this.hitCount) * 4;
    this.score = Math.round(this.distance * 3.14159); // - this.penalty;
    this.scoreDisplay.html(`Distance: ${this.distance}. Hits: ${this.hitCount}. Score: ${this.score}`)
    this.distanceDisplay.html(`Distance: ${this.distance}`);
    this.hitsDisplay.html(`Hits Left: ${this.hitCount}`);
    this.scoreDisplay.html(`Score: ${this.score}`);
  }
}