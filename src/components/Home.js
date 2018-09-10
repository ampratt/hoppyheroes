import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PlayerSelector from './PlayerSelector'
import DifficultySelector from './DifficultySelector'

const players = ['unicorn', 'batman'];
const difficulties = ['easy', 'medium', 'hard'];

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { player: 'unicorn', difficulty: 'easy' };
    // this.handleplayerSelect = this.handleplayerSelect.bind(this);
  }

  handleSetDifficulty = (difficulty) => {
    this.setState({ difficulty: difficulty });
  }

  handlePlayerSelect = (player) => {
    this.setState({ player: player });
  }

  render() {
    const playerItems = players.map((name, i) =>
      <PlayerSelector key={i} name={name} handlePlayerSelection={this.handlePlayerSelect}
        selected={this.state.player === name ? true : false} />
    );
    const difficultyItems = difficulties.map((difficulty, i) =>
      <DifficultySelector key={i} difficulty={difficulty} handleSetDifficulty={this.handleSetDifficulty}
        selected={this.state.difficulty === difficulty ? true : false} />
    );
    const { player, difficulty } = this.state;
    return (
      <div>
        <h1>Hoppy Heroes</h1>
        <div className="menuSelectors">
          <div className="difficultiesWrapper">
            {difficultyItems}
          </div>
          <div className="playerSelectorsWrapper">
            {playerItems}
          </div>
          <Link className="playBtn" to={`/play?player=${player}&difficulty=${difficulty}`}>Play</Link>
        </div>
      </div>
    );
  }
}

export default Home
  // < Link className = "playBtn" to = {`/play/${this.state.player}`}> Play</Link >

// <Link className="settingsBtn" to='/settings'>Settings</Link>
      // <PlayerSelector name={'batman'} handlePlayerSelection={this.handleplayerSelect} />
      // <PlayerSelector name={'unicorn'} handlePlayerSelection={this.handleplayerSelect} />

  // <header className="App-header">
  //   <img src={logo} className="App-logo" alt="logo" />
  //   <nav>
  //     <ul>
  //       <li><Link to='/'>Home</Link></li>
  //       <li><Link to='/settings'>Settings</Link></li>
  //       <li><Link to='/play'>Play</Link></li>
  //     </ul>
  //   </nav>
  //   <h1 className="App-title">Welcome to FlappyBird</h1>
  // </header>

  // import React, { Component } from 'react';

// class Home extends Component {
//   render() {
//     return (
//       <div>
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to FlappyBird</h1>
//         </header>
//         <Main />
//       </div>
//     );
//   }
// }
// export default App;