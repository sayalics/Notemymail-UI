import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


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
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  
});

class OrgAddStaff extends React.Component{

  constructor(props) {
		super(props);

		this.state = {
            firstName: '',
            lastName: '',
            username: '',
            mobile: '',
            email: '',
            department: '',
            role: '',
		
    };
    this.addstaff = this.addstaff.bind(this);
	}
 
  addstaff = () => {
    fetch('http://159.203.93.44/auth/registerorganizationadmin',{
      method: 'POST',
      headers: {
          Accept : 'application/json',
          "content-type": "application/json"
        },
      body: JSON.stringify(
        {
          "firstName": this.state.firstName,
          "lastName": this.state.lastName,
          "username": this.state.username,
          "mobile" : this.state.mobile,
          "email": this.state.email,
          "department": this.state.department,
          "role": this.state.role
        }
      )
    })
    .then(response => console.log(response))
    .catch(error => console.log(error)) 
  }


  render(){
  const {classes} = this.props;
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        
        <Typography component="h1" variant="h4">
          Add Staff
        </Typography>
        <form className={classes.form} >            
              
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="firstname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={this.state.firstName}     
                onChange={e => this.setState({ firstName: e.target.value })}             
       
                 />
              	
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastname"
                value={this.state.lastName}
                onChange={e => this.setState({ lastName: e.target.value })}             

                              />  
            </Grid>
            
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="Username"
                // autoComplete="department"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}             

              />  
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mobile"
                label="Mobile"
                name="mobile"
                // autoComplete="otp"
                value={this.state.mobile}
                onChange={e => this.setState({ mobile: e.target.value })}             

                />                
              
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="emailid"
                label="Email Id"
                name="emailid"
                // autoComplete="otp"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}             

                 />
              	                
              
            </Grid>
            
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="department"
                label="Department"
                name="Department"
                // autoComplete="department"
                value={this.state.department}
                onChange={e => this.setState({ department: e.target.value })}             

                />
              	               
            </Grid>
            
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="role"
                label="Role"
                name="role"
                // autoComplete="subject"
                value={this.state.role}
                onChange={e => this.setState({ role: e.target.value })}             

                 />
              
              	                
              
            </Grid>
           
          </Grid>
           
          <div style={{flexDirection:'row' , display:"flex", justifyContent:'space-evenly'}}>

                  
                <Link to="/orgdash" style={{textDecorationLine:"none", color:"inherit"}} >
                <Button
                    
                    // fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Cancel
                </Button>
                </Link>
                
                {/* <Link to="/inbox" > */}
                    <Button
                    // fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.addstaff()}
                >
                    Add Staff
                </Button>

                
                </div>
                
          
        </form>
      </div>
      
    </Container>
  );
}
}

OrgAddStaff.proptype ={
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OrgAddStaff);
