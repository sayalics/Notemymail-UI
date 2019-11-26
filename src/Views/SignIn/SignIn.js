import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {LoginUser} from "../../Actions/AuthActions";
import { compose } from 'redux';
import classnames from 'classnames';


const styles = (theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class SignIn extends React.Component  {
  constructor(){
    super();
    this.state = {
      email : "",
      password : "",
      errors:{}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/mydrive");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/mydrive"); // push user to dashboard when they login
    }if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      "email": this.state.email,
      "password": this.state.password
    };
    this.props.LoginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  
 
  


    

    render(){
        const {classes} = this.props;
        const {errors} = this.state;

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                
                <Typography component="h1" variant="h4">
                Sign in
                </Typography>
                <form className={classes.form}
                onSubmit={this.onSubmit}
                  >
                <div>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    type="email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })} 
                    error={errors.emailnotfound}
                    className={classnames("", {
                      invalid: errors.emailnotfound
                    })}                 
                    />
                    <span className="red-text">{errors.emailnotfound}</span>
                </div>
                <div>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })} 
                    error={errors.password && errors.passwordincorrect} 
                    className={classnames("", {
                      invalid: errors.password || errors.passwordincorrect
                    })}
                 />
                  <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                
              </div>   

                {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                /> */}
                
                    <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={!this.validateForm()}
                    type='submit'
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link to="/signup"  >
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            <Box mt={8}>
            </Box>
            </Container>
        );
    }
}
SignIn.proptype ={
  classes: PropTypes.object.isRequired,
  LoginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {LoginUser})
)(withRouter(SignIn))