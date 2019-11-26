import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import {Link , Redirect} from 'react-router-dom';
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

class OrganizationSignUp extends React.Component{

  constructor(props){
    super(props);
 
		this.state = {
    
          orgName:'',
          firstName: '',
          lastName: '',
          mobile:'',
          email:'',
          country:'',
          state:'',
          city:'',
          area:'',
		
    };
    this.register = this.register.bind(this);
   }

   register = () => {
    fetch('http://159.203.93.44/auth/registerOrg',{
      method: 'POST',
      headers: {
          Accept : 'application/json',
          "content-type": "application/json"
        },
      body: JSON.stringify(
        {
          "orgName": this.state.orgName,
          "firstName": this.state.firstName,
          "lastName": this.state.lastName,
          "email": this.state.email,
          "mobile": this.state.mobile,
          "country": this.state.country,
          "state": this.state.state,
          "city": this.state.city,
          "area": this.state.area,
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
          Sign Up
        </Typography> 
    

        <form className={classes.form}              
             
                
              >
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="orgName"
                label="Organization Name"
                name="orgName"
                // autoComplete="department"
                value={this.state.orgName}
                onChange={e => this.setState({ orgName: e.target.value })}             

                             />             	                
              
            </Grid>
             
            <Grid item xs={12} sm={6}>
              <TextField
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
                value={this.state.lastName}
                onChange={e => this.setState({ lastName: e.target.value })}             

                           />
              	                
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="mobile"
                label="Contact No"
                id="mobile"
                value={this.state.mobile}
                onChange={e => this.setState({ mobile: e.target.value })}             

                          />
              	
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Contact Email"
                name="email"
                // autoComplete="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}             

                         />
              	
            </Grid>
            
            
        
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
                // autoComplete="subject"
                value={this.state.country}
                onChange={e => this.setState({ country: e.target.value })}             

                         />
              	                
              
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="state"
                label="State"
                name="state"
                // autoComplete="subject"
                value={this.state.state}
                onChange={e => this.setState({ state: e.target.value })}             

                      />
              	                
              
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                // autoComplete="class"
                value={this.state.city}
                onChange={e => this.setState({ city: e.target.value })}             

                       />
              	                
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="area"
                label="Area"
                name="area"
                // autoComplete="class"
                value={this.state.area}
                onChange={e => this.setState({ area: e.target.value })}             

                        />
              	                
              
            </Grid>
            
          </Grid>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.register()}
          >
            Sign Up
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}
}

OrganizationSignUp.proptype ={
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(OrganizationSignUp);
