import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// import SignUp from '../../Views/SignUp/SignUp';
// import style from 'material-ui/svg-icons/image/style';

const styles = theme => ({
    root: {
    paddingTop: 64,
    height: '100%'
  },
  content: {
    height: '100%'
  }
});

class Minimal extends React.Component { 
    render(){
      const { classes} = this.props;
      const { children } = this.props;
  return (
    <div className={classes.root}>
      <main className={classes.content}>
          {children}
    </main>
    </div>
  );
}
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(styles) (Minimal);