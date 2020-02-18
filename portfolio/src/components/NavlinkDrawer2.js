import React from 'react';
import '../styles/About.scss';
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
import AnchorLink from 'react-anchor-link-smooth-scroll';

// Do this two lines only when setting up the application
setTranslations({en, th});
setDefaultLanguage('en');

// If you want to remember selected language
setLanguageCookie();

class NavlinksDrawer2 extends React.Component {

  render() {

    const {t} = this.props;

    return (
        <div>
          <AnchorLink offset="64" className="dropdown-link"
                      href='#work-scroll'>{t('nav.link2')}</AnchorLink>
        </div>
    );
  }
}

NavlinksDrawer2.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(NavlinksDrawer2);
