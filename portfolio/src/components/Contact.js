import React from 'react';
import '../styles/Contact.scss';
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

class Contact extends React.Component {


  render() {
    const {t} = this.props;
    return (
        <div id="contact">
          <div className="upper">
            <h1 id="contact2">{t('contact.title')}</h1>
            <p className="contact-info">Mobile: +358 44 031 1533</p>
            <p className="contact-info">Email: ville.pellosniemi@outlook.com</p>
          </div>
          <div className="lower">
            <p>Copyright 2020 - Ville Pellosniemi</p>
            <p>All rights reserved. Made with React.</p>
            <br/>
            <a id="source-code" href="https://github.com/VillePellosniemi/portfolio" target="_blank" rel="noopener noreferrer">GitHub Repository & Source Code</a><br/><br/>
          </div>
        </div>
    );
  }
}

Contact.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Contact);
