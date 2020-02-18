import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../styles/Navbar.scss';
import {setLanguage} from 'react-switch-lang';
import British from '../images/British.png';
import Finnish from '../images/Finnish2.png';
import IconButton from '@material-ui/core/IconButton/IconButton';
import {Menu} from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer/Drawer';
import {withStyles} from '@material-ui/core';
import Navlinks from './Navlinks';
import NavlinksDrawer1 from '../components/NavlinkDrawer1';
import NavlinksDrawer2 from '../components/NavlinkDrawer2';
import NavlinksDrawer3 from '../components/NavlinkDrawer3';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
  },
  drawerPaper: {
    width: '100%',
  },
};

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

  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
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

    const {classes} = this.props;

    const sideList = (
        <ul className="test2">
          <li className="test">
            <div className="relative-white">
              <div className="flags-dropdown">
                <NavlinksDrawer1/>
              </div>
            </div>
          </li>
          <li className="test">
            <div className="relative-grey">
              <div className="flags-dropdown">
                <NavlinksDrawer2/>
              </div>
            </div>
          </li>
          <li className="test">
            <div className="relative-white">
              <div className="flags-dropdown">
                <NavlinksDrawer3/>
              </div>
            </div>
          </li>
          <li className="test">
            <div className="relative-grey">
              <div className="flags-dropdown-flags">
                <img className="image-flag-dropdown" src={Finnish}
                     onClick={this.handleSetLanguage('th')} alt="img"/>
                <img className="image-flag-dropdown" src={British}
                     onClick={this.handleSetLanguage('en')} alt="img"/>
              </div>
            </div>
          </li>
        </ul>
    );

    return (
        <div>
          <StyledNavbar className={this.state.show ? 'active' : 'hidden'}>
            <nav className="nav-bar">
              <div className="vertical-center">
                <Navlinks/>
              </div>
              <div className="flags">
                <img className="image-flag" src={Finnish}
                     onClick={this.handleSetLanguage('th')} alt="img"/>
                <img className="image-flag" src={British}
                     onClick={this.handleSetLanguage('en')} alt="img"/>
              </div>
              <div className="menu">
                <IconButton classname="menu-button"
                            onClick={this.toggleDrawer('left', true)}
                            color="inherit" aria-label="Menu">
                  <Menu/>
                </IconButton>
                <Drawer type="temporary"
                        classes={{
                          paper: classes.drawerPaper,
                        }} open={this.state.left}
                        onClose={this.toggleDrawer('left', false)}>
                  <div id="dropdown"
                       tabIndex={0}
                       role="button"
                       onClick={this.toggleDrawer('left', false)}
                       onKeyDown={this.toggleDrawer('left', false)}
                  >
                    {sideList}
                  </div>
                </Drawer>
              </div>
            </nav>
          </StyledNavbar>
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

Navbar.propTypes = {
  checkLogin: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
