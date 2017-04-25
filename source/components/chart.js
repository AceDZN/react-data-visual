import React from 'react';
import ChartJS from 'chart.js';

export default class Chart extends React.Component{
  componentDidMount(){
    const ctx = this.refs['chart'].getContext('2d');
    let {type, data, options} = this.props;
    this.chart = new ChartJS(ctx, {type:type,data:data,options:options});
  }

  render(){
    return <div style={{width:600, height: 300, backgroundColor: 'white'}}>
      <canvas ref="chart"></canvas>
    </div>;
  }
}
