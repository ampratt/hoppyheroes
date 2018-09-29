import Bird from './bird';
import Pipe from './pipe';
import Display from './display';
import '../../node_modules/p5/lib/addons/p5.sound.min.js';

// assets
// import { unicorn } from '..../assets/img/players/unicorn.png';

export default function sketch(p) {
  let bird;
  let pipes = [];
  let scoreDisplay;
  let crashSound;
  let backgroundMusic;

  let insertFrequency = 60;
  let prevPipeFrame = 0;

  let backgroundImage;
  let playerImage;
  let pipeColor = [250, 133, 159];
  // let c;
  let difficulty = 'easy';
  let history;
  let maxHits = 10;

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.history) {
      history = props.history;
      // console.log('props redraw: ', props);
      // console.log(props.files.backgroundMusic);
      // backgroundMusic = p.loadSound(props.files.backgroundMusic);
      // backgroundImage = p.loadImage(props.files.backgroundImage);
      // playerImage = p.loadImage(props.files.playerImage);
      // _setPlayerSettings(props.player.toUpperCase(), props.files);
      // difficulty = props.difficulty.toUpperCase();
      // maxHits = _getMaxHits(difficulty);
      // bird = new Bird(p, playerImage, crashSound, maxHits);
      // scoreDisplay = new Display(p, bird, maxHits);
      // scoreDisplay.setHistory(props.history);
    }
  };

  p.preload = function () {
    // console.log('preload');
    p.soundFormats('mp3', 'ogg');
    // https://github.com/ampratt/hoppyheroes/tree/gh-pages../assets
    // ./assets/sounds / tim_crash_short_loud.mp3
    console.log('unicorn cloudinary');
    crashSound = p.loadSound('https://res.cloudinary.com/firsttimothy/video/upload/v1538205882/hoppyfriends/sounds/tim_crash_short_loud.mp3');
    // ./assets/music / unicorn.mp3
    backgroundMusic = p.loadSound('https://res.cloudinary.com/firsttimothy/video/upload/v1538208579/hoppyfriends/music/unicorn.mp3');
    backgroundImage = p.loadImage('https://res.cloudinary.com/firsttimothy/image/upload/v1538206065/hoppyfriends/img/backgrounds/rainbow-drawing.jpg');
    // backgroundImage = p.loadImage('./assets/img/backgrounds/rainbow-drawing.jpg');
    playerImage = p.loadImage('https://res.cloudinary.com/firsttimothy/image/upload/v1538206080/hoppyfriends/img/players/unicorn.png');
    // playerImage = p.loadImage('./assets/img/players/unicorn.png');
    pipeColor = [250, 133, 159];

    difficulty = localStorage.getItem('difficulty').toUpperCase();;
    maxHits = _getMaxHits(difficulty);
    bird = new Bird(p, playerImage, crashSound, maxHits);
    scoreDisplay = new Display(p, bird, maxHits);

    // scoreDisplay; // new Display(p, bird, backgroundMusic, crashSound, null, maxHits);
  }

  p.setup = function () {
    // put setup code here
    // bird;
    // scoreDisplay;
    scoreDisplay.show();
    p.createCanvas(p.windowWidth, p.windowHeight - 60);
    // cnv.style('display', 'block');

    pipes.push(new Pipe(p, pipeColor, difficulty));
    //   backgroundImage.loadPixels();
    //   // get color of middle pixel
    //   c = backgroundImage.get(backgroundImage.width / 2, backgroundImage.height / 2);
    backgroundMusic.setVolume(0.5);
    backgroundMusic.playMode('restart');
    backgroundMusic.play();
  };


  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight - 60);
  }

  p.keyPressed = function () {
    if (p.key === ' ') {
      bird.up();
    }
  }
  p.mousePressed = function () {
    // bird.up();
    // console.log('MOUSE');
  }
  p.touchStarted = function () {
    bird.up();
  }

  function _getRandomPipeTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    // return Math.floor(Math.random() * (max - min + 1) + min);
  }

  p.draw = function () {

    // update score
    scoreDisplay.update();

    // put drawing code here
    // background(c);
    // // imageMode(CENTER);
    p.background(202, 235, 254);
    p.imageMode(p.CORNERS);
    p.image(backgroundImage, 0, 0, p.windowWidth, p.windowHeight - 65);

    bird.update();
    bird.show();

    // for (var i = 0; i < pipes.length; i++) {
    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();

      // bird hits pipe
      pipes[i].isHitBy(bird);
      // if (pipes[i].hits(bird)) {
      //   // crashSound.play();
      //   // console.log('KABLAAM! HIT!');
      // }


      // remove past pipe
      if (pipes[i].offScreen()) {
        pipes.splice(i, 1);
      }
    }

    // let insert = getRandomPipeTime(30, 90);
    // if (p.frameCount % 70 === 0) {
    if (p.frameCount >
      prevPipeFrame + insertFrequency) {

      prevPipeFrame = p.frameCount;
      pipes.push(new Pipe(p, pipeColor, difficulty));
      insertFrequency = _getRandomPipeTime(50, 110);
    }

    if (!backgroundMusic.isPlaying()) backgroundMusic.play();

    // handle gameover
    if (bird.isGameOver()) {
      backgroundMusic.stop();
      p.remove();
      history.push('/');
    }
  }

  function _getMaxHits(difficulty) {
    if (difficulty === 'EASY') {
      return 20;
    } else if (difficulty === 'MEDIUM') {
      return 15;
    } else if (difficulty === 'HARD') {
      return 10;
    }
    return 10;
  }

  // function _setPlayerSettings(player) {
  //   switch (player) {
  //     case 'UNICORN':
  //       // backgroundMusic = p.loadSound('../assets/music/unicorn.mp3');
  //       // backgroundImage = p.loadImage('../assets/img/backgrounds/rainbow-drawing.jpg');
  //       // playerImage = p.loadImage('../assets/img/players/unicorn.png');
  //       pipeColor = [250, 133, 159];
  //       break;
  //     case 'BATMAN':
  //       // backgroundMusic = p.loadSound('../assets/music/bensound-epic.mp3');
  //       // backgroundImage = p.loadImage('../assets/img/backgrounds/batman_background.jpg');
  //       // playerImage = p.loadImage('../assets/img/players/batman.png');
  //       pipeColor = [188, 196, 220]; //[255, 237, 56];
  //       break;
  //     default:
  //       break;
  //   }
  // }

}



// export default function sketch(p) {
//   let rotation = 0;

//   p.setup = function () {
//     p.createCanvas(600, 400, p.WEBGL);
//   };

//   p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
//     if (props.rotation) {
//       rotation = props.rotation * Math.PI / 180;
//     }
//   };

//   p.draw = function () {
//     p.background(100);
//     p.noStroke();
//     p.push();
//     p.rotateY(rotation);
//     p.box(100);
//     p.pop();
//   };
// }