import React from 'react';
import '../styles/About.scss';
import Image from '../images/pp_blwhite.jpg';
import sr from './scrollReveal';
import {SocialIcon} from 'react-social-icons';
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

class About extends React.Component {

  // noinspection JSAnnotator
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

    const config2 = {
      origin: 'right',
      duration: 1200,
      delay: 300,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };

    sr.reveal(this.refs.box1, config);
    sr.reveal(this.refs.box2, config2);
  };

  render() {

    const {t} = this.props;

    return (
        <div id="about-test">
          <div className="left" ref="box1">
            <h1 className="about">{t('about.title')}</h1>
            <img className="img-circle" src={Image} alt="test"/>
            <div className="icons">
              <SocialIcon className="icon"
                          url="https://github.com/VillePellosniemi/"
                          target="_blank"/>
              <SocialIcon className="icon"
                          url="https://www.linkedin.com/in/ville-pellosniemi-41913b178/"
                          target="_blank"/>
              <SocialIcon className="icon" url="https://twitter.com/Pelzeri_"
                          target="_blank"/>
            </div>
          </div>
          <div className="middle"/>
          <div className="right" ref="box2">
            <p id="aboutme">{t('about.text1')}<br/><br/>{t('about.text2')}<br/><br/>{t('about.text3')}</p>
          </div>
        </div>
    );
  }
}

About.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(About);
