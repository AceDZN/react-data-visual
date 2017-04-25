import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart';

const data = {
  type: 'bar',
  data: {
      labels: ['label1','label2','label3','label4','label5','label6'],
      datasets: [{
        label: 'Fun',
        data: [80,40,21,56,43,98],
        backgroundColor: 'rgba(255,0,0,.2)',
        borderWidth: 1
      },
      {
        label: 'nice',
        data: [20,52,10,90,100,13],
        backgroundColor: 'rgba(0,0,255,.2)',
        borderColor: 'rgba(0,0,255,.7)',
        borderWidth: 1
      }]
  },
  options: {

  }
}

ReactDOM.render(<Chart {...data} />, document.getElementById('react'));
