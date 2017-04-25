import React from 'react';
import ChartJS from 'chart.js';

export default class Chart extends React.Component{
  render(){
    return <div style={{width:900, height: 300, backgroundColor: 'blue'}}>
      <canvas ></canvas>
    </div>;
  }
}
