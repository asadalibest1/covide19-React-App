import React, {useState} from 'react';
import {Bar} from 'react-chartjs-2';
                              
export default function HeadDoughnut(props) {
let {label, data} = props.arr;


  const state = {
    labels: label,
    datasets: [
      {
      backgroundColor: props.colors,
      borderColor: 'white',
        borderWidth: 2,
        data: data,
      }
    ]
  }
  

    return (
      <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:' ',
              fontSize: 26
            },
            legend:{
              display: false,
              position:'right'
            }
          }}
        />
      </div>
    );
};