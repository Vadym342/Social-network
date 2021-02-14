import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App =()=> {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
           <Header/>
           <Navbar/>
         
         <div className='app-wrapper-contant'>
           <Route /* exact */ path='/dialogs' component={Dialogs}/>
           <Route path='/profile' component={Profile}/>
           <Route path='/settings' component={Settings}/>
           <Route path='/news' component={News} />
           <Route path='/music' component={Music} />
         
         
        </div>

    </div>
    </BrowserRouter>
  );
}




export default App;
