import React from 'react';
import {Doughnut} from 'react-chartjs-2';

export default function PieChart(props) {

let {Label, Data} = props;

var Data2 = [];
Data.map(val =>{
  if (val !== undefined)
      return  Data2.push(val.replace(/,/g, ""))
    else 
      return 0;
    })

// console.log(Label);
console.log(Data2);

  const state = {
    labels: Label,
    datasets: [
      {
        label: 'Virus spread',
        backgroundColor: ['Orange', 'rgba(54, 162, 235, 1)', 'violet', 'green'],
        borderColor: 'transparent',
        borderWidth: 1,
        data: Data2, 
      }
    ]
  }
  

    return (
      <div style={{marginTop: "11vh"}}>
        <Doughnut 
                data={state}
                options={{
                    padding:"0px",
                    responsive: true,
                    maintainAspectRatio:false,
                    defaultFontSize:"8px",
                    legend:{
                        display:false,
                    },
                    plugins:{
                        datalabels: {
                            color:'#000000',
                            anchor: "start",
                            align:"auto",
                            formatter: function(value, context) {
                                    return context.chart.data.labels[context.dataIndex];
            }
                        }
                    } 
                }}
                />
      </div>
    );
};