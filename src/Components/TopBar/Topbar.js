import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Logo from '../Logo/index';
import LogoImage from '../../assets/Logo/Logo.png';
import {Link, withRouter} from 'react-router-dom';
import NotificationIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import {logoutUser} from '../../Actions/AuthActions';
import { compose } from 'redux';
import LogoutICon from '@material-ui/icons/ExitToApp';


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class Topbar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  randomMeetingId(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
    }
    onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
    };


  render() {
    const { anchorEl, mobileMoreAnchorEl} = this.state;
    const { classes, navtitle,
       Icon1 , Icon2 , Icon3 , Icon4 ,Icon5, Icon6 ,
       link1, link2, link3,link4,link5,link6} = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const { user } = this.props.auth;

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem > My account </MenuItem>
        <MenuItem onClick={this.onLogoutClick}>Logout 
        <IconButton>
          <LogoutICon edge="right" fontSize="large" />
        </IconButton>
        </MenuItem>

      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
       
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge color="secondary">
              <NotificationIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

  var meetingID = this.randomMeetingId(5, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  var hreflink = 'https://video.notemymail.team/'+meetingID
  console.log(hreflink);

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
          <Logo logo={LogoImage} hg="40px" wd="60px"/>
            <Typography className={classes.title} variant="h5" color="inherit" noWrap >
                {navtitle}
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                  <SearchIcon/>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            <Link to={link1} style={{textDecorationLine: "none" , color: 'inherit'}}> 
            <IconButton color="inherit">
                <Badge  color="secondary">
                <Icon1 /> 
                </Badge>
              </IconButton>
            </Link>  
            <Link to={link2} style={{textDecorationLine: "none" , color: 'inherit'}}>
              <IconButton color="inherit">
                <Badge  color="secondary">
                <Icon2 /> 
                </Badge>
              </IconButton></Link>
              <Link to={link3} style={{textDecorationLine: "none" , color: 'inherit'}}>    
              <IconButton color="inherit">
                <Badge  color="secondary">
                <Icon3 /> 
                </Badge>
              </IconButton></Link>
              <Link to={link4} style={{textDecorationLine: "none" , color: 'inherit'}}>
              <IconButton color="inherit">
                <Badge  color="secondary">
                <Icon4 /> 
                </Badge>
              </IconButton></Link>
              
              <Link to={hreflink} target="_blank" 
                onClick={(event) => {
                event.preventDefault(); 
                window.open(hreflink);
                }} 
                style={{textDecorationLine: "none" , color: 'inherit'}}>
              <IconButton color="inherit">
                <Badge  color="secondary">
                <Icon5 /> 
                </Badge>
              </IconButton></Link>
              
              <Link to={link6} style={{textDecorationLine: "none" , color: 'inherit'}}>
              <IconButton color="inherit">
                <Badge  color="secondary">
                <Icon6 /> 
                </Badge>
              </IconButton></Link>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle/>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

Toolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  navtitle: PropTypes.string,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
  auth: state.auth
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {logoutUser})
)(withRouter(Topbar))