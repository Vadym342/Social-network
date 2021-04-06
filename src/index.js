import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
//import StoreContext, { Provider } from './StoreContext';

ReactDOM.render(
    <BrowserRouter>
 {/*  <React.StrictMode> */}
 <Provider store={store}>              {/*  //! react-redux func or own StoreContext  */}
    <App 

   /*  store={store}
    state={store.getState()} 
    dispatch={store.dispatch.bind(store)}  */
    />
    </Provider>
 {/*  </React.StrictMode>, */}
  </BrowserRouter>,document.getElementById('root') 
);

//store.subscribe(rerederEntireTree);  //! work!!!
