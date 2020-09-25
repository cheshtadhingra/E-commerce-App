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
import { connect } from 'react-redux';
import { mapStateToProps, dispatchState } from '../action/Connection'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


//specifying styles for Men Component
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


//Men functional Component
function Men(props) {
  const [data, setData] = useState("mainCateogory");
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [select, setSelect] = useState("");
  const [sorting, setSorting] = useState("");
  //including Men Json file
  const menData = require('../JsonData/men.json')
  //mapping json men file
  const Shirts =
    menData["Shirts"].map((item) => {
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
                <Typography gutterBottom variant="h5" component="h2" className={item.Description}>
                  {item.Description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" className={item.amount}>
                  Price: ${item.amount}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      )
    })

  //mapping men json file for Bottom wear
  const Bottoms =
    menData["Bottoms"].map((item) => {
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
                <Typography gutterBottom variant="h5" component="h2" className={item.Description}>
                  {item.Description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" className={item.amount}>
                  Price: ${item.amount}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      )
    })

  //mapping men json file for footwear
  const Shoes =
    menData["Shoes"].map((item) => {
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
                <Typography gutterBottom variant="h5" component="h2" className={item.Description}>
                  {item.Description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" className={item.amount}>
                  Price: ${item.amount}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      )
    })
  //mapping men json file for accessories
  const Accessories =
    menData["Accessories"].map((item) => {
      return (
        <Grid item xs={6} sm={3}>
          <Card className={classes.cardroot} onClick={() => {
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
                <Typography gutterBottom variant="h5" component="h2" className={item.Description}>
                  {item.Description}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" className={item.amount}>
                  Price: ${item.amount}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      )
    })
  //includng main category json file
  const mainCategory = require("../JsonData/maincategories.json")

  const Category =
    mainCategory["menCategory"].map((item) => {
      return (
        <Grid item xs={6} sm={3}>
          <Card className={classes.cardroot}
            onClick={() => {
              setData(item.title);
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

  //selected Item
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

  //filtering Data on basis of selected choice
  const Filter = (props) => {
    const handleChange = (event) => {
      const name = event.target.value;
      setSelect(name)
      const FilterData = menData[props.sort].sort(dynamicSort("amount"))
    };
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
        {((data === "Shirts") || (data === "Bottoms") || (data === "Accessories") || (data === "Shoes")) ? <Filter sort={sorting} /> : ""}
        <Grid container spacing={3}>
          {(data === "mainCateogory") ? Category : (data === "Shirts") ? Shirts : (data === "Bottoms") ? Bottoms : (data === "Accessories") ? Accessories : (data === "Shoes") ? Shoes : <Item />}
        </Grid>
      </Container>

    </div>
  );
}


export default connect(mapStateToProps, dispatchState)(Men);