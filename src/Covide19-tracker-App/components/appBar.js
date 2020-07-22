import React from 'react';
import "../css/appbar.css";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import HealingIcon from '@material-ui/icons/Healing';
import logo from '../images/covide19.png';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


import {CountryData} from "./context/Store";

export default function App(){
  const {addTrans} = React.useContext(CountryData);
  
  const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: "0px",
        marginLeft: "1px",
        color: "white",
      },
      title: {
        color: "white",
        flexGrow: 1,
        display: "inline",
        paddingTop: "1%",
        paddingRight: "8%"
        
      },
      button: {
        color: "white"
      }
    }));
    const classes = useStyles();
    const countries = [{country: "PAKISTAN", code: "pakistan"}, {country: "INDIA", code: "india"}, {country: "CHINA", code: "china"}, {country: "AMERICA", code: "usa"}, {country: "RUSSIA", code: "Russia"}, {country: "AFGHANISTAN", code: "afghanistan"}, {country: "EGYPT", code: "egypt"}, {country: "SOUTH AFRICA", code: "south Africa"}]
  
  
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};
  
  return(
        <>

  <div class="topnav" id="myTopnav">
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={logo} style={{width: "35px", height: "35px"}}/>
          </IconButton>
          <Typography className={classes.title} onClick={()=>{addTrans("world")}} >
          <Button style={{fontSize: "20px", fontWeight: "bolder", color: "white"}}> COVID19 TRACKER </Button>
  </Typography>
        
        {countries.map((item, ind) =>{
          return(
             <a><Button color="inherit" onClick={()=>{myFunction(); addTrans(item.code)}}>{item.country}</Button></a>
             )
            })}
            <a><Button type="button" variant="contained" color="secondary" onClick={()=>{ myFunction(); addTrans("allCountries")}}>SHOW ALL COUNTRIES</Button></a>
  
  
  <a href="javascript:void(0);" class="icon" onClick={myFunction}> <ArrowDropDownIcon /> </a>


  </div>
        </>
    )
}











// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import IconButton from '@material-ui/core/IconButton';
// import HealingIcon from '@material-ui/icons/Healing';

// import {CountryData} from "./context/Store";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const {addTrans} = React.useContext(CountryData);
//   const hover = () =>{
//     // document.getElementsByTagName("Typography")[0].useStyle().color= "red";
//   }
//   const classes = useStyles();
//   const countries = [{country: "PAKISTAN", code: "pakistan"}, {country: "INDIA", code: "india"}, {country: "CHINA", code: "china"}, {country: "AMERICA", code: "usa"}, {country: "RUSSIA", code: "Russia"}, {country: "AFGHANISTAN", code: "afghanistan"}, {country: "EGYPT", code: "egypt"}, {country: "SOUTH AFRICA", code: "south Africa"}]
//   return (
//     <div className={classes.root}>

//       <AppBar position="static">
//         <Toolbar>
//           {/* <input type="text"  */}
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <HealingIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title} onMouseOver={hover} onClick={()=>{addTrans("world")}} >
//           COVID19 TRACKER
//         </Typography>

//         {countries.map((item, ind) =>{
//           return(
//               <Button color="inherit" onClick={()=>{addTrans(item.code)}}>{item.country}</Button>

//           )
//         })}
//               <Button type="button" variant="contained" color="secondary" onClick={()=>{addTrans("allCountries")}}>SHOW ALL COUNTRIES</Button>

//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
