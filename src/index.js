import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/index'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='index'>
        <App />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


