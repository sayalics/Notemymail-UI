import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link , withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';
import {  ContextMenu, ContextMenuTrigger } from "react-contextmenu";
import {  MenuItem} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import ViewIcon from '@material-ui/icons/VisibilityOutlined';
import {logoutUser} from '../../Actions/AuthActions';
import { compose } from 'redux';
import FileViewer from 'react-file-viewer';
import Modal from '@material-ui/core/Modal';
import samplepdf from '../../assets/samplepdf.pdf';
import sampledoc from '../../assets/sampledoc.doc';
import samplezip from  '../../assets/samplezip.zip';
import samplexlsx from '../../assets/samplexlsx.xlsx';
import tests from '../../assets/tests.py';
import DetailsIcon from '@material-ui/icons/InfoOutlined';
import SampleSpec from '../../assets/SampleSpec.docx';
import FileIcon, { defaultStyles } from 'react-file-icon';



const styles = theme => ({
    root: {
        display: 'flex',
      },
      
      cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(0),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        boxShadow:'none',
        padding: theme.spacing(8),
        paddingBottom: theme.spacing(0)
        // border: '1px solid',
        // borderColor:'#e5e5e5'
      },
      cardMedia:{
        padding: theme.spacing(5),
        paddingBottom: theme.spacing(1)

      },
     
      cardContent: {
        flexGrow: 1,
      },
      contextmenu : {
        backgroundColor: theme.palette.background.paper,
        boxShadow : theme.shadows[3]
      },
      papermodal: {
        position: 'relative',
        width: theme.spacing(120),
        height: theme.spacing(80),
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
        outline: 'none',
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      contextmenu : {
        backgroundColor: theme.palette.background.paper,
        boxShadow : theme.shadows[3]
      },
})

class Recent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open : false,
      files: [],
      folders: [],
      isLoaded: false,
      error: null
    }
  }
  
  componentDidMount() {
    const { user } = this.props.auth;
    fetch("https://cors-anywhere.herokuapp.com/http://159.203.93.44/get_mydrive?emailID=" + user.email )
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
 

  handleOpenFile = () => {
    this.setState({open: true});
  }

  handleCloseFile = () => {
    this.setState({open: false});
  }
 
  handleClickAway = () => {
    this.setState({ open: false });  
  };

  fileNameAndExt(str){
    var file = str.split('/').pop();
    return [file.substr(0,file.lastIndexOf('.')),file.substr(file.lastIndexOf('.')+1,file.length)]
  }   

    render(){
        const { classes } = this.props;
        const { error, isLoaded, files, folders } = this.state;
        var filelist = [
          {"filename":"SampleSpec.docx" , "filepath": SampleSpec }, 
          {"filename":"samplepdf.pdf" , "filepath": samplepdf },
          {"filename":"samplexlsx.xlsx" , "filepath": samplexlsx },
          {"filename":"tests.py" , "filepath": tests },
  
        ]
        const filesIcon = files.map((item) => {
          const x = this.fileNameAndExt(item.filename);
          return(
                // <div style={{height:200, width:200}}>
                // <FileIcon extension={x[1]} {...defaultStyles[x[1]]} />
                // </div>
                <Grid item  xs={12} sm={6} md={3} lg={2}>
                <ContextMenuTrigger id="some_unique_identifier">
                  <Card className={classes.card}>
                    
                    <FileIcon extension={x[1]} {...defaultStyles[x[1]]} />
                    <Typography  style={{marginTop:'5px'}} variant="h6" align="center"  component="h3">
                        {x[0]}.{x[1]}
                      </Typography>
                    </Card>
                </ContextMenuTrigger>
              </Grid>
            )
        })


        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        }  else if (files.length === 0 ) {
          return(
             <div>
               <Container className={classes.cardGrid} maxWidth="100%" >
                <Typography variant='h5' > My Drive </Typography>
                <Divider style={{marginBottom:'2%'}} />
                <Grid container item  xs={12} sm={12} md={12} lg={12}  className={classes.card} >
                  
                          <DetailsIcon style={{fontSize:100}} color="action" />
                        
                          <Typography  variant="h5" component="h2" color="textSecondary">
                            No recent files
                          </Typography>
                        
                  
                </Grid>
              </Container>

             </div>
          )
        }else {
          return (        
        <Grid direction="column">
        <Container className={classes.cardGrid} maxWidth="100%" >
          <Typography variant='h5'> Recent </Typography>
          <Divider style={{marginBottom:'2%'}} />
          <Grid container spacing={5} direction="row" >
            
            {filesIcon}
              
            </Grid>
          <ContextMenu id="some_unique_identifier" className={classes.contextmenu} >
                
                <MenuItem 
                    className={classes.Container}
                    onClick={this.handleOpenFile}
                > 
                            {<ViewIcon color="action" style={{marginRight:'15px'}} />} View
                </MenuItem>
                <MenuItem > {<DeleteIcon color="action" style={{marginRight:'15px'}}/>} Delete</MenuItem>
                
              
            </ContextMenu>
         
        
            <Modal
                          aria-labelledby="simple-modal-title"
                          aria-describedby="simple-modal-description"
                          open={this.state.open}
                          onClose={this.handleCloseFile}
                          onClickAway={this.handleClickAway}
                          className={classes.modal}
                          >
                          <div  className={classes.papermodal}>
                            <FileViewer
                            fileType='pdf'
                            filePath={samplepdf}
                            />
                              
                          </div>
            </Modal>
        </Container>
        </Grid>

);    
}   
}
}

Recent.propTypes = {
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
)(withRouter(Recent))