import React from 'react';
import TvMaze from '../images/tv-maze.png';
import Menu from '../images/menu.png';
import Player from '../images/play-button.png';
import Login from '../images/login.png';
import Code from '../images/code.png';
import '../styles/ImagesGrid.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import sr from './scrollReveal';
import PropTypes from 'prop-types';

// Translation Higher Order Component
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  translate,
} from 'react-switch-lang';
import en from '../json/en';
import th from '../json/th';

// Do this two lines only when setting up the application
setTranslations({en, th});
setDefaultLanguage('en');

// If you want to remember selected language
setLanguageCookie();

class ImagesGrid extends React.Component {

  // noinspection JSAnnotator
  props: Props;

  componentDidMount = () => {
    const config3 = {
      origin: 'left',
      duration: 1200,
      delay: 300,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };

    const config4 = {
      origin: 'right',
      duration: 1200,
      delay: 300,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };

    sr.reveal(this.refs.box3, config3);
    sr.reveal(this.refs.box4, config4);
  };

  render() {

    const {t} = this.props;

    return (
        <div className="image-text">

          <div className="left2" ref="box3">
            <div className="text-grid">
              <p id="skills-text">{t('work.text')}</p>
            </div>
          </div>

          <div className="right2" ref="box4">
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

ImagesGrid.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(ImagesGrid);
