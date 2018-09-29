import React from 'react';
import classNames from 'classnames';

import { Image } from 'cloudinary-react';

const PlayerSelector = ({ name, handlePlayerSelection, selected }) => {
  const classes = classNames({
    'playerSelector': true,
    'selected': selected
  });
  return (
    <div className={classes} onClick={() => { handlePlayerSelection(name) }}>
      <Image cloudName="firsttimothy"
        publicId={`https://res.cloudinary.com/firsttimothy/image/upload/hoppyfriends/img/players/${name}.png`}
        width="55" crop="scale" />

      <h3 className="playerSelectorTitle">{name}</h3>
    </div>
  );
}
export default PlayerSelector;

// publicId={`https://res.cloudinary.com/firsttimothy/image/upload/v1538208831/hoppyfriends/img/players/${name}.png`}
// <img src={`./assets/img/players/${name}.png`} className="playerSelectorLogo" alt="player-logo" />