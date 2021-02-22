import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';



 let rerederEntireTree = (state)=>{
ReactDOM.render(
    <BrowserRouter>
 {/*  <React.StrictMode> */}
    <App state={store.getState()} 
    addPost={store.addPost.bind(store)} 
    updateNewPostText={store.updateNewPostText.bind(store)}  />
 {/*  </React.StrictMode>, */}
  </BrowserRouter>,document.getElementById('root') 
);


}
rerederEntireTree(store.getState());

store.subscribe(rerederEntireTree);