import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/Button';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ControlledEditor from './Editor';
import Divider from '@material-ui/core/Divider';
  
const styles = theme => ({
  root: {
    display: 'flex',
    marginLeft: theme.spacing.unit * 7,
    marginTop: theme.spacing.unit * 3,

  },
  composebutton: {
    zIndex: theme.zIndex.drawer + 1,
  },
  papermodal: {
    position: 'absolute',
    width: theme.spacing.unit * 80,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  modal:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  modalbutton: {
    margin: theme.spacing.unit,
    marginLeft: '500px',

  },
  button: {
    backgroundColor: '#d8d8d8',
    width :'120px',
    height : '40px',
    fontWeight : 'bold',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  TextareaAutosize: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
});


class ComposeButton extends React.Component {

  constructor(props) {
    
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    
  }
  handleSubmit(event) {
    // highlight-range{4}
    event.preventDefault();
    
  }
  state = {
    openmodal: false,
    open1:false,
    
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
   

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        
        <div className={classes.composebutton}>
          <Button
          className={classes.button}
          onClick={this.handlemodalOpen}
          >
            Compose
          </Button>
          
                
                            <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.state.openmodal}
                            onClose={this.handlemodalClose}
                            className={classes.modal}
                            >
                            <div  className={classes.papermodal}>
                                <Typography variant="h6" color="primary" id="modal-title">
                                New Message
                                </Typography>
                                
        
        
  
     
                                <TextField
                                id="outlined-dense"
                                fullWidth
                                label="To"
                                className={classNames(classes.textField, classes.dense)}
                                margin="dense"
                                variant="outlined"
                                />
                                <TextField
                                id="outlined-dense"
                                fullWidth
                                label="Cc"
                                className={classNames(classes.textField, classes.dense)}
                                margin="dense"
                                variant="outlined"
                                />
                                <TextField
                                id="outlined-dense"
                                fullWidth
                                label="Bcc"
                                className={classNames(classes.textField, classes.dense)}
                                margin="dense"
                                variant="outlined"
                                />
                                <TextField
                                id="outlined-dense"
                                fullWidth
                                label="Subject"
                                className={classNames(classes.textField, classes.dense)}
                                margin="dense"
                                variant="outlined"
                                />
                                <Divider style={{margin:5}}/>
                                 
                                <ControlledEditor />
                                {/* <TextField
                                fullWidth
                                label="Message Body"
                                multiline
                                className={classNames(classes.TextareaAutosize, classes.dense)}
                                margin="dense"
                                variant="outlined"
                                />
                                */}
                                <div>
                                  <form onSubmit={this.handleSubmit}>
                                     <label>
                                      <input type="file" ref={this.fileInput} />
                                    </label> 
                                    <br />
                                    </form>
                                 {/* <Input
                                  accept="image/*, video/*, audio/*, .png, .jpg, .jpeg.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                                  className={classes.input}
                                  style={{ display: 'none' }}
                                  id="raised-button-file"
                                  multiple

                                  type="file" ref={this.fileInput}
                                  
                                />
                                <label htmlFor="raised-button-file">
                                  <IconButton  color="inherit"component="span" className={classes.modalbutton}>
                                                <AttachFileIcon />
                                  </IconButton> */}
                                  {/* </label>  */}
                                <Button href="#text-buttons" color="primary" className={classes.modalbutton} onClick={this.handlemodalClose}>
                                    Close
                                </Button>
                                <Button href="#text-buttons" color="primary">
                                    Send
                                </Button>
                                </div>
                                </div>
                            </Modal>
                       
                    
                
        </div>
      </div>
    );
  }
}

ComposeButton.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ComposeButton);

