import '../../node_modules/p5/lib/addons/p5.dom.min.js';

export default function Display(p, bird, music, crashSound, history, maxHits) {

  this.score = 0;
  this.distance = 0;
  this.hitCount = maxHits;
  this.penalty = 0;

  function quitGame() {
    music.stop();
    crashSound.stop();
    p.remove();
    // var urlPath = p.getURLPath();
    // console.log('url: ', urlPath);
    history.push('/');
    // window.location = '/';
  }
  this.show = function () {
    this.display = p.createDiv(''); //.size(p.windowWidth, p.windowHeight);
    this.display.class('scoreDisplay');
    this.distanceDisplay = p.createElement('h3', 'Distance: 0');
    this.hitsDisplay = p.createElement('h3', 'Hits Left: 0');
    this.scoreDisplay = p.createElement('h3', 'Score: 0');
    this.distanceDisplay.parent(this.display);
    this.hitsDisplay.parent(this.display);
    this.scoreDisplay.parent(this.display);

    this.button = p.createButton('Exit');
    // this.button.position(p.windowWidth, p.windowHeight);
    this.button.class('exitBtn');
    this.button.parent(this.display);
    this.button.mousePressed(quitGame);
  }

  this.update = function () {
    this.hitCount = bird.getHitCount();
    this.distance = Math.floor(p.frameCount / 20);
    // this.penalty = Math.abs(this.hitCount) * 4;
    this.score = Math.round(this.distance * 3.14159); // - this.penalty;
    this.scoreDisplay.html(`Distance: ${this.distance}. Hits: ${this.hitCount}. Score: ${this.score}`)
    this.distanceDisplay.html(`Distance: ${this.distance}`);
    this.hitsDisplay.html(`Hits Left: ${this.hitCount}`);
    this.scoreDisplay.html(`Score: ${this.score}`);
  }
}