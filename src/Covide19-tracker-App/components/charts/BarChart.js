import React from 'react';
import {Bar} from 'react-chartjs-2';
                             
export default function BarChart(props) {
  let {label, data} = props.arr;
  
  label = [
    label[3],
    label[5],
    label[4],
  ];
  
  data = [
    data[3],
    data[5],
    data[4],
    ];


  const state = {
    labels: label,
    datasets: [
      {
        label: 'Virus spread',
        backgroundColor: ['Orange', 'rgba(54, 162, 235, 1)', 'violet', 'seashell'],
        borderColor: 'transparent',
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
              text:'',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
};