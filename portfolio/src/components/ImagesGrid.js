import React from 'react';
import '../styles/ImagesGrid.scss';
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
      duration: 1700,
      delay: 500,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };

    const config4 = {
      origin: 'right',
      duration: 1700,
      delay: 500,
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
              <p id="skills-text">{t('work.text1')}<br/><br/>{t('work.text2')}<br/><br/>{t('work.text3')}</p>
            </div>
          </div>

          <div className="right2" ref="box4">
            <ul className="image-grid">
              <li className="blocks-item">
                <a href='https://twitter.com/teodora011rd' className="blocks-item-link">
                <img className="block-icon" src="https://img.icons8.com/cotton/2x/small-axe.png"/>
                <span className="blocks-item-title">Helelo</span>
                <span className="blocks-item-description">Helelelel</span>
                </a>
              </li>
              <li className="blocks-item">
                <a href='https://twitter.com/teodora011rd' className="blocks-item-link">
                  <img className="block-icon" src="https://img.icons8.com/cotton/2x/small-axe.png"/>
                  <span className="blocks-item-title">Helelo</span>
                  <span className="blocks-item-description">Helelelel</span>
                </a>
              </li>
              <li className="blocks-item">
                <a href='https://twitter.com/teodora011rd' className="blocks-item-link">
                  <img className="block-icon" src="https://img.icons8.com/cotton/2x/small-axe.png"/>
                  <span className="blocks-item-title">Helelo</span>
                  <span className="blocks-item-description">Helelelel</span>
                </a>
              </li>
              <li className="blocks-item">
                <a href='https://twitter.com/teodora011rd' className="blocks-item-link">
                  <img className="block-icon" src="https://img.icons8.com/cotton/2x/small-axe.png"/>
                  <span className="blocks-item-title">Helelo</span>
                  <span className="blocks-item-description">Helelelel</span>
                </a>
              </li>
              <li className="blocks-item">
                <a href='https://twitter.com/teodora011rd' className="blocks-item-link">
                  <img className="block-icon" src="https://img.icons8.com/cotton/2x/small-axe.png"/>
                  <span className="blocks-item-title">Helelo</span>
                  <span className="blocks-item-description">Helelelel</span>
                </a>
              </li>
              <li className="blocks-item">
                <a href='https://twitter.com/teodora011rd' className="blocks-item-link">
                  <img className="block-icon" src="https://img.icons8.com/cotton/2x/small-axe.png"/>
                  <span className="blocks-item-title">Helelo</span>
                  <span className="blocks-item-description">Helelelel</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}

ImagesGrid.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(ImagesGrid);
