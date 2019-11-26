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

class PasswordChange extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password : "",
      confirmpassword : ""
    }
  }
    render(){
        const {classes} = this.props;

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                
                <Typography component="h1" variant="h4">
                PasswordChange
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoFocus
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}             
    
                
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confirmpassword"
                    label="Confirm Password"
                    type="confirmpassword"
                    id="confirmpassword"
                    autoComplete="confirmpassword"
                    value={this.state.confirmpassword}
                    onChange={e => this.setState({ confirmpassword: e.target.value })}             
       
                
                />
               
                    <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Password Change
                </Button>
                
               
                </form>
            </div>
            <Box mt={8}>
            </Box>
            </Container>
        );
    }
}
export default withStyles(styles) (PasswordChange);