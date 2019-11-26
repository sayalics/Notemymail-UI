import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    alignItems:'center',
    justifyContent:'center',
    marginLeft: theme.spacing(50),
    marginTop: theme.spacing(20)
    
  },
  inline: {
    display: 'inline',
  },
  button: {

    backgroundColor: '#d8d8d8',
    width :'150px',
    height : '40px',
    fontWeight : 'bold',
  },
});

class InstiList extends React.Component {
  render(){  
  const { classes } = this.props;
  return (
    <div className={classes.root}>  
      <Link to="/instisignup" style={{textDecorationLine:'none'}}>
      <Button className={classes.button} >Add Institute</Button>  </Link>
    <List >
      <ListItem alignItems="center">
        
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="center">
        
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="center">
        
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </div>
  );
}
}
InstiList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InstiList);