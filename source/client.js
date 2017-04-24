import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import data from './data/data.json';

ReactDOM.render(<App {...data} />, document.getElementById('react') );
