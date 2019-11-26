import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../../Components/SideBar/index';
import Topbar from '../../Components/TopBar/index';
import Searchicon from '@material-ui/icons/Search';
import DriveIcon from '@material-ui/icons/Cloud';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InboxIcon from '@material-ui/icons/Inbox';
import SettingIcon from '@material-ui/icons/Settings';
import VideoIcon from '@material-ui/icons/VoiceChat';
import SendIcon from '@material-ui/icons/Send';
import TrashIcon from '@material-ui/icons/Delete';
import DraftIcon from '@material-ui/icons/Drafts';
import ComposeButton from '../../Components/ComposeButton/index';
//import MailIcon from '@material-ui/icons/Mail';
//import UserList from '../../Views/Inbox/index';


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

class EmailLayout extends React.Component { 
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
            navtitle="Email" 
            Icon1={"MailIcon"}
            Icon2={"MailIcon"}
            Icon3={DriveIcon}
            Icon4={VideoIcon}
            Icon5={SettingIcon}
            Icon6={NotificationsIcon}
            link3="/mydrive"
            />   
              
            <Sidebar
            Button={ComposeButton}
            Icon1 = {InboxIcon} title1="Inbox" link1="/inbox"
            Icon2 = {SendIcon} title2="Sent" link2="/sent"
            Icon3 = {DraftIcon} title3="Drafts" link3="/draft"
            Icon4 = {TrashIcon} title4="Trash" 
            Icon5 = {"TrashIcon"} 
            />
      <main className={classes.content}>
        <div className={classes.toolbar}/>  
        {children}
       {/* <UserList />  */}
      </main>
    </div>



    
  );
}
}


EmailLayout.propTypes = {
  children: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,

};
export default withStyles(styles)(EmailLayout);
