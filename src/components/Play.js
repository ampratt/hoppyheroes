import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../p5/sketch'
import queryString from 'query-string';

// ({ history, match, location })
class Play extends Component {
  constructor(props) {
    super(props);
    this.state = { player: 'unicorn', difficulty: 'easy' }
  }

  componentDidMount() {
    const parsedParams = queryString.parse(this.props.location.search);
    this.setState({
      player: parsedParams.player,
      difficulty: parsedParams.difficulty
    });
  }

  render() {
    const { history, match } = this.props;
    const { player, difficulty } = this.state;
    return (
      <div>
        <P5Wrapper sketch={sketch} player={player} difficulty={difficulty} history={history} />
      </div>
    );
  }
}

export default Play;