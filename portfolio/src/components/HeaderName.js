import React from 'react';
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

class HeaderName extends React.Component {
  render() {
    const {t} = this.props;
    return (
        <div>
          <h1 id="name">Ville Pellosniemi</h1>
          <h3 id="title">{t('header.title')}</h3>
        </div>
    );
  }
}

HeaderName.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(HeaderName);
