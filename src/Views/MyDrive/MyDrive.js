import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';
import {  ContextMenu, ContextMenuTrigger } from "react-contextmenu";
import {  MenuItem} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
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
import {post} from 'axios';

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
      cardMedia:{
        padding: theme.spacing(5),
        paddingBottom: theme.spacing(1)

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

class MyDrive extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          open : false,
          mydrive: [],
          error: null,
          isLoaded: false,
          files: [],
          folders: []
        
    }
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

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/http://159.203.93.44/get_mydrive?emailID=rohan")
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
 

  deletefile = () => {
    const url = 'https://cors-anywhere.herokuapp.com/http://159.203.93.44/delete_file';
    const formData = new FormData();
    formData.append('emailID', 'rohan')
    formData.append('folderpath', './storage/rohan/MyDrive')
    formData.append('filename', "Logo.png" )

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
          {"filename":"samplezip.zip" , "filepath": samplezip },
          {"filename":"sampledoc.doc" , "filepath": sampledoc },
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
                    <CardMedia className={classes.cardMedia}>
                    
                    <FileIcon extension={x[1]} {...defaultStyles[x[1]]} />
                    
                    </CardMedia>
                    <Typography  variant="h6" component="h2">
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
              // <div style={{height:200, width:200}}>
              // <FileIcon extension={x[1]} {...defaultStyles[x[1]]} />
              // </div>
              <Grid item  xs={12} sm={6} md={3} lg={2}>
              <ContextMenuTrigger id="some_unique_identifier">
                <Link to="/view" style={{textDecorationLine:'none'}}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}>
                  
                  <FolderIcon style={{fontSize:'120px', color:'orange'}}  />
                  
                  </CardMedia>
                  <Typography  variant="h6" component="h2">
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
        } else {
          return (
          
        <Grid direction="column">

        <Container className={classes.cardGrid} maxWidth="100%" >
          <Typography variant='h5'> My Drive </Typography>
          <Divider style={{marginBottom:'2%'}} />
          <Typography variant="h6" color="textPrimary">Folders</Typography>
          {/* End hero unit */}
          
          <Grid container spacing={8} direction="row" >
          
                {foldericon}
           
          </Grid>
           
        </Container>


        <Container className={classes.cardGrid} maxWidth="100%" >
          <Typography variant="h6" color="textPrimary">Files</Typography>
          {/* End hero unit */}
          <Grid container spacing={8} direction="row" >
            {filesIcon}
          </Grid>
          
          <ContextMenu id="some_unique_identifier" className={classes.contextmenu} >
                
                <MenuItem 
                    className={classes.Container}
                    onClick={this.handleOpenFile}
                > 
                            {<ViewIcon color="action" style={{marginRight:'15px'}} />} View
                </MenuItem>
                <MenuItem onClick={this.deletefile}> {<DeleteIcon color="action" style={{marginRight:'15px'}}/>} Delete</MenuItem>
                
              
            </ContextMenu>
         
            {files.map(item => (
                          <div key={item.files}>
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
        </Container>
        
        </Grid>

);       
}
    }
  }

export default withStyles(styles) (MyDrive);