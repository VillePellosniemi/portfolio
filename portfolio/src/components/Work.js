import React from 'react';
import '../styles/Work.scss';
import Icons from './Icons';
import ImagesGrid from './ImagesGrid';
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

class Work extends React.Component {

  render() {

    const {t} = this.props;

    return (
        <div id="work">
          <h1 id="skills">{t('work.title')}</h1>
          <Icons />
          <ImagesGrid/>
        </div>
    );
  }
}

Work.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Work);
