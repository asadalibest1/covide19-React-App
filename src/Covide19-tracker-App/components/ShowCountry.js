import React, { useEffect, useState, useContext } from 'react';
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Background from "../images/COVID-19-tracker.jpg";

import DoughnutChart from "./charts/DoughnutChart";
import BarChart from "./charts/BarChart";
import MainBarChart from "./charts/MainBarChart";

import fetchCountryData from "./fetch/fetchCountryData";

import {CountryData} from "./context/Store";

export default function ShowCountry(props){
  const {country} = useContext(CountryData);
  
  const [countryName, setCountryName] = useState('');
    const [Data, setData] = useState({});
// console.log(country);

useEffect(() => {
        
    async function api() {
        const url  = `https://api.thevirustracker.com/free-api?countryTotal=${country}`
        const data = await fetch(url, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }});
        let data1 = await data.json();

        // let data1 = fetchCountryData;
        // console.log(data1);
        //  setCountryName(data1.countrydata[0].info.title)
        // delete data1.countrydata[0].info;
        // setData(data1.countrydata[0]);
    }
    api();

}, [country]);

// console.log(countryName);
const colors = ['red', 'rgba(54, 162, 235, 1)', "orange", "yellow", "blue", "skyblue", "purple", "pink", "green"];
var num = 0;

 return (
   
    <div style={{ marginTop: 20, padding: 30, margin: "0px 10px"}}>
  <h1 style={{color: "green", textAlign: "center", textTransform: "upperCase"}}> GLOBAL CONDITION OF THE {countryName}</h1>

     <div style={{margin: "20px 18%"}}><MainBarChart colors={colors} data19={Data}/></div>

     <Grid container spacing={50} justify="center">

        {
Object.keys(Data).map(val => (
          <Grid item key={val} style={{margin: 7}}>
            <Card style={{width: "370px"}}>
              <CardActionArea>
                
                <CardMedia
                       component="img"
                       alt="data"
                       height="100"
                       image={Background}
                       title="Contemplative Reptile"
                />

                <CardContent>
                    {/* <Typography gutterBottom variant="h5" component="h2"> */}
                    <h1 style={{fontSize: "36px", color: colors[num] }}>{Data[val]}</h1>
                     {/* </Typography> */}
                     {/* <Typography component="h3"> */}
                     <h3>{val.replace(/_/g,' ').toUpperCase()}</h3>
                     {/* </Typography> */}
                     <p hidden>{num = num + 1}</p>

                
                </CardContent>

              </CardActionArea>
              
            </Card>
          </Grid>

        ))
       }
      
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <h1 style={{color: "green", textAlign: "center", fontFamily: "arial"}}>GRAPHICAL CONDITION OF CASES</h1>      
        </Grid>
        <Grid item xs={12} sm={6}>

        <BarChart data19={Data}/>
        
        </Grid>
        <Grid item xs={12} sm={6}>
       
        <DoughnutChart data19={Data}/>
      
        </Grid>
      </Grid>
        </div>
  );
}