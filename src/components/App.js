import React, { Component } from 'react';
import './App.css';
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}
export default App;
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