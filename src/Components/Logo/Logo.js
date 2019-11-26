import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    logo: {
      marginRight: theme.spacing(2),
    },
})

class Logo extends React.Component {
  render(){
    const { classes, logo } = this.props;


    return (
      <div className={classes.logo}>
        <img src={logo} height={this.props.hg} width={this.props.wd}  />
      </div>
    );
  }
}
Logo.propTypes = {
    classes: PropTypes.object.isRequired,
    logo: PropTypes.string,
  };

export default withStyles(styles) (Logo);
