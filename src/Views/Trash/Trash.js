import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TrashIcon from '@material-ui/icons/DeleteOutline';
import { Divider } from '@material-ui/core';

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
        border: 'none',
        // borderColor:'#e5e5e5'
      },
     
      cardContent: {
        flexGrow: 1,
      },
})

class Trash extends React.Component{
    render(){
        const cards = [1];
        const { classes } = this.props;
        return(
        <Grid direction="column">
        <Container className={classes.cardGrid} maxWidth="100%" >
          <Typography variant='h5' > Trash </Typography>
          <Divider style={{marginBottom:'2%'}} />
          {/* <Typography variant="h6" color="textPrimary">Folders</Typography> */}
          <Grid container spacing={5} direction="row" >
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={12} md={12} lg={12}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}>
                    <TrashIcon style={{fontSize:100}} color="action" />
                  </CardMedia>
                  
                  <CardContent className={classes.cardContent}>
                    <Typography  variant="h6" component="h2" color="textSecondary">
                      Trash is empty
                    </Typography>
                   
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Grid>

);       
}
}

export default withStyles(styles) (Trash);