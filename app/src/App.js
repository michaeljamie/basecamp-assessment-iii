import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsList from './contactsList'
import Gallery from './Gallery'
import Map from './Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://ios.devmountain.com/public/icon.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Basecamp Assessment iii</h1>
        </header>
        <p className="App-intro">
          Welcome to my 1st React Project!
        </p>
        <h1 className = "CS-list">Contacts List:</h1>
      <ContactsList />
      <h1 className = "CS-list">My Humble Abode:</h1>
      <Gallery />
      <h1 className = "CS-list">Dev Mountain Campus:</h1>
      <Map />
      <footer className="footer">
        <p className="footText">© Copyright Michael Johnston </p>
        </footer>
      </div>
    );
 
    
  }
}

export default App;
