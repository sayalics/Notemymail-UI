import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {Link , withRouter} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';
import {  ContextMenu, ContextMenuTrigger } from "react-contextmenu";
import {  MenuItem} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import DownloadIcon from '@material-ui/icons/ArrowDownward';
import ViewIcon from '@material-ui/icons/VisibilityOutlined';
import FileViewer from 'react-file-viewer';
import Modal from '@material-ui/core/Modal';
import FolderIcon from '@material-ui/icons/Folder';
import FileIcon, { defaultStyles } from 'react-file-icon';
import samplepdf from '../../assets/samplepdf.pdf';
import sampledoc from '../../assets/sampledoc.doc';
import samplezip from  '../../assets/samplezip.zip';
import samplexlsx from '../../assets/samplexlsx.xlsx';
import tests from '../../assets/tests.py';
import SampleSpec from '../../assets/SampleSpec.docx';
import DetailsIcon from '@material-ui/icons/InfoOutlined';
import {logoutUser} from '../../Actions/AuthActions';
import { compose } from 'redux';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


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
        justifyContent:'center',
        boxShadow:'none',
        padding: theme.spacing(8),
        paddingBottom: theme.spacing(0),
        // border: '1px solid',
        // borderColor:'#e5e5e5'
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
      papermodaldetails: {
        position: 'absolute',
        width: theme.spacing(51),
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
      },
       modaldetails: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      contextmenu : {
        backgroundColor: theme.palette.background.paper,
        boxShadow : theme.shadows[3]
      },
      
})


