import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import GitHubIcon from "@material-ui/icons/GitHub";
import Menu from "../images/menu.png";
import Player from "../images/play-button.png";
import TvMaze from "../images/tv-maze.png";
import Login from "../images/login.png";
import Code from "../images/code.png";
import React from "react";

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