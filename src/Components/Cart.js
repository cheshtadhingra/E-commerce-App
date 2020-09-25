import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import CheckIcon from '@material-ui/icons/Check';
import { connect } from 'react-redux';
import { mapStateToProps, dispatchState } from '../action/Connection'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardroot: {
    maxWidth: 345,
    padding: theme.spacing(2),
  },
  media: {
    height: 300,
  },
  container: {
    marginTop: theme.spacing(2),

  },
  title: {
    alignItems: 'center'
  },
  button: {
    margin: theme.spacing(4),
  },
}));


//Declaring function cart to display cart details
function Cart(props) {
  const classes = useStyles();
  const history = useHistory()
  const CartMap =
    props.mycart.map((item) => {
      if ((item.title == null) && (item.image == null) && (item.description == null) && (item.amount == null)) {
        return (
          <></>
        )
      }
      else {
        return (
          <Grid item xs={6} sm={3}>
            <Card className={classes.cardroot}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={item.image}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" className={item.title}>
                    {item.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2" className={item.description}>
                    {item.description}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2" className={item.amount}>
                    price: ${item.amount}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={() => props.cart({ title: item.title, description: item.description, image: item.image, amount: item.amount }, "DELETE")}
                  >Delete from Cart</Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )
      }
    })

  return (<div className={classes.root}>
    <Container className={classes.container}>
      <Grid container spacing={3}>
        {CartMap}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CheckIcon />}
        onClick={() => history.push('/Checkout')}
      >Buy Now</Button>
    </Container>

  </div>
  )
}
//Component Subscribing redux store 
export default connect(mapStateToProps, dispatchState)(Cart);

