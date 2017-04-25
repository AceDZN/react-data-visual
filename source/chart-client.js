import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';
import chartData from './data/chart-data.csv';

let obj = chartData.shift(),
   formatedData = {labels: [obj.name], datasets: []},
   map: new Map();

delete obj.name;
for(let item in obj){
  let ds = {label: item, data: [obj.item]};
  formatedData.datasets.push(ds);
  map[item] = ds;
  console.log(ds);
}

chartData.forEach((obj, i, a)=>{
  formatedData.labels.push(obj.name);
  delete obj.name;
  for(let item in obj){
    map[item].data.push(obj[item])
  }
});


const data = formatedData;
}

ReactDOM.render(<Chart {...data} />, document.getElementById('react'));
