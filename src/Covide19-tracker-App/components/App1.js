import React from 'react';
import "../css/App.css"

import AppBAr from "./appBar"
import MergeState from "./mergeState";
import Head from "./Head"
import Credit from "./Credit"



import {TransProvider} from "./context/Store";



export default function App(){
    return(
        <>
            <TransProvider>

                <AppBAr />
                <Head />

                <MergeState />
                <Credit />
            </TransProvider>
           </>
    )
}


