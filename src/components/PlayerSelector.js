import React from 'react';
import classNames from 'classnames';

const PlayerSelector = ({ name, handlePlayerSelection, selected }) => {
  const classes = classNames({
    'playerSelector': true,
    'selected': selected
  });
  return (
    <div className={classes} onClick={() => { handlePlayerSelection(name) }}>
      <img src={`./assets/img/players/${name}.png`} className="playerSelectorLogo" alt="player-logo" />
      <h3>{name}</h3>
    </div>
  );
}
export default PlayerSelector;