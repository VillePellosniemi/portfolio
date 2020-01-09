import React, {Component} from 'react';
import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <About/>
          <Work/>
        </div>
    );
  }
}

export default App;
