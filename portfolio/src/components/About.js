import React from 'react';
import '../styles/About.scss';
import Image from '../images/profile.png';
import { SocialIcon } from 'react-social-icons';

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="left">
          <h1 id="about">ABOUT ME</h1>
          <img className="img-circle" src={Image} alt="test" />
          <div className="icons">
            <SocialIcon className="icon" url="https://github.com/VillePellosniemi/" target="_blank"/>
            <SocialIcon className="icon" url="https://www.linkedin.com/in/ville-pellosniemi-41913b178/" target="_blank"/>
            <SocialIcon className="icon" url="https://twitter.com/Pelzeri_" target="_blank"/>
          </div>
        </div>
        <div className="middle"/>
        <div className="right">
          <p id="aboutme">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>
      </div>
    );
  }
}

export default About;
