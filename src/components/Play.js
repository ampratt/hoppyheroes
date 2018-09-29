import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { default as unicornSketch } from '../p5/sketch';
import { default as batmanSketch } from '../p5/batman/sketch';
import queryString from 'query-string';

// import axios from 'axios';
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

// ({ history, match, location })
class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      difficulty: 'easy',
      files: null
    }
  }

  componentDidMount() {
    // this.getSettingsFromQueryParams();
    // this._setPlayerSettings(parsedParams.player.toUpperCase());
    this.getSettingsFromLocalStorage();
    // axios.get('https://res.cloudinary.com/christekh/image/list/xmas.json')
    //   .then(res => {
    //     console.log(res.data.resources);
    //     this.setState({ gallery: res.data.resources });
    //   });
  }

  getSettingsFromQueryParams = () => {
    const parsedParams = queryString.parse(this.props.location.search);
    this.setState({
      player: parsedParams.player,
      difficulty: parsedParams.difficulty
    });
  }

  getSettingsFromLocalStorage = () => {
    let player = localStorage.getItem('player');
    let difficulty = localStorage.getItem('difficulty');
    this.setState({
      player: player !== null ? player : this.state.player,
      difficulty: difficulty !== null ? difficulty : this.state.difficulty
    });
  }

  // _setPlayerSettings = (player) => {
  //   let files;
  //   switch (player) {
  //     case 'UNICORN':
  //       files = {
  //         backgroundMusic: './assets/music/unicorn.mp3',
  //         backgroundImage: './assets/img/backgrounds/rainbow-drawing.jpg',
  //         playerImage: './assets/img/players/unicorn.png'
  //       }
  //       break;
  //     case 'BATMAN':
  //       files = {
  //         backgroundMusic: './assets/music/bensound-epic.mp3',
  //         backgroundImage: './assets/img/backgrounds/batman_background.jpg',
  //         playerImage: './assets/img/players/batman.png'
  //       }
  //       break;
  //     default:
  //       files = {
  //         backgroundMusic: './assets/music/unicorn.mp3',
  //         backgroundImage: './assets/img/backgrounds/rainbow-drawing.jpg',
  //         playerImage: './assets/img/players/unicorn.png'
  //       }
  //       break;
  //   }
  //   this.setState({ files: files });
  // }

  render() {
    const { history } = this.props;
    const { player } = this.state;

    if (player === null) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }
    if (player.toUpperCase() === 'UNICORN') {
      return (
        <div>
          <P5Wrapper sketch={unicornSketch} history={history} />
        </div>
      );
    }
    else if (player.toUpperCase() === 'BATMAN') {
      return (
        <div>
          <P5Wrapper sketch={batmanSketch} history={history} />
        </div>
      );
    }
  }
}

export default Play;

// <Image cloudName="firsttimothy" publicId="https://res.cloudinary.com/firsttimothy/image/upload/v1538206065/hoppyfriends/img/backgrounds/rainbow-drawing.jpg" width="300" crop="scale" />
// <P5Wrapper sketch={sketch} player={player} difficulty={difficulty} files={files} history={history} />
