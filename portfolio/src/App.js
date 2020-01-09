import React, {Component} from 'react';
import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <About/>
          <Work/>
          <Contact/>
        </div>
    );
  }
}

export default App;
