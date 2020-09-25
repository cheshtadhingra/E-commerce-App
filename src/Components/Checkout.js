import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



function CheckOut() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
      marginTop: theme.spacing(2),
      alignContent: theme.spacing(10),

    },

    button: {
      margin: theme.spacing(4),
    },
  }));

  const history = useHistory()
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography>
        Your Orders are Placed.........
        </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => history.push('/')}
      >Shop More</Button>
    </Container>
  )
}

export default CheckOut;