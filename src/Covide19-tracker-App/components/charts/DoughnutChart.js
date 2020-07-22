import React from 'react';
import {Doughnut} from 'react-chartjs-2';
                              
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

//   var arr ={
//     label :[],
//     data :[]
//   } 
//   Object.keys(props.data19).map((val)=>{
      
//     arr.label.push(val.replace(/_/g,' ').toUpperCase()); 
//     arr.data.push(props.data19[val]);
// });

//   var newArr ={
//     label :[],
//     data :[]
//   };

//   for (let i =0; i <= (arr.label).length; i++){
//     if (arr.label[i] === "TOTAL CASES" || arr.label[i] === "TOTAL RECOVERED" || arr.label[i] === "TOTAL DEATHS"){
//         newArr.label.push(arr.label[i]);
//         newArr.data.push(arr.data[i]);
//     }
//   };

  const state = {
    labels: label,
    datasets: [
      {
        label: 'Virus spread',
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
        borderWidth: 2,
        data: data,
      }
    ]
  }
  

    return (
      <div>
        <Doughnut
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