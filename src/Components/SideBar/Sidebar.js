import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: 'none'

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
});

class ClippedDrawer extends React.Component {
  state ={
    selectedIndex: 1,
    
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  

  

render(){
  const { classes, Button,
    title1, title2, title3, title4, title5, 
    Icon1,Icon2,Icon3, Icon4, Icon5,
    link1, link2, link3, link4, link5,} = this.props;
  

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />       
        <Button />
        <List component="nav" >
           
          <Link to={link1} style={{textDecorationLine:"none" , color:"inherit"}}>
          <ListItem button 
           selected={this.state.selectedIndex === 1}
           onClick={event => this.handleListItemClick(event, 1)}>
           <ListItemIcon>
           <Icon1 />
          </ListItemIcon>
          <ListItemText primary={title1} />
        </ListItem></Link>
        

        <Link to={link2} style={{textDecorationLine:"none" , color:"inherit"}}> 
       <ListItem button
         selected={this.state.selectedIndex === 2}
         onClick={event => this.handleListItemClick(event, 2)}>
          <ListItemIcon>
              <Icon2 /> 
          </ListItemIcon>
          <ListItemText primary={title2} />
        </ListItem>
        </Link>
        

        <Link to={link3} onClick={onclick} style={{textDecorationLine:"none" , color:"inherit"}}>
        <ListItem button
         selected={this.state.selectedIndex === 3}
         onClick={event => this.handleListItemClick(event, 3)}>
          <ListItemIcon>
              <Icon3 /> 
          </ListItemIcon>
          <ListItemText primary={title3} />
        </ListItem></Link>

        

        <Link to={link4} style={{textDecorationLine:"none" , color:"inherit"}} >
        <ListItem button
         selected={this.state.selectedIndex === 5}
         onClick={event => this.handleListItemClick(event, 5)}>
          <ListItemIcon>
              <Icon4 /> 
          </ListItemIcon>
          <ListItemText primary={title4} />
        </ListItem></Link>

        <Link to={link5} style={{textDecorationLine:"none" , color:"inherit"}} >
        <ListItem button
         selected={this.state.selectedIndex === 5}
         onClick={event => this.handleListItemClick(event, 5)}>
          <ListItemIcon>
              <Icon5 /> 
          </ListItemIcon>
          <ListItemText primary={title5} />
        </ListItem></Link>
      </List>
      </Drawer>
     
    </div>
  );
}
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  title4: PropTypes.string,
 
}

export default withStyles(styles)(ClippedDrawer);
