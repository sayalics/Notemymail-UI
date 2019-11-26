import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../../Components/SideBar/index';
import Topbar from '../../Components/TopBar/index';
import StaffIcon from '@material-ui/icons/SupervisedUserCircle';
import MailIcon from '@material-ui/icons/Mail';
import TeacherIcon from '@material-ui/icons/SupervisorAccount';
import DriveIcon from '@material-ui/icons/CloudOutlined';
import StudentIcon from '@material-ui/icons/AccountBox';
import VideoIcon from '@material-ui/icons/VoiceChat';
import InstituteDash from '../../Views/InstituteDash';
//import InstituteIcon from '@material-ui/icons/AccountBalance';



const styles = theme => ({
    root: {
    height: '100%',        
      },      
      content: {
        paddingTop:'0px',
        marginLeft:240,  
        height: '100%'
      },
      toolbar: theme.mixins.toolbar,
  });

class InstituteLayout extends React.Component { 
  randomMeetingId(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

  

  render(){
    const { classes} = this.props;
    const { children } = this.props;
    var meetingID = this.randomMeetingId(5, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    var hreflink = 'https://video.notemymail.team/'+meetingID
    console.log(hreflink);
    
  return (

    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
            <Topbar 
            navtitle="Institute" 
            Icon1={DriveIcon}
            Icon2={MailIcon}
            Icon3={VideoIcon}
            Icon4={StaffIcon}
            Icon5={TeacherIcon}  
            Icon6={StudentIcon}  
            link1="/mydrive"
            link2="/inbox"
            link4="/stafflist"
            link5="/teacherlist"
            link6="/studentlist"

            
            />   
            <Sidebar
            Button = {"ComposeButton"}
            Icon1 = {DriveIcon} title1="Drive Storage" link1="/mydrive"
            Icon2 = {MailIcon} title2="Mail Service" link2="/inbox"
            Icon3 = {VideoIcon} title3="Video Chat" 
            Icon4 = {TeacherIcon} title4="Teacher" link4="/teacherlist"
            Icon5 = {StudentIcon} title5="Student" link5="/studentlist"
            
            />
      <main className={classes.content}>
        <div className={classes.toolbar}/>  
        {children}
      </main>
    </div>



    
  );
}
}


InstituteLayout.propTypes = {
  children: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,

};
export default withStyles(styles) (InstituteLayout);