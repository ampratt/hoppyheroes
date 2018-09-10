import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../p5/sketch'
import queryString from 'query-string';

// ({ history, match, location })
class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'unicorn',
      difficulty: 'easy',
      files: null
    }
  }

  componentDidMount() {
    const parsedParams = queryString.parse(this.props.location.search);
    this.setState({
      player: parsedParams.player,
      difficulty: parsedParams.difficulty
    });
    this._setPlayerSettings(parsedParams.player.toUpperCase());
  }

  _setPlayerSettings = (player) => {
    let files;
    switch (player) {
      case 'UNICORN':
        files = {
          backgroundMusic: './assets/music/unicorn.mp3',
          backgroundImage: './assets/img/backgrounds/rainbow-drawing.jpg',
          playerImage: './assets/img/players/unicorn.png'
        }
        break;
      case 'BATMAN':
        files = {
          backgroundMusic: './assets/music/bensound-epic.mp3',
          backgroundImage: './assets/img/backgrounds/batman_background.jpg',
          playerImage: './assets/img/players/batman.png'
        }
        break;
      default:
        files = {
          backgroundMusic: './assets/music/unicorn.mp3',
          backgroundImage: './assets/img/backgrounds/rainbow-drawing.jpg',
          playerImage: './assets/img/players/unicorn.png'
        }
        break;
    }
    this.setState({ files: files });
  }

  render() {
    const { history } = this.props;
    const { player, difficulty, files } = this.state;
    return (
      <div>
        <P5Wrapper sketch={sketch} player={player} difficulty={difficulty} files={files} history={history} />
      </div>
    );
  }
}

export default Play;