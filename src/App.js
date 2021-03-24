import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {

  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar /* friends={props.state.navbar.friends} */ />

      <div className='app-wrapper-contant'>
        <Route /* exact */ path='/dialogs'
          render={() => <DialogsContainer /* store={props.store} */
          />} />

        <Route path='/profile'
          render={() => <Profile  /* store={props.store} */
          />} />
        <Route path='/settings' render={() => Settings} />

        <Route path='/news' render={() => News} />
        <Route path='/music' render={() => Music} />


      </div>

    </div>

  );
}




export default App;
