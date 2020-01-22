import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Home, ExitToApp, VideoLibrary, Person, Menu, Description, Chat} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer/Drawer';
import AnchorLink from 'react-anchor-link-smooth-scroll';


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
    width: '35%',
  },
};

class NavbarTest extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const {classes} = this.props;

    const sideList = (
        <div>
          <p>hi</p>
        </div>
    );

    return (
        <div className={classes.root}>
          <AppBar id="appbar" position="static">
            <Toolbar>
              <IconButton id="menu" onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
                <Menu />
              </IconButton>
              <Drawer type="temporary"
                      classes={{
                        paper: classes.drawerPaper,
                      }} open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('left', false)}
                    onKeyDown={this.toggleDrawer('left', false)}
                >
                  {sideList}
                </div>
              </Drawer>
            </Toolbar>
          </AppBar>
        </div>
    );
  }
}

NavbarTest.propTypes = {
  checkLogin: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavbarTest);
