import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../../Components/SideBar/index';
import Topbar from '../../Components/TopBar/index';
import MailIcon from '@material-ui/icons/Mail';
import StaffIcon from '@material-ui/icons/SupervisorAccount';
import DriveIcon from '@material-ui/icons/Cloud';
import InstituteIcon from '@material-ui/icons/AccountBalance';
import VideoIcon from '@material-ui/icons/VoiceChat';
import RecentIcon from '@material-ui/icons/AccessTime';
import SharedIcon from '@material-ui/icons/SupervisorAccount';
import TrashIcon from '@material-ui/icons/DeleteOutline';
import UploadButton from '../../Components/UploadButton/index';
import OrganizationDash from '../../Views/OrganizationDash';
import StudentDash from '../../Views/StudentDash';
import TeacherDash from '../../Views/TeacherDash/TeacherDash';

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

class StudentLayout extends React.Component { 
  render(){
    const { classes} = this.props;
    const { children } = this.props;
    
  return (

    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
            <Topbar 
            navtitle="Teacher " 
            Icon1={"DriveIcon"}
            Icon2={"DriveIcon"}
            Icon3={"DriveIcon"}
            Icon4={VideoIcon}
            Icon5={MailIcon}
            Icon6={DriveIcon}
            link6="/mydrive"
            link5="/inbox"
            />   
            <Sidebar
            Button = {"UploadButton"}
            Icon1 = {DriveIcon} title1="Drive storage" link1="/mydrive"
            Icon2 = {MailIcon} title2="Mail service" link2="/inbox"
            Icon3 = {VideoIcon} title3="Video chat" 
            Icon4 = {"InstituteIcon"} 
            Icon5 = {"StaffIcon"}  
            />
      <main className={classes.content}>
        <div className={classes.toolbar}/>  
        {children}
      </main>
    </div>



    
  );
}
}


StudentLayout.propTypes = {
  children: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,

};
export default withStyles(styles) (StudentLayout);
