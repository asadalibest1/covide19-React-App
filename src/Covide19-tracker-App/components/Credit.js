
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))
export default function Credit(){
const classes = useStyles();
    

return(
        <>
<div>
   
<Grid
className={classes.root} 
    container spacing={0}
    style={{
    // with: "100%",
    // height: "60px",
    textAlign: "center",
    backgroundColor: "purple",
    // display: "Flex",
    // justifyContent: "space-around",
    color: "white",
    padding: 0, margin: 0
    }}>

        <Grid item xs={12} sm={4}> 
        <h3>Github: github.com/asadalibest1</h3>
        </Grid>

        <Grid item xs={12} sm={4}>
        <h3>FB: asadali.asad.355</h3>
        </Grid>

        <Grid item xs={12} sm={4}>
        <h3>Gmail: asadalibest1@gmail.com</h3>
        </Grid>

      </Grid>
      </div>
        </>
    )
}
