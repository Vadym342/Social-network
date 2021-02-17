import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={props.state.navbar.friends} />

        <div className='app-wrapper-contant'>
          <Route /* exact */ path='/dialogs'
            render={() => <Dialogs
              dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages} />} />

          <Route path='/profile'
            render={() => <Profile
              post={props.state.profilePage.post}
              addPost={props.addPost}
              />} />
          <Route path='/settings' render={() => Settings} />

          <Route path='/news' render={() => News} />
          <Route path='/music' render={() => Music} />


        </div>

      </div>
    </BrowserRouter>
  );
}




export default App;
