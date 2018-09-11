// assets
// import { unicorn } from '..../assets/img/players/unicorn.png';
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
// let history;
let maxHits;

// myCustomRedrawAccordingToNewPropsHandler = function (props) {
//   if (props.player && props.difficulty && props.files) {
//     history = props.history;
//     // console.log('props redraw: ', props);
//     console.log(props.files.backgroundMusic);
//     backgroundMusic = loadSound(props.files.backgroundMusic);
//     backgroundImage = loadImage(props.files.backgroundImage);
//     playerImage = loadImage(props.files.playerImage);
//     _setPlayerSettings(props.player.toUpperCase(), props.files);
//     difficulty = props.difficulty.toUpperCase();
//     maxHits = _getMaxHits(difficulty);
//     bird = new Bird(p, playerImage, crashSound, maxHits);
//     scoreDisplay = new Display(p, bird, backgroundMusic, crashSound, props.history, maxHits);
//   }
// };


_setPlayerSettings = (player) => {
  switch (player) {
    case 'UNICORN':
      backgroundMusic = loadSound('../assets/music/unicorn.mp3');
      backgroundImage = loadImage('../assets/img/backgrounds/rainbow-drawing.jpg');
      playerImage = loadImage('../assets/img/players/unicorn.png');
      pipeColor = [250, 133, 159];
      break;
    case 'BATMAN':
      backgroundMusic = loadSound('../assets/music/bensound-epic.mp3');
      backgroundImage = loadImage('../assets/img/backgrounds/batman_background.jpg');
      playerImage = loadImage('../assets/img/players/batman.png');
      pipeColor = [188, 196, 220]; //[255, 237, 56];
      break;
    default:
      break;
  }
}

getGameParameters = () => {
  // console.log('url settings');
  player = localStorage.getItem('player');
  difficultyLevel = localStorage.getItem('difficulty');
  // console.log('localstorage: ', difficultyLevel, player);
  return { 'player': player, 'difficultyLevel': difficultyLevel };
  // const params = new URLSearchParams(location.search);
  // const settings = [params.get('player'), params.get('difficulty')];
  // console.log('settings: ', settings);
  // return settings;
}

preload = function () {
  // console.log('preload');

  soundFormats('mp3', 'ogg');
  let { player, difficultyLevel } = getGameParameters();
  _setPlayerSettings(player.toUpperCase());
  difficulty = difficultyLevel.toUpperCase();
  maxHits = _getMaxHits(difficulty);
  crashSound = loadSound('./assets/sounds/tim_crash_short_loud.mp3');
  bird = new Bird(playerImage, crashSound, maxHits);
  scoreDisplay = new Display(bird, backgroundMusic, crashSound, maxHits);


  // https://github.com/ampratt/hoppyheroes/tree/gh-pages../assets
  // backgroundMusic = loadSound('./assets/music/unicorn.mp3');
  // backgroundImage = loadImage('./assets/img/backgrounds/rainbow-drawing.jpg');
  // playerImage = loadImage('./assets/img/players/unicorn.png');
  // pipeColor = [250, 133, 159];
}

setup = function () {
  // put setup code here
  // console.log('setup');
  // bird = new Bird(p, playerImage, crashSound);
  // bird = new Bird(playerImage, crashSound, maxHits);
  // scoreDisplay = new Display(p, bird, backgroundMusic, crashSound);
  // scoreDisplay = new Display(bird, backgroundMusic, crashSound, maxHits);
  bird;
  scoreDisplay;
  scoreDisplay.show();
  var cnv = createCanvas(windowWidth, windowHeight - 60);
  // cnv.style('display', 'block');

  pipes.push(new Pipe(pipeColor, difficulty));
  //   backgroundImage.loadPixels();
  //   // get color of middle pixel
  //   c = backgroundImage.get(backgroundImage.width / 2, backgroundImage.height / 2);
  backgroundMusic.setVolume(0.5);
  backgroundMusic.playMode('restart');
  backgroundMusic.play();
};


windowResized = function () {
  resizeCanvas(windowWidth, windowHeight - 60);
}

keyPressed = function () {
  if (key === ' ') {
    bird.up();
  }
}
mousePressed = function () {
  // bird.up();
  // console.log('MOUSE');
}
touchStarted = function () {
  bird.up();
}

function _getRandomPipeTime(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
  // return Math.floor(Math.random() * (max - min + 1) + min);
}

draw = function () {

  // update score
  scoreDisplay.update();

  // put drawing code here
  // background(c);
  // // imageMode(CENTER);
  background(202, 235, 254);
  imageMode(CORNERS);
  image(backgroundImage, 0, 0, windowWidth, windowHeight - 65);

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
  // if (frameCount % 70 === 0) {
  if (frameCount >
    prevPipeFrame + insertFrequency) {

    prevPipeFrame = frameCount;
    pipes.push(new Pipe(pipeColor, difficulty));
    insertFrequency = _getRandomPipeTime(50, 110);
  }

  if (!backgroundMusic.isPlaying()) backgroundMusic.play();

  // handle gameover
  if (bird.isGameOver()) {
    backgroundMusic.stop();
    remove();
    // history.push('/');
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




// export default function sketch(p) {
//   let rotation = 0;

//   setup = function () {
//     createCanvas(600, 400, WEBGL);
//   };

//   myCustomRedrawAccordingToNewPropsHandler = function (props) {
//     if (props.rotation) {
//       rotation = props.rotation * Math.PI / 180;
//     }
//   };

//   draw = function () {
//     background(100);
//     noStroke();
//     push();
//     rotateY(rotation);
//     box(100);
//     pop();
//   };
// }