import React from 'react';
import './App.css';
import Committee from './components/commitee';
import About from './components/About/About';
import CallForPapers from './components/Call/CallPappers';
function App() {
  return (
    <div className="App">
      {/* Header section with a single image */}
      <header className="header">
        <img
          src="https://via.placeholder.com/1200x400" // Replace with your desired image URL
          alt="Header"
          className="header-image"
        />
      </header>

      {/* Centered content section */}
      <div className="center-content">
        <Committee />
      </div>
      <About/>
      <CallForPapers/>
      {/* Two-column sections */}
      {/* <div className="two-columns">
        <div className="column">
          <p>Content on the left side.</p>
          <p>This is an example of left-aligned content in the two-column layout.</p>
        </div>
        <div className="column">
          <p>Content on the right side.</p>
          <p>This is an example of right-aligned content in the two-column layout.</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
