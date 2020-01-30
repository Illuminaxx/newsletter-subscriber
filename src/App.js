import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="box">
        <img src={logo} alt="" />
        <h2>Subscribe to our newsletter</h2>
        <p>Our weekly newsletter provides you with the latest and most important happenings in the industry.</p>
        <div className="form-control">
          <input className="input" placeholder="Enter your mail address"/>
          <button className="btn">Subscribe</button>
        </div>
    </div>
  );
}

export default App;
