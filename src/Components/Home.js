import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

//Styles for Home Component
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
  },
  media: {
    height: 300,
  },
  container: {
    marginTop: theme.spacing(2),

  },
  title: {
    alignItems: 'center'
  }
}));



export default function Home() {
  const classes = useStyles();
  const history = useHistory()
  const Cards = (props) => {
    return (
      <Card className={classes.cardroot}
        onClick={() => history.push(props.path)}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Cards image={require('../images/women.jpeg')} title="Women" path="/women" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Cards image={require('../images/men.jpeg')} title="Men" path="/men" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Cards image={require('../images/home.jpeg')} title="Home & Furniture" path="/home" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Cards image={require('../images/electronic.jpeg')} title=" Elctronics" path="/electronics" />
          </Grid>

        </Grid>
      </Container>

    </div>
  );
}
