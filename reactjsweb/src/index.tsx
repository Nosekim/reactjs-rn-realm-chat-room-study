import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import Main from './routes/main'
import reportWebVitals from './reportWebVitals';
//import 'rsuite/lib/styles/index.less'; 
import 'rsuite/dist/styles/rsuite-dark.css'

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();