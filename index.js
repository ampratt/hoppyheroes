(function () {
  // your page initialization code here
  // the DOM will be available here

  difficulties = ['easy', 'medium', 'hard'];
  players = ['unicorn', 'batman'];

  let player = 'unicorn';
  let difficulty = 'easy';

  setInitialSelections = () => {
    player = localStorage.player;
    difficulty = localStorage.difficulty
    document.getElementById(player).classList.add('selected');
    document.getElementById(difficulty).classList.add('selected');
  }

  // initial settings
  if (localStorage.player === undefined || localStorage.difficulty === undefined) {
    console.log('default localstorage');
    localStorage.setItem('player', player);
    localStorage.setItem('difficulty', difficulty);
  }
  setInitialSelections();

  removeClasses = (items, classname) => {
    items.forEach(item => {
      document.getElementById(item).classList.remove(classname);
    });
  }

  document.getElementById("easy").onclick = function (e) {
    difficulty = this.value;
    localStorage.setItem('difficulty', difficulty);
    removeClasses(difficulties, 'selected');
    this.classList.add('selected');
  };
  document.getElementById("medium").onclick = function (e) {
    difficulty = this.value;
    localStorage.setItem('difficulty', difficulty);
    removeClasses(difficulties, 'selected');
    this.classList.add('selected');
  };
  document.getElementById("hard").onclick = function (e) {
    difficulty = this.value;
    localStorage.setItem('difficulty', difficulty);
    removeClasses(difficulties, 'selected');
    this.classList.add('selected');
  };
  // document.getElementsByClassName("difficultyBtn").onclick = function (e) {
  //   // e.preventDefault();
  //   console.log('difficulty: ', e);
  //   difficulty = e;
  // };


  // PLAYER SELECTION
  document.getElementById("unicorn").onclick = function (e) {
    // player = 'unicorn';
    player = this.value;
    console.log(player);
    localStorage.setItem('player', player);
    removeClasses(players, 'selected');
    this.classList.add('selected');
  };
  document.getElementById("batman").onclick = function (e) {
    // player = 'batman';
    player = this.value;
    console.log(player);
    localStorage.setItem('player', player);
    removeClasses(players, 'selected');
    this.classList.add('selected');
  };
  // document.getElementsByClassName("playerSelector").onclick = function (e) {
  //   e.preventDefault();
  //   console.log('selected: ', e);
  //   player = e;
  //   localStorage.setItem('player', player);
  // };

  document.getElementById("playBtn").onclick = function (e) {
    e.preventDefault();
    window.location.href = 'play.html';
    // window.location.href = `play.html?player=${player}&difficulty=${difficulty}`;
  };

})();