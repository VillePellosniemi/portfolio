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
            <p className="contact-info">{t('contact.mobile')} +358 44 031 1533</p>
            <p className="contact-info">{t('contact.email')} ville.pellosniemi@outlook.com</p>
          </div>
          <div className="lower">
            <p className="contact-info">{t('contact.copyright')} 2020 - Ville Pellosniemi</p>
            <p className="contact-info">{t('contact.rights')}</p>
            <br/>
            <a id="source-code" href="https://github.com/VillePellosniemi/portfolio" target="_blank" rel="noopener noreferrer"> {t('contact.github')}</a><br/><br/>
          </div>
        </div>
    );
  }
}

Contact.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Contact);
