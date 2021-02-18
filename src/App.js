import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';



const App = (props) => {

  return (
  
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
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
              />} />
          <Route path='/settings' render={() => Settings} />

          <Route path='/news' render={() => News} />
          <Route path='/music' render={() => Music} />


        </div>

      </div>
   
  );
}




export default App;
