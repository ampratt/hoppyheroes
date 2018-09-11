(function () {
  // your page initialization code here
  // the DOM will be available here

  let player = 'unicorn';
  let difficulty = 'easy';


  document.getElementById("easy").onclick = function (e) {
    difficulty = 'easy';
  };
  document.getElementById("medium").onclick = function (e) {
    difficulty = 'medium';
  };
  document.getElementById("hard").onclick = function (e) {
    difficulty = 'hard';
  };

  // document.getElementsByClassName("difficultyBtn").onclick = function (e) {
  //   // e.preventDefault();
  //   console.log('difficulty: ', e);
  //   difficulty = e;
  // };

  document.getElementsByClassName("playerSelector").onclick = function (e) {
    e.preventDefault();
    console.log('selected: ', e);
    player = e;
  };

  document.getElementById("playBtn").onclick = function (e) {
    e.preventDefault();
    window.location.href = `play.html?player=${player}&difficulty=${difficulty}`;
  };

})();