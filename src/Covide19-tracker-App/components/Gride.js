   import React, {useEffect, useContext, useState} from "react";
   import axios from 'axios';
   import Loader from "./loader.js";

   import { Grid } from "@material-ui/core";
   import Card from "@material-ui/core/Card";
   import CardActionArea from "@material-ui/core/CardActionArea";
   import CardActions from "@material-ui/core/CardActions";
   import CardContent from "@material-ui/core/CardContent";
   import CardMedia from "@material-ui/core/CardMedia";
   import Button from "@material-ui/core/Button";
   import Background from "../images/covide19.jpg";
   
   import DoughnutChart from "./charts/DoughnutChart";
   import BarChart from "./charts/BarChart";
   import MainBarChart from "./charts/MainBarChart";
   
  import {CountryData} from "./context/Store";
   

   export default function Gride() {
   
const {country} = useContext(CountryData);

    const [covide19, setCovid19Data] = useState([]);

    useEffect(()=>{
    async function fetchData(){
        const URL = `https:/covid-19.dataflowkit.com/v1/${country}`;
        let Data = await axios.get(URL, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }});

         delete Data.data.Country_text;
         delete Data.data["Last Update"];
         setCovid19Data(Data.data);
         document.getElementsByClassName("loader")[0].style.display = 'none';   

      }
      fetchData();
    
    },[country]);

const arr ={
  label: [],
  data: []
}    

const index = [5, 0, 7, 6, 3, 4];
const colors = ['rgb(99, 102, 201)', 'rgb(191, 151, 158)', "rgb(86, 104, 209)", 'rgb(230, 92, 92)', "rgb(219, 158, 158)", "rgb(142, 136, 219)" ];

// console.log(getData);
    return (
     
      <div style={{ marginTop: 20, padding: 30, margin: "0px 10px"}}>

      <h1 style={{color: "green", textAlign: "center", textTransform: "upperCase"}}> GLOBAL CONDITION OF {country}</h1>
            <Loader />
       
        <div style={{margin: "5px 5%", height: "300hvp"}}><MainBarChart colors={colors} arr={arr}/></div>

        <Grid container spacing={50} justify="center" style={{margin: "50px 0px"}}>
           {
Object.keys(covide19).map((val, ind) => (
             <Grid key={ind} style={{margin: 7}}>
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
                     <p hidden>{arr.label.push(val.replace("_text", "").toUpperCase())}</p>
                     <p hidden>{arr.data.push(Number(covide19[val].replace(/,/g, "")))}</p>

                       <h1 style={{fontSize: "36px", color: colors[ind] }}>
                       {(covide19[val] === "") ? "NO CASE TODAY": covide19[val]}</h1>

                       <h3>{val.replace("_text", "").toUpperCase()}</h3>
                     
                     
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

        <BarChart arr={arr}/>
        
        </Grid>
        <Grid item xs={12} sm={6}>
       
        <DoughnutChart arr={arr}/>
      
        </Grid>
      </Grid>
     
    </div>
    )
}