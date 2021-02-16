import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
  { id: 1, name: 'Vasyan' },
  { id: 2, name: 'Max' },
  { id: 3, name: 'Alex' },
  { id: 4, name: 'Blabla' },

]
let messages = [
  { id: 1, messages: 'hi' },
  { id: 2, messages: 'hello' },
  { id: 3, messages: 'blabla' },
]

let post = [
  { id: 1, messages: 'ffffff', likecount: 5 },
  { id: 2, messages: 'aaaaaaa', likecount: 15 }
]


ReactDOM.render(
  <React.StrictMode>
    <App dialogs ={dialogs} messages={messages}  post={post}/>
  </React.StrictMode>,
  document.getElementById('root')
);




reportWebVitals();
