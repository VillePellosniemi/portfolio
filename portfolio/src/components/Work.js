import React from 'react';
import '../styles/Work.scss';
import sr from './scrollReveal';
import TvMaze from '../images/tv-maze.png';
import Menu from '../images/menu.png';
import Player from '../images/play-button.png';
import Login from '../images/login.png';
import Code from '../images/code.png';
import Icons from './Icons';

class Work extends React.Component {

  props: Props;

  componentDidMount = () => {
    const config = {
      origin: 'bottom',
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
          <Icons/>

          <div className="image-text">

            <div className="left2">
              <div className="text-grid">
              </div>
            </div>

            <div className="right2" >
              <div className="image-grid">
                <div className="container">
                  <a href="https://i.imgur.com/fe0T4nw.png"><img className="image"
                                                                 src={Menu}
                                                                 alt="menu"/></a>
                </div>
                <div className="container">
                  <img className="image" src={Player} alt="player"/>
                </div>
                <div className="container">
                  <img className="image" src={TvMaze} alt="tv-maze"/>
                </div>
                <div className="container">
                  <img className="image" src={Login} alt="login"/>
                </div>
                <div className="container">
                  <img className="image" src={Code} alt="code"/>
                </div>
                <div className="container">
                  <img className="image" src={Code} alt="tv-maze"/>
                </div>
              </div>
              </div>
          </div>

        </div>
    );
  }
}

export default Work;
