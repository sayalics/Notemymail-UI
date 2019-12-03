import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import NewfolderIcon from '@material-ui/icons/CreateNewFolder';
import FileIcon from '@material-ui/icons/InsertDriveFile';
import Grow from '@material-ui/core/Grow';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Divider, TextField } from '@material-ui/core';
import Dropzone from 'react-dropzone';
import {post} from 'axios';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import './Upload.css';
import { connect } from 'react-redux';
import {logoutUser} from '../../Actions/AuthActions';
import { compose } from 'redux';
import {Link , withRouter} from 'react-router-dom';


const styles = theme => ({
  root: {
    display: 'flex',
    marginLeft: theme.spacing(7),
    marginTop: theme.spacing(3),

  },
  uploadbutton: {
    zIndex: theme.zIndex.drawer + 1,
  },
  paper: {
    marginLeft: theme.spacing(4.5),
    marginTop:theme.spacing(-1),
    background: 'hidden'
  },
  papermodal: {
    position: 'absolute',
    width: theme.spacing(50),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
  modal:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  modalbutton: {
    margin: theme.spacing,
    marginLeft: '230px',

  },
  button: {
    backgroundColor: '#d8d8d8',
    width :'150px',
    height : '40px',
    fontWeight : 'bold',
  },
  textField: {
    marginLeft: theme.spacing,
    marginRight: theme.spacing,
  },
  dense: {
    marginTop: 16,

  },
  
});

class UploadButton extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    open: false,
    open1:false,
    openmodal: false,
    selectedIndex : 0,
    placement: null,
    files: null,  
    folders: null,
    foldername: null,
    uploading:false, 
    response:{}
    
  };
    this.onfileuploadsubmit = this.onfileuploadsubmit.bind(this)
    this.onSelectfile = this.onSelectfile.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
    this.createfolder = this.createfolder.bind(this)
}
  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  handleClickAway = () => {
    this.setState({ open: false });  
  };

  handlemodalOpen = () => {
    this.setState({ openmodal: true });
  };

  handlemodalClose = () => {
    this.setState({ openmodal: false });
  };
  handledropopen = () => {
    this.setState({ open1: true });
  }; 
  
  handledropclose = () => {
    this.setState({ open1: false });
  };
  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  }

  componentDidMount() {
    const { user } = this.props.auth;
    fetch("https://cors-anywhere.herokuapp.com/http://159.203.93.44/get_mydrive?emailID=" + user.email)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            files: result.files,
            folders: result.folders
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  
 

  handleClick = placement => event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: state.placement !== placement || !state.open,
      placement,
    }));
  };

  onfileuploadsubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.files)
    
  }
  onSelectfile(e) {
    this.setState({files:e.target.files[0]})
  }
  fileUpload(filename){
    const { user } = this.props.auth;
    const { files } = this.state;
    const url = 'https://cors-anywhere.herokuapp.com/http://159.203.93.44/file_upload';
    const formData = new FormData();
    formData.append('emailID', user.email)
    formData.append('folderpath', './storage/'+ user.email +'/MyDrive')
    formData.append('file',files)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    this.setState({
      open:false,
    });
    return  post(url, formData,config)
    .then((response)=>{
      console.log(response.data);
      
    });
  }


  
  
  
  createfolder = () => {
    const { user } = this.props.auth;
    const url = 'https://cors-anywhere.herokuapp.com/http://159.203.93.44/creat_newfolder';
    const formData = new FormData();
    formData.append('emailID', user.email)
    formData.append('folderpath', './storage/'+ user.email +'/MyDrive')
    formData.append('foldername', this.state.foldername )
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    this.setState({openmodal:false});
    this.setState({open: false})
    return  post(url, formData,config)
    .then((response)=>{
      console.log(response.data);
      
    });
  }
  

  render() {
    const { classes } = this.props;
    const { open , placement , anchorEl} = this.state;

    return (
      <div className={classes.root}>
        
        <div className={classes.uploadbutton}>
          
          <Button
          className={classes.button}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick('right-start')}
          >
            Upload
          </Button>
          <Popper  open={open} anchorEl={anchorEl} transition placement={placement} >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
              >
                <ClickAwayListener onClickAway={this.handleClickAway}>
                <Paper className={classes.paper} >
                  <List component="nav" aria-label="main mailbox folders">
                        <ListItem button 
                        selected={this.state.selectedIndex === 1}
                        onClick={event => this.handleListItemClick(event, 1)}>
                        <ListItemIcon >
                            <NewfolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add folder" onClick={this.handlemodalOpen}/>
                        </ListItem>
                            <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.state.openmodal}
                            className={classes.modal}
                            // onClose={this.handlemodalClose}
                            // onClick={this.handleClose}
                            >
                            <div  className={classes.papermodal}>
                                <Typography variant="h6" color="primary" id="modal-title">
                                Add folder
                                </Typography>
                                <TextField
                                id="outlined-dense"
                                fullWidth
                                label="Folder name"
                                autoFocus
                                className={classNames(classes.textField, classes.dense)}
                                margin="dense"
                                variant="outlined"
                                value={this.state.foldername}
                                onChange={e => this.setState({ foldername: e.target.value })} 
                                />
                                <Button href="#text-buttons" color="primary" className={classes.modalbutton} onClick={this.handlemodalClose}>
                                    Cancel
                                </Button>
                                <Button href="#text-buttons"  type="submit" color="primary" onClick={this.createfolder }  >
                                    Create
                                </Button>
                                </div>
                            </Modal>
                        <Divider />

                         
                        <ListItem button 
                        selected={this.state.selectedIndex === 2}
                        onClick={event => this.handleListItemClick(event, 2)}
                        >
                        <ListItemIcon >
                            <FileIcon />
                        </ListItemIcon>
                            
                        <form onSubmit={this.onfileuploadsubmit} >
                          <input type="file" onChange={this.onSelectfile}   />
                          <button type="submit" >Upload files</button>
                        </form>

                               
                        </ListItem>
                        
                        {/* <ListItem button 
                        selected={this.state.selectedIndex === 3}
                        onClick={event => this.handleListItemClick(event, 3)}>
                        <ListItemIcon >
                            <FolderIcon />
                        </ListItemIcon>
                        

                                <ListItemText primary="Upload folder"  />
                                                      
                        </ListItem> */}
                    </List>
                </Paper>
                </ClickAwayListener> 

              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}
UploadButton.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
  auth: state.auth
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {logoutUser})
)(withRouter(UploadButton))

