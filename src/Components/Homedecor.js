import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { mapStateToProps, dispatchState } from '../action/Connection'

//Defining Styles for Home Decor Components
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


//Exporting Electronics Component
function HomeDecor(props) {
  const [data, setData] = useState("mainCateogory");
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [sorting, setSorting] = useState("");
  const [select, setSelect] = useState("");

  //Including Home Decor json file
  const homeData = require('../JsonData/home.json')

  //mapping Home Decor json file for
  const Sofa =
    homeData["Sofa"].map((item) => {
      return (
        <Grid item xs={6} sm={3}>
          <Card className={classes.cardroot}
            onClick={() => {
              setData("");
              setTitle(item.title);
              setDescription(item.Description);
              setImage(item.Image);
              setAmount(item.amount);
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.Image}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={item.title}>
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5" className={item.Description}>
                  {item.Description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5" className={item.amount}>
                  Price: ${item.amount}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      )
    })

  //mapping Home Decor json file for Table
  const Table =
    homeData["Table"].map((item) => {
      return (
        <Grid item xs={6} sm={3}>
          <Card className={classes.cardroot}
            onClick={() => {
              setData("");
              setTitle(item.title);
              setDescription(item.Description);
              setImage(item.Image);
              setAmount(item.amount);
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.Image}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={item.title}>
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5" className={item.description}>
                  {item.Description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5" className={item.amount}>
                  Price: ${item.amount}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      )
    })

  ////mapping Home Decor json file for Flower pot
  const FlowerPot =
    homeData["FlowerPot"].map((item) => {
      return (
        <Grid item xs={6} sm={3}>
          <Card className={classes.cardroot}
            onClick={() => {
              setData("");
              setTitle(item.title);
              setDescription(item.Description);
              setImage(item.Image);
              setAmount(item.amount);
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.Image}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={item.title}>
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5" className={item.description}>
                  {item.Description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5" className={item.amount}>
                  Price: ${item.amount}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      )
    })

  ////mapping Home Decor json file for Paintings
  const Paintings =
    homeData["Paintings"].map((item) => {
      return (
        <Grid item xs={6} sm={3}>
          <Card className={classes.cardroot}
            onClick={() => {
              setData("");
              setTitle(item.title);
              setDescription(item.Description);
              setImage(item.Image);
              setAmount(item.amount);
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                // image={props.image}
                image={item.Image}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={item.title}>
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5" className={item.Description}>
                  {item.Description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h5" className={item.amount}>
                  Price: ${item.amount}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      )
    })

  //including Main Category json File 
  const mainCategory = require("../JsonData/maincategories.json")

  //mapping MainCategory json file 
  const Category =
    mainCategory["homeCategory"].map((item) => {
      return (
        <Grid item xs={6} sm={3}>
          <Card className={classes.cardroot}
            onClick={() => {
              setData(item.title)
              setSorting(item.title);
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.Image}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={item.title}>
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" className={item.Description}>
                  {item.Description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      )
    })

  //selected item
  const Item = () => {
    return (
      <Grid item xs={12}>
        <Card className={classes.cardroot}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className={title}>
                {title}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2" className={description}>
                {description}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2" className={amount}>
                Price: ${amount}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<ShoppingCartRoundedIcon />}
              onClick={() => props.cart({ title, description, image, amount }, "UPDATE")}
            >Add To Cart</Button>
          </CardActionArea>
        </Card>
      </Grid>

    )
  }

  //filtering Product on basis of selected option
  const Filter = (props) => {
    const handleChange = (event) => {
      const name = event.target.value;
      setSelect(name)
      const FilterData = homeData[props.sort].sort(dynamicSort("amount"))
    };
    //Function to sort Product 
    function dynamicSort(property) {
      return function (a, b) {
        return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      }
    }
    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Select Filter</InputLabel>
        <Select
          native
          value={select}
          onChange={handleChange}
          label="Filter"
        >
          <option aria-label="None" value="" />
          <option value="amount">Price(Low-High)</option>
          <option value="size">Size</option>
        </Select>
      </FormControl>
    )
  }


  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        {((data === "Paintings") || (data === "Sofa") || (data === "Table") || (data === "FlowerPot")) ? <Filter sort={sorting} /> : ""}
        <Grid container spacing={3}>
          {(data === "mainCateogory") ? Category : (data === "Sofa") ? Sofa : (data === "Table") ? Table : (data === "FlowerPot") ? FlowerPot : (data === "Paintings") ? Paintings : <Item />}
        </Grid>
      </Container>

    </div>
  );
}

export default connect(mapStateToProps, dispatchState)(HomeDecor);
