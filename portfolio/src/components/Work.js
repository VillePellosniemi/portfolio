import React from 'react';
import '../styles/Work.scss';
import sr from './scrollReveal';
import TvMaze from '../images/tv-maze.png';
import Menu from '../images/menu.png';
import Player from '../images/play-button.png';
import Login from '../images/login.png';
import Code from '../images/code.png';

class Work extends React.Component {

  props: Props;

  componentDidMount = () => {
    const config = {
      origin: 'left',
      duration: 1200,
      delay: 300,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };

    sr.reveal(this.refs.box3, config);
  };

  render() {
    return (
        <div id="work">
          <h1 id="skills">SKILLS & WORK</h1>
          <div className="images" ref="box3">
            <div className="box">
              <img className="image" src={Menu} alt="menu"/>
            </div>
            <div className="box">
              <img className="image" src={Player} alt="player"/>
            </div>
            <div className="box">
              <img className="image" src={TvMaze} alt="tv-maze"/>
            </div>
            <div className="box">
              <img className="image" src={Login} alt="login"/>
            </div>
            <div className="box">
              <img className="image" src={Code} alt="code"/>
            </div>
            <div className="box">
              <img className="image" src={Code} alt="tv-maze"/>
            </div>
          </div>
        </div>
    );
  }
}

export default Work;
