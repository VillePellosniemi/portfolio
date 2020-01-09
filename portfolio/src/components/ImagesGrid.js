import React from 'react';
import TvMaze from '../images/tv-maze.png';
import Menu from '../images/menu.png';
import Player from '../images/play-button.png';
import Login from '../images/login.png';
import Code from '../images/code.png';
import '../styles/ImagesGrid.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

class ImagesGrid extends React.Component {

  render() {
    return (
        <div className="image-text">

          <div className="left2">
            <div className="text-grid">
              <p id="skills-text">Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,<br/><br/>when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged.<br/><br/>It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently</p>
            </div>
          </div>

          <div className="right2">
            <div className="image-grid">

              <div className="container">
                <div className="overlay">
                  <div className="text">
                    <a href="http://users.metropolia.fi/~villeope/ruokalista/"
                       target="_blank"
                       rel="noopener noreferrer"><PlayCircleFilledIcon
                        className="play-icon"/></a>
                    <a href="https://github.com/VillePellosniemi/karaportti"
                       target="_blank"
                       rel="noopener noreferrer"><GitHubIcon
                        className="github-icon"/></a>
                  </div>
                </div>
                <img className="image" src={Menu} alt="menu"/>
              </div>

              <div className="container">
                <div className="overlay">
                  <div className="text">
                    <a href="http://users.metropolia.fi/~villeope/react_player/"
                       target="_blank"
                       rel="noopener noreferrer"><PlayCircleFilledIcon
                        className="play-icon"/></a>
                    <a href="https://github.com/JohnnyJii/Rahkaa2"
                       target="_blank"
                       rel="noopener noreferrer"><GitHubIcon
                        className="github-icon"/></a>
                  </div>
                </div>
                <img className="image" src={Player} alt="player"/>
              </div>

              <div className="container">
                <div className="overlay">
                  <div className="text">
                    <a href="http://users.metropolia.fi/~villeope/TV-Maze/"
                       target="_blank"
                       rel="noopener noreferrer"><PlayCircleFilledIcon
                        className="play-icon"/></a>
                    <a href="https://github.com/VillePellosniemi/web-tehtavat/tree/master/TV-Maze"
                       target="_blank"
                       rel="noopener noreferrer"><GitHubIcon
                        className="github-icon"/></a>
                  </div>
                </div>
                <img className="image" src={TvMaze} alt="tv-maze"/>
              </div>

              <div className="container">
                <div className="overlay">
                  <div className="text">
                    <a href="http://users.metropolia.fi/~villeope/react_projekti/"
                       target="_blank"
                       rel="noopener noreferrer"><PlayCircleFilledIcon
                        className="play-icon"/></a>
                    <a href="https://github.com/VillePellosniemi/react_projekti"
                       target="_blank"
                       rel="noopener noreferrer"><GitHubIcon
                        className="github-icon"/></a>
                  </div>
                </div>
                <img className="image" src={Login} alt="login"/>
              </div>

              <div className="container">
                <div className="overlay">
                  <div className="text">
                    <a href="http://users.metropolia.fi/~villeope/Javascript-jakso-2/"
                       target="_blank"
                       rel="noopener noreferrer"><PlayCircleFilledIcon
                        className="play-icon"/></a>
                    <a href="https://github.com/VillePellosniemi/web-tehtavat/tree/master/Javascript-jakso-2"
                       target="_blank"
                       rel="noopener noreferrer"><GitHubIcon
                        className="github-icon"/></a>
                  </div>
                </div>
                <img className="image" src={Code} alt="code"/>
              </div>

              <div className="container">
                <div className="overlay">
                  <div className="text">
                    <a href="http://users.metropolia.fi/~villeope/Javascript-jakso-3/"
                       target="_blank"
                       rel="noopener noreferrer"><PlayCircleFilledIcon
                        className="play-icon"/></a>
                    <a href="https://github.com/VillePellosniemi/web-tehtavat/tree/master/Javascript-jakso-3"
                       target="_blank"
                       rel="noopener noreferrer"><GitHubIcon
                        className="github-icon"/></a>
                  </div>
                </div>
                <img className="image" src={Code} alt="tv-maze"/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ImagesGrid;
