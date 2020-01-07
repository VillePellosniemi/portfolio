import React from 'react';
import '../styles/Work.scss';
import sr from './scrollReveal';
import TvMaze from '../images/tv-maze.png';
import Menu from '../images/menu.png';
import Player from '../images/play-button.png';
import Login from '../images/login.png';
import Code from '../images/code.png';
import HTML from '../images/html.png';
import CSS from '../images/css.png';
import JS from '../images/js.png';
import REACT from '../images/react.png';
import PS from '../images/ps.png';

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
          <div className="left2">
            <ul id="list">
              <li className="list-item">
                <img className="ikoni" src={HTML} alt="html"/>
              </li>
              <li className="list-item">
                <img className="ikoni" src={CSS} alt="css"/>
              </li>
              <li className="list-item">
                <img className="ikoni" src={JS} alt="css"/>
              </li>
              <li className="list-item">
                <img className="ikoni" src={REACT} alt="css"/>
              </li>
              <li className="list-item">
                <img className="ikoni" src={PS} alt="css"/>
              </li>
            </ul>
          </div>
          <div className="middle2" ref="box3">
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
          <div className="right2">
            <p>making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32.</p>
          </div>

        </div>
    );
  }
}

export default Work;
