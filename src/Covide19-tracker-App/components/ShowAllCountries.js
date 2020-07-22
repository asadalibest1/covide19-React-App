    import React, {useEffect, useState} from "react";
    import axios from 'axios';

  import { makeStyles } from '@material-ui/core/styles';
  import { Grid, Typography } from "@material-ui/core";
   import Card from "@material-ui/core/Card";
   import CardActionArea from "@material-ui/core/CardActionArea";
   import CardContent from "@material-ui/core/CardContent";
   import CardMedia from "@material-ui/core/CardMedia";
   import Background from "../images/lending-tracker.jpg";
   import Loader from "./loader.js";

   import PieChart from "./charts/GlobalPieChart";

   const useStyles = makeStyles((theme) => ({
    h5:{
      padding: 0,
      margin: 1,
    }
   
  }));

export default function ShowAllCountries(){
const classes = useStyles();

const [covide19, setCovid19Data] = useState([]);

useEffect(()=>{
      async function fetchData(){
        const URL = `https:/covid-19.dataflowkit.com/v1`;
        let Data = await axios.get(URL, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }});
        //  Data.data.Country_text;
         Data = Data.data;
         delete Data[0];
        //  delete Data.data.Country_text;
        //  delete Data.data["Last Update"];
         
         setCovid19Data(Data);
         document.getElementsByClassName("loader")[0].style.display = 'none';   
         setTimeout(()=> alert("Pleaze press (CTRL + F) for finding a Country"), 4000);

        }
         fetchData();
      
    }, []);
    // console.log(covide19);
const cases = ["Total Cases_text", "Total Recovered_text", "New Cases_text", "New Deaths_text"];
const cases2 = ["TOTAL CASES", "TOTAL RECOVERED", "NEW CASES TODAY", "NEW DEATHS TODAY"];
var arr = [];

return(
  
  <div style={{ marginTop: 20, padding: 30, margin: "0px 10px"}}>
  <h1 style={{color: "green", textAlign: "center", textTransform: "upperCase", margin: "30px 0px"}}>GLOBAL CONDITION OF COVIDE-19</h1>
  
      <Loader />
   
     <Grid container spacing={3} justify="center">
        {
Object.keys(covide19).map((val, ind) =>{
    return(
<Grid item xs={12} sm={4} key={ind}>

<p hidden>{
  arr = [
  covide19[val][cases[0]],
  covide19[val][cases[1]],
  covide19[val][cases[2]],
  covide19[val][cases[3]] ]
}</p>

        <Card>
          <CardActionArea>
            
            <CardMedia
                   component="img"
                   alt="data"
                   height="100"
                   image={Background}
                   title="Contemplative Reptile"
            />

            
<CardContent>

<Grid container spacing={2}>

<Grid item xs={12}>
<h2 style={{textTransform: "uppercase", textAlign: "center"}}>{covide19[val]["Country_text"]} </h2>
</Grid>

<Grid item xs={6}>
        <Typography gutterBottom variant="h5" component="h2">
        
        <h6>{cases2[0]}<h1 className={classes.h5} style={{color: "Orange"}}> {(arr[0] !== "N/A") ? arr[0] : "Data not found"} </h1></h6>
        <h6>{cases2[1]}<h1 className={classes.h5} style={{color: 'rgba(54, 162, 235, 1)'}}> {(arr[1] !== "N/A") ? arr[1] : "Data not found"} </h1></h6>
            </Typography>
        
            <Typography component="p">
            <h5>{cases2[2]}: <br /> <b style={{color: "violet"}}> {(arr[2] !== "") ? arr[2] : "No case today"} </b></h5>
            <h5>{cases2[3]}: <br /> <b style={{color: "green"}}> {(arr[3] !== "") ? arr[3] : "No case today"} </b></h5>

            </Typography>
</Grid>

<Grid item xs={6}>
                  <PieChart 
                  Label = {cases2}
                  Data={arr}
                  />

</Grid>
</Grid>
          </CardContent>

          </CardActionArea>
     
        </Card>

              
              {arr = []}
      </Grid>

)
         
}
)
       }
      
      
      </Grid>
    </div>
  );
}