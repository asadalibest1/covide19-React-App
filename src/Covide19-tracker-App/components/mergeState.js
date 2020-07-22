import React from 'react';
import Gride from "./Gride"

// import ShowCountry from "./ShowCountry";
import ShowAllCountries from "./ShowAllCountries";

import {CountryData} from "./context/Store";

export default function MergeState(){
    
    const {country} = React.useContext(CountryData);
   
        if(country === "allCountries")
            return  <ShowAllCountries />
        else
            return <Gride />
                  
            
            

}


