import React from 'react';
import classNames from 'classnames';

const DifficultySelector = ({ difficulty, handleSetDifficulty, selected }) => {
  const classes = classNames({
    'difficultyBtn': true,
    'selected': selected
  });
  return (
    <div className={classes}>
      <a onClick={() => handleSetDifficulty(difficulty)}>{difficulty}</a>
    </div>
  );
}
export default DifficultySelector;