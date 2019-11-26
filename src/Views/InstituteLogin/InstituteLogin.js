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

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username : "",
      password : ""
    }
  }
    render(){
        const {classes} = this.props;

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                
                <Typography component="h1" variant="h4">
                Login
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    // autoComplete="username"
                    autoFocus
                    value={this.state.username}
                    onChange={e => this.setState({ username: e.target.value })}             
     
                
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    // autoComplete="current-password"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}             
 
                

                />
                
                <Link to="/passchange" style={{textDecorationLine:"none", color:"inherit"}} >
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Login
                </Button>
                </Link>
                
                </form>
            </div>
            <Box mt={8}>
            </Box>
            </Container>
        );
    }
}
export default withStyles(styles) (Login);