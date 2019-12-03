import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link , withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux';
import {RegisterUser} from "../../Actions/AuthActions";
import { compose } from 'redux';
import classnames from 'classnames';




  const styles = theme => ({
    '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  redtext:{
    color:'red',
    fontWeight: 'bolder'
    
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  
});

class SignUp extends React.Component{

  constructor(props) {
		super(props);

		this.state = {
      firstName: '',
      lastName: '',
			email: '',
			mobile:'',
			address:'',
			password: '',
			accounttype:'',
      submitted:false,
      errors:{}
		
		};


    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/mydrive");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  
  onSubmit = e => {
    e.preventDefault();
    
    const newUser = {
          "firstName": this.state.firstName,
          "lastName": this.state.lastName,
          "email": this.state.email,
          "mobile": this.state.mobile,
          "password": this.state.password,
          "address": this.state.address,
          "accounttype": this.state.accounttype,
    };
    
    this.props.RegisterUser(newUser, this.props.history); 
  };

  

 
    
 
  render(){
  const {classes} = this.props;
  const {errors} = this.state;
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        <form className={classes.form}                 
              onSubmit={this.onSubmit} noValidate >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="firstName"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={this.state.firstName}
                onChange={e => this.setState({ firstName: e.target.value })}   
                error={errors.firstName}
                className={classnames("", {
                  invalid: errors.firstName
                })}          
                 />
              	<span className={classes.redtext}>{errors.firstName}</span>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                value={this.state.lastName}
                onChange={e => this.setState({ lastName: e.target.value })}
                error={errors.lastName}
                className={classnames("", {
                  invalid: errors.lastName
                })}          
                 />
              	<span className={classes.redtext}>{errors.lastName}</span>
              	                
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                error={errors.email}
                className={classnames("", {
                  invalid: errors.email
                })}          
                 />
              	<span className={classes.redtext}>{errors.email}</span>
              	
              
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="mobile"
                label="Mobile Number"
                id="mobile"
                autoComplete="mobile"
                value={this.state.mobile}
                onChange={e => this.setState({ mobile: e.target.value })}
                error={errors.mobile}
                className={classnames("", {
                  invalid: errors.mobile
                })}          
                 />
              	<span className={classes.redtext}>{errors.mobile}</span>

            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Address"
                multiline
                type="text"
                id="address"
                autoComplete="address"
                rows="2"
                value={this.state.address}
                onChange={e => this.setState({ address: e.target.value })} 
                error={errors.address}
                className={classnames("", {
                  invalid: errors.address
                })}          
                 />
              	<span className={classes.redtext}>{errors.address}</span>

            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}  
                error={errors.password}
                className={classnames("", {
                  invalid: errors.password
                })}          
                 />
              	<span className={classes.redtext}>{errors.password}</span>
						
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="accounttype"
                label="Account Type"
                type="accounttype"
                id="accounttype"
                value={this.state.accounttype}
                onChange={e => this.setState({ accounttype: e.target.value })}  
                error={errors.accounttype}
                className={classnames("", {
                  invalid: errors.accounttype
                })}          
                 />
              	<span className={classes.redtext}>{errors.accounttype}</span>
						
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I accept the Terms of service and privacy policy"
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/signin' >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}
}

SignUp.proptype ={
  classes: PropTypes.object.isRequired,
  RegisterUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {RegisterUser})
)(withRouter(SignUp))