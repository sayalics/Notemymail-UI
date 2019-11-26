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

class AddInstitute extends React.Component {

  constructor(props){
    super(props);
    this.state = {
     institute_name:'',
     institute_branch:'',
     domain_id_for_emails:''
    }
    this.addinstitute = this.addinstitute.bind(this);
  }

  addinstitute= () => {
    fetch('http://159.203.93.44/auth/registerinstitute',{
      method: 'POST',
      headers: {
          Accept : 'application/json',
          "content-type": "application/json"
        },
      body: JSON.stringify(
        {
          "institute_name": this.state.institute_name,
          "institute_branch": this.state.institute_branch,
          "domain_id_for_emails": this.state.domain_id_for_emails,
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
                Add Institute
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="institute_name"
                    label="Institute Name"
                    name="institute_name"
                    value={this.state.institute_name}
                    onChange={e => this.setState({ institute_name: e.target.value })}             
   
                
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="institute_branch"
                    label="Institute Branch"
                    name="institutebranch"
                    value={this.state.institute_branch}
                    onChange={e => this.setState({ institute_branch: e.target.value })}             
      
                
                />
                {/* <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="institutecode"
                    label="Institute Code"
                    type="institutecode"
                    id="institutecode"
                    value={this.state.institutecode}
                    onChange={e => this.setState({ institutecode: e.target.value })}             
     
                
                /> */}
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="domainemailid"
                    label="Domain Email-Id"
                    type="domainemailid"
                    id="domain_id_for_emails"
                    value={this.state.domain_id_for_emails}
                    onChange={e => this.setState({ domain_id_for_emails: e.target.value })}             
      
                
                />
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
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.addinstitute()}
                    >
                    Add Institute
                </Button>

                
                </div>
                </form>
            </div>
            <Box mt={8}>
            </Box>
            </Container>
        );
    }
}
export default withStyles(styles) (AddInstitute);