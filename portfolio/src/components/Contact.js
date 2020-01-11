import React from 'react';
import '../styles/Contact.scss';
import {setLanguage} from 'react-switch-lang';

class Contact extends React.Component {

  handleSetLanguage = (key) => () => {
    setLanguage(key);
  };

  render() {
    return (
        <div id="contact">
          <div className="upper">
            <h1 id="contact2">CONTACT ME</h1>
            <p className="contact-info">Mobile: +358 44 031 1533</p>
            <p className="contact-info">Email: ville.pellosniemi@outlook.com</p>
          </div>
          <div className="lower">
            <p>Copyright 2020 - Ville Pellosniemi</p>
            <p>All rights reserved. Made with React.</p>
            <br/>
            <a id="source-code" href="https://github.com/VillePellosniemi/portfolio" target="_blank" rel="noopener noreferrer">GitHub Repository & Source Code</a><br/><br/>
            <button type="button" onClick={this.handleSetLanguage('th')}>
              Suomi
            </button>
            <button type="button" onClick={this.handleSetLanguage('en')}>
              English
            </button>
          </div>
        </div>
    );
  }
}

export default Contact;
