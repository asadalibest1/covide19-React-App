import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Background from "../images/COVID-19-trackers.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  head: {
    paddingTop: "8%",
    padding: theme.spacing(2),
    height: "380px",
    textAlign: 'center',
    // backgroundColor: "black",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-Repeat",
    backgroundSize: "100%"

  },
  main_header:{
    color: "White",
    textDecoration: "Uppercese",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Head() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
            
        <Grid className={classes.head} item xs={12}>
          <h1 className={classes.main_header}>BOOTCAMP 2020 PROJECT 2</h1>

            <h1 className={classes.main_header}>COVID19 TRACKER</h1>
        </Grid>
    </div>
  );
}
