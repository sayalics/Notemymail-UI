import React from 'react';
import InstituteIcon from '@material-ui/icons/AccountBalance';
import {Link} from 'react-router-dom';
import StaffIcon from '@material-ui/icons/SupervisorAccount';
import Card from '@material-ui/core/Card';
import VideoIcon from '@material-ui/icons/VoiceChat';
import EmailIcon from '@material-ui/icons/Email';
import DriveIcon from '@material-ui/icons/CloudUpload'
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';


const styles = theme =>  ({
  root:{
    padding: theme.spacing(8),
    marin: theme.spacing(0),

  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  card: {
    border:'none',
    boxShadow:'none',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56%', // 16:9
    
  },
  cardContent: {
    flexGrow: 1,
  },
 
  
});

class TeacherDash extends React.Component  {
  randomMeetingId(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

  render(){
    const {classes} = this.props;
    var meetingID = this.randomMeetingId(5, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    var hreflink = 'https://video.notemymail.team/'+meetingID
    console.log(hreflink);

  return (
    
      
      <Grid
        container
        className={classes.root}
      >
       
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xl={3}
          xs={12}
        >          
        <Link to="/mydrive" style={{textDecorationLine:'none'}}>

           <Card className={classes.card}>
                  <CardMedia>
                    <DriveIcon style={{fontSize:100}} color="primary"/>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom  variant="h5" component="h2">
                      Drive
                    </Typography>
                    <Typography >
                      Upload files and folder on cloud
                    </Typography>
                  </CardContent>
                  
                </Card></Link>

        </Grid>
        
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xl={3}
          xs={12}
        >
        <Link to="/inbox" style={{textDecorationLine:'none'}}>
           <Card className={classes.card}>
                  <CardMedia>
                    <EmailIcon style={{fontSize:100}} color="primary"/>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Email
                    </Typography>
                    <Typography >
                    Send and receive message to and from anyone with an email address, anywhere in the world.

                    </Typography>
                  </CardContent>
                  
                </Card>
          </Link>

        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xl={3}
          xs={12}
        >
              <Link to={hreflink} target="_blank" 
                  onClick={(event) => {
                  event.preventDefault(); 
                  window.open(hreflink);
                  }} 
                  style={{textDecorationLine: "none" , color: 'inherit'}}> 
                <Card className={classes.card}>
                  <CardMedia>
                    <VideoIcon style={{fontSize:100}} color="primary"/>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5"  component="h2">
                      Video Chat
                    </Typography>
                    <Typography >
                      Allows one-to-one visual communication between two or more internet users.
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Link>
        </Grid>
         
      </Grid>
     
  );
  }
}
export default withStyles(styles) (TeacherDash);