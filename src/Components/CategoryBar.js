import React from 'react';
import {useHistory} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//Category Bar below App Bar

export default function CategoryBar() {
  const history = useHistory()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false" component="div" style={{ backgroundColor: '#eceff1', height: '10vh',}}>
        <Grid container spacing={3}>
        <Grid item xs={3}>
        <Button style={{ backgroundColor: '#eceff1', height: '5vh' }} 
        onClick={()=>history.push('/men')}
        >Men
        
        </Button>
        </Grid>
        <Grid item xs={3}>
        <Button style={{ backgroundColor: '#eceff1', height: '5vh' }}
        onClick={()=>history.push('/women')}
        >Women
        
        </Button>
        </Grid>
        <Grid item xs={3}>
        <Button style={{ backgroundColor: '#eceff1', height: '5vh' }}
        onClick={()=>history.push('/electronics')}
        >Electronics
      
        </Button>
        </Grid>
        <Grid item xs={3}>
        <Button style={{ backgroundColor: '#eceff1', height: '5vh' }}
        onClick={()=>history.push('/home')}
        >Home & Furniture
       
        </Button>
        </Grid>
      </Grid>

      </Container>
    </React.Fragment>
  );
}