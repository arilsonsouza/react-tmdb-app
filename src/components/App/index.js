import React, { Component } from 'react';

import './App.css';
import Navbar from '../Navbar'

class App extends Component {
  render() {
    return (
      <div className='App'>
            <Navbar/>
            <section className='main'>
                <h1>Main</h1>
            </section>
      </div>
    );
  }
}

export default App;
