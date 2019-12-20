import React from 'react';
import '../styles/Content.css';
import Image from '../images/profile.png';
import { SocialIcon } from 'react-social-icons';

class Content extends React.Component {
  render() {
    return (
      <div>
        <div className="left">
          <h1 id="about">ABOUT ME</h1>
          <img className="img-circle" src={Image} alt="test" />
          <div className="icons">
            <SocialIcon className="icon" url="https://github.com/VillePellosniemi/"/>
            <SocialIcon className="icon" url="https://www.linkedin.com/in/ville-pellosniemi-41913b178/"/>
            <SocialIcon className="icon" url="https://twitter.com/Pelzeri_"/>
          </div>
        </div>
        <div className="right">
          <p>hi</p>
        </div>
      </div>
    );
  }
}

export default Content;
