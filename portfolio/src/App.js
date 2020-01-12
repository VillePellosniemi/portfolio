import React, {Component} from 'react';
import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar/>
          <Header/>
          <section id="about-scroll">
            <About/>
          </section>
          <section id="work-scroll">
            <Work/>
          </section>
          <section id='contact-scroll'>
            <Contact/>
          </section>
        </div>
    );
  }
}

export default App;
