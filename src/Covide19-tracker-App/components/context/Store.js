import React from 'react';

const Country = "world";
// console.log(Country);

export const CountryData = React.createContext(Country);


 const reducer = (state, action) =>{
    switch(action.type){
        
        case "CHNAGE_COUNTRY":{

            return action.payload;
        } 
        
        default : return state        
        
    }
            
};

export const TransProvider = ({children}) =>{
    let [country, dispatch] = React.useReducer(reducer, Country);
    

    const addTrans = transObj =>{


    dispatch({
        type: "CHNAGE_COUNTRY",
        payload: transObj,
    })

} 

const values ={
    country,
    addTrans,
}
    return(
        <>

        <CountryData.Provider value={values}>
                {children}
        </CountryData.Provider>
        
        </>
        
    )
}