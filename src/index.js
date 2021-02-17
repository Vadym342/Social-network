
import './index.css';
import reportWebVitals from './reportWebVitals';
import  state from './redux/state';

import { rerederEntireTree } from './render';



rerederEntireTree(state);


reportWebVitals();
