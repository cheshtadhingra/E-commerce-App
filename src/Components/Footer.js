import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//Specifying styles for footer
const useStyles = makeStyles((theme) => ({
   container: {
      marginTop: theme.spacing(2),
   },
}));


export default function Footer() {

   const classes = useStyles();
   // Footer columns
   const about = ["Contact Us", "About Us", "Careers", "Wholesale", "stories"];
   const help = ["Help", "Payments", "Shipping", "FAQ", "Cancellation &Return"];
   const policy = ["Return Policy", "Terms of Use", "Security", "Privacy", "Settings"];
   const social = ["Social", "Facebook", "Twitter", "You Tube"];
   const mailUs = ["Mail Us", "Shop Here private Limited, Bengaluru , Karnataka, India"];

   //column items in list type
   var About = about.map((item) => {
      return (
         <ListItem button key={item}>
            <ListItemText primary={item} />
         </ListItem>
      );
   })

   var Help = help.map((item) => {
      return (
         <ListItem button key={item}>
            <ListItemText primary={item} />
         </ListItem>
      );
   })

   var Policy = policy.map((item) => {
      return (
         <ListItem button key={item}>
            <ListItemText primary={item} />
         </ListItem>
      );
   })

   var Social = social.map((item) => {
      return (
         <ListItem button key={item}>
            <ListItemText primary={item} />
         </ListItem>

      );
   })
   var MailUs = mailUs.map((item) => {
      return (
         <ListItem button key={item}>
            <ListItemText primary={item} />
         </ListItem>
      );
   })
   return (
      <Container maxWidth="false" component="div" style={{ backgroundColor: '#eceff1', height: '60vh' }} className={classes.container}>
         <Grid container spacing={3}>
            <Grid item xs={2}>
               {About}
            </Grid>
            <Grid item xs={2}>
               {Help}
            </Grid>
            <Grid item xs={2}>
               {Social}
            </Grid>
            <Grid item xs={2}>
               {Policy}
            </Grid>
            <Grid item xs={2}>
               {MailUs}
            </Grid>
         </Grid>
      </Container>
   );
}