class MyDrive extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          open : false,
          opendetails:false,
          mydrive: [],
          error: null,
          isLoaded: false,
          files: [],
          folders: [],
          response: {},
    }
  }

  handleOpenFile = () => {
    this.setState({open: true});
  };

  handleCloseFile = () => {
    this.setState({open: false});
  };

  handleOpenDetails = () => {
    this.setState({opendetails: true});
  };

  handleCloseDetails = () => {
    this.setState({opendetails: false});
  };
 
  handleClickAway = () => {
    this.setState({ open: false });  
  };

  handleClickAwayDetails = () => {
    this.setState({ opendetails: false });  
  };

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
  
  componentWillReceiveProps(nextProps) {
    if (!nextProps.files && nextProps.folders === this.state.files && this.state.folders) {
      this.setState({
        files: nextProps.files,
        folders: nextProps.folders
      });
  }
}
    
 
  deletefile(filename) {
    const { files } = this.state;
    const { user } = this.props.auth;
    const apiUrl = 'https://cors-anywhere.herokuapp.com/http://159.203.93.44/delete_file';
    const formData = new FormData();
    formData.append('emailID', user.email)
    formData.append('folderpath', './storage/'+ user.email +'/MyDrive')
    formData.append('filename', filename )
    const options = {
      method: 'POST',
      body: formData
    }

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            response: result,
            files: files.filter(item => item.filename !== filename)
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
      
  }

  deletefolder(foldername) {
    const { folders } = this.state;
    const { user } = this.props.auth;
    const apiUrl = 'http://159.203.93.44/delete_folder';
    const formData = new FormData();
    formData.append('emailID', user.email)
    formData.append('folderpath', './storage/'+ user.email +'/MyDrive/' + foldername)
    formData.append('foldername', foldername )
    
    const options = {
      method: 'POST',
      body: formData
    }

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            response: result,
            folders: folders.filter(item => item.foldername !== foldername)
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
      
  }
 
  downloadfile(filename) {
    const { user } = this.props.auth;
    const apiUrl = 'https://cors-anywhere.herokuapp.com/http://159.203.93.44/download_file';
    const formData = new FormData();
    formData.append('emailID', user.email )
    formData.append('filename', filename )
    formData.append('folderpath', './storage/'+ user.email +'/MyDrive')
    const options = {
      method: 'POST',
      body: formData,
      responseType: 'blob'
    }

    fetch(apiUrl, options)
    .then(res => res.blob())          // convert to plain text
    // .then(blob => console.log(blob))  // then log it out
    .then(blob => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();    
      a.remove();  //afterwards we remove the element again         
  });
      
  }
 

  // viewfile(filename) {
  //   const { user } = this.props.auth;
  //   const apiUrl = 'https://cors-anywhere.herokuapp.com/http://159.203.93.44/download_file';
  //   const formData = new FormData();
  //   formData.append('emailID', user.email )
  //   formData.append('filename', filename )
  //   formData.append('folderpath', './storage/'+ user.email +'/MyDrive')
  //   const options = {
  //     method: 'POST',
  //     body: formData,
  //     responseType: 'blob'
  //   }

  //   fetch(apiUrl, options)
  //   .then(res => 
  //     res.blob()
  //   )         
  //   .then(blob => {
  //     return blob
  //   });
     
  // }



  downloadfolder(foldername) {
    const { user } = this.props.auth;
    const apiUrl = 'https://cors-anywhere.herokuapp.com/http://159.203.93.44/download_folder';
    const formData = new FormData();
    formData.append('emailID', user.email)
    formData.append('filename', foldername )
    formData.append('folderpath', './storage/'+ user.email +'/MyDrive/' + foldername)
    const options = {
      method: 'POST',
      body: formData,
      responseType: 'blob'
    }

    fetch(apiUrl, options)
    .then(res => res.blob())          // convert to plain text
    // .then(blob => console.log(blob))  // then log it out
    .then(blob => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = foldername;
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();    
      a.remove();  //afterwards we remove the element again         
  });
      
  }

  
  
  fileNameAndExt(str){
    var file = str.split('/').pop();
    return [file.substr(0,file.lastIndexOf('.')),file.substr(file.lastIndexOf('.')+1,file.length)]
  }   

    render(){
     
        const { classes } = this.props;
        const { user } = this.props.auth;
        const { error, isLoaded, files, folders } = this.state;
        var filelist = [
          {"filename":"SampleSpec.docx" , "filepath": SampleSpec }, 
          {"filename":"samplepdf.pdf" , "filepath": samplepdf },
          {"filename":"samplexlsx.xlsx" , "filepath": samplexlsx },
          {"filename":"samplezip.zip" , "filepath": samplezip },
          {"filename":"sampledoc.doc" , "filepath": sampledoc },
          {"filename":"tests.py" , "filepath": tests },
  
        ]

        
        const filesIcon = files.map((item) => {
            const x = this.fileNameAndExt(item.filename);
            return(
                
                <Grid item  xs={12} sm={6} md={3} lg={2}>
                <ContextMenuTrigger id={item.filename} >
                   <Card className={classes.card}> 
                    
                    <FileIcon extension={x[1]} {...defaultStyles[x[1]]}  />
                    
                    <Typography  style={{marginTop:'5px'}} variant="h6" align="center"  component="h3">
                        {x[0]}.{x[1]}
                      </Typography>
                    </Card>
                </ContextMenuTrigger>
              </Grid>
            )
        })

        const foldericon = folders.map((item) => {
          const x = this.fileNameAndExt(item.foldername);
          return(
              
              <Grid item  xs={12} sm={6} md={3} lg={2}>
                <ContextMenuTrigger id={item.foldername}>
                <Link to="/view" style={{textDecorationLine:'none'}}>
                <Card className={classes.card}>
                  
                  <FolderIcon  style={{fontSize:'80px', color:'orange'}}  />
                  
                  <Typography  variant="h6" align="center"  component="h3">
                      {x[1]}
                    </Typography>
                  </Card>
                  </Link>
                  </ContextMenuTrigger>
            </Grid>
          )
      })


      

        
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else if (files.length === 0 && folders.length === 0) {
          return(
             <div>
               <Container className={classes.cardGrid} maxWidth="100%" >
                <Typography variant='h5' > My Drive </Typography>
                <Divider style={{marginBottom:'2%'}} />
                <Grid container item  xs={12} sm={12} md={12} lg={12}  className={classes.card} >
                  
                          <DetailsIcon style={{fontSize:100}} color="action" />
                        
                          <Typography  variant="h5" component="h2" color="textSecondary">
                            Your drive is empty
                          </Typography>
                        
                  
                </Grid>
              </Container>

             </div>
          )
        } else {
          return (    
          
        <Grid direction="column" >

        <Container className={classes.cardGrid} maxWidth="100%" >
          <Typography variant='h5'> My Drive </Typography>
          <Divider style={{marginBottom:'2%'}} />
          {/* End hero unit */}
          
          <Grid container spacing={5} direction="row" >
          
                {foldericon}
                
          </Grid>
           
        </Container>


        <Container className={classes.cardGrid} maxWidth="100%" >
          {/* End hero unit */}
          <Grid container spacing={5} direction="row" >
            {filesIcon}
          </Grid>
          </Container>
          
          {files.map(item => (
          <ContextMenu id={item.filename} className={classes.contextmenu} >

                <MenuItem 
                    className={classes.Container}
                    onClick={this.handleOpenFile}
                > 
                            {<ViewIcon color="action" style={{marginRight:'15px'}} />} View
                </MenuItem>             
                           
                  <MenuItem  onClick={() => this.deletefile(item.filename)}> 
                  {<DeleteIcon color="action" style={{marginRight:'15px'}}/>} Delete 
                  </MenuItem>                  
               
                                       
                  <MenuItem   onClick={() => this.downloadfile(item.filename)}> 
                  {<DownloadIcon color="action" style={{marginRight:'15px'}}/>} Download 
                  </MenuItem>
                   
            </ContextMenu>
          ))}

           {folders.map(item => (
            <ContextMenu id={item.foldername} className={classes.contextmenu} >
            
                  <MenuItem key={item.foldername} onClick={() => this.handleOpenDetails(item.foldername)}> 
                  {<DetailsIcon color="action" style={{marginRight:'15px'}}/>} Details 
                  </MenuItem>

                  <MenuItem   onClick={() => this.downloadfolder(item.foldername)}> 
                  {<DownloadIcon color="action" style={{marginRight:'15px'}}/>} Download
                  </MenuItem>
                      
                  <MenuItem  onClick={() => this.deletefolder(item.foldername)}> 
                  {<DeleteIcon color="action" style={{marginRight:'15px'}}/>} Delete 
                  </MenuItem>
                  

                  
            </ContextMenu>
           ))}
         
            {files.map(item => (
                     <div key={item.filename}> 
            
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
            </div>
            ))}

            {folders.map(item => (                          
            <Modal
                          aria-labelledby="simple-modal-titles"
                          aria-describedby="simple-modal-descriptions"
                          open={this.state.opendetails}
                          onClose={this.handleCloseDetails}
                          onClickAway={this.handleClickAwayDetails}
                          className={classes.modaldetails}
                          >
                            
                          <div  className={classes.papermodaldetails} key={item.foldername} >
                             <h4>Type  : {item.Type} </h4>
                             <h4>Location  : {item.Location}</h4> 
                             <h4>Owner  : {item.owner}</h4>  
                             <h4>Modified  : {item.Modified.time} by {item.Modified.by}  </h4>  
                             <h4>Opened  : {item.Opened.time} by {item.Modified.by} </h4>  
                             <h4>Created  : {item.Created.time} by {item.Created.by}</h4>              
                          </div>
                          
            </Modal>
                           ))}
        
        </Grid>

        );       
        }
      }
    }

  MyDrive.propTypes = {
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
  )(withRouter(MyDrive))