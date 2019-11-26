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

class AddTeacher extends React.Component{

  constructor(props) {
		super(props);

		this.state = {
      firstname: '',
      lastname: '',
			username:'',
      department:'',
      subject:'',
      class:'',
      division:'',
      contactemail:'',
      otp:'',
			submitted:false
		
		};
	}

  render(){
  const {classes} = this.props;
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        
        <Typography component="h1" variant="h4">
          Add Teacher
        </Typography>
        <form className={classes.form}                 
             >
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
                autoFocus
                value={this.state.firstname}
                onChange={e => this.setState({ firstname: e.target.value })}             

                            
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
                value={this.state.lastname}
                onChange={e => this.setState({ lastname: e.target.value })}             

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
                id="subject"
                label="Subject"
                name="Subject"
                // autoComplete="subject"
                value={this.state.subject}
                onChange={e => this.setState({ subject: e.target.value })}             

                          />
              	                
              
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="division"
                label="Division"
                name="Division"
                // autoComplete="subject"
                value={this.state.division}
                onChange={e => this.setState({ division: e.target.value })}             

                       />
              	                
              
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="class"
                label="Class"
                name="Class"
                // autoComplete="class"
                value={this.state.class}
                onChange={e => this.setState({ class: e.target.value })}             

                        />
              	                
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="contactemail"
                label="Contact Email id"
                name="contactemail"
                // autoComplete="email"
                value={this.state.contactemail}
                onChange={e => this.setState({ contactemail: e.target.value })}             

                  />
              
            </Grid>
            
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="otp"
                label="OTP"
                type="otp"
                id="otp"
               
                value={this.state.otp}
                onChange={e => this.setState({ otp: e.target.value })}             

                       />
              	
            </Grid>
             
          </Grid>
          <div style={{flexDirection:'row' , display:"flex", justifyContent:'space-evenly'}}>

                  
                <Link to="/instdash" style={{textDecorationLine:"none", color:"inherit"}} >
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
                >
                    Add Teacher
                </Button>

                
                </div>
                
        </form>
      </div>
      
    </Container>
  );
}
}

AddTeacher.proptype ={
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AddTeacher);
