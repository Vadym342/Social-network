import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {addPost, subscribe, updateNewPostText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state'


 let rerederEntireTree = (state)=>{
ReactDOM.render(
    <BrowserRouter>
 {/*  <React.StrictMode> */}
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}  />
 {/*  </React.StrictMode>, */}
  </BrowserRouter>,document.getElementById('root')
);


}
rerederEntireTree(state);

subscribe(rerederEntireTree);