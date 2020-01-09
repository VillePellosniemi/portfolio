import React from 'react';
import TvMaze from '../images/tv-maze.png';
import Menu from '../images/menu.png';
import Player from '../images/play-button.png';
import Login from '../images/login.png';
import Code from '../images/code.png';
import '../styles/ImagesGrid.scss';
import {GoMarkGithub} from 'react-icons/go';
import { IoIosArrowDroprightCircle } from "react-icons/io";

class ImagesGrid extends React.Component {

  render() {
    return (
        <div className="image-text">

          <div className="left2">
            <div className="text-grid">
              <p>hi</p>
            </div>
          </div>

          <div className="right2">
            <div className="image-grid">

              <div className="container">
                <div className="overlay">
                  <div className="text">
                    <a href="https://arizonaatwork.com"><GoMarkGithub className="github-icon" /></a>
                    <a href="https://arizonaatwork.com"><IoIosArrowDroprightCircle className="github-icon" /></a>
                  </div>
                </div>
                <img className="image" src={Menu} alt="menu"/>
              </div>

              <div className="container">
                <div className="overlay">
                  <div className="text">Hello World!</div>
                </div>
                <img className="image" src={Player} alt="player"/>
              </div>

              <div className="container">
                <div className="overlay">
                  <div className="text">Hello World!</div>
                </div>
                <img className="image" src={TvMaze} alt="tv-maze"/>
              </div>

              <div className="container">
                <div className="overlay">
                  <div className="text">Hello World!</div>
                </div>
                <img className="image" src={Login} alt="login"/>
              </div>

              <div className="container">
                <div className="overlay">
                  <div className="text">Hello World!</div>
                </div>
                <img className="image" src={Code} alt="code"/>
              </div>

              <div className="container">
                <div className="overlay">
                  <div className="text">Hello World!</div>
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
