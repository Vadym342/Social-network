import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';



 let rerederEntireTree = (state)=>{
 
ReactDOM.render(
    <BrowserRouter>
 {/*  <React.StrictMode> */}
    <App 
    store={store}
    state={store.getState()} 
    dispatch={store.dispatch.bind(store)} 
    />
 {/*  </React.StrictMode>, */}
  </BrowserRouter>,document.getElementById('root') 
);


}
rerederEntireTree(store.getState());

//store.subscribe(rerederEntireTree);  //! work!!!
store.subscribe(()=>{
   let state = store.getState();
   rerederEntireTree(state);
});