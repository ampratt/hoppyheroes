import React from 'react';
import { Link } from 'react-router-dom'

const Settings = ({ setDifficulty }) => (
  <div>
    <h1>Settings</h1>
    <Link className="settingsBtn" to='/'>Home</Link>
    <div className="menuSelectors">
      <a className="setDifficulty" onClick={() => { setDifficulty('easy') }}>Easy</a>
      <a className="setDifficulty" onClick={() => { setDifficulty('medium') }}>Medium</a>
      <a className="setDifficulty" onClick={() => { setDifficulty('hard') }}>Hard</a>
    </div>
  </div>
)

export default Settings;
