import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../styles/Navbar.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {setLanguage} from 'react-switch-lang';
import British from '../images/British.png';
import Finnish from '../images/Finnish2.png';

class Navbar extends Component {
  static propTypes = {
    brand: PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
    links: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired,
        }),
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const {scrollPos} = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    });
  }

  handleSetLanguage = (key) => () => {
    setLanguage(key);
  };

  render() {

    return (
        <div>
          <Transition>
            <StyledNavbar className={this.state.show ? 'active' : 'hidden'}>
              <nav className="nav-bar">
                <div className="vertical-center">
                  <AnchorLink className="nav-link"
                              href='#about-scroll'>ABOUT</AnchorLink>
                  <AnchorLink className="nav-link"
                              href='#work-scroll'>WORK</AnchorLink>
                  <AnchorLink className="nav-link"
                              href='#contact-scroll'>CONTACT</AnchorLink>
                </div>
                <div className="vertical-center2">
                  <img className="image-flag" src={Finnish} onClick={this.handleSetLanguage('th')} alt="img"/>
                  <img className="image-flag" src={British} onClick={this.handleSetLanguage('en')} alt="img"/>
                </div>
              </nav>
            </StyledNavbar>
          </Transition>
        </div>
    );
  }
}

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 4rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: white;
  z-index: 1000;
  a {
    margin-right: 1rem;
    font-weight: normal;
  }
  .brand {
    font-style: italic;
    margin-left: 1rem;
    font-weight: bold;
    color: white;
    font-size: 1.25rem;
  }`;

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;

export default Navbar;
