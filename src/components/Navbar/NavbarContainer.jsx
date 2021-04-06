import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//import StoreContext from '../../StoreContext';
import Friends from './Friends/Friends';
import Navbar from './Navbar';
import s from './Navbar.module.css';
/* 
const NavbarContainer = (props) => {

  return <StoreContext.Consumer>
    {store => {
      let state = store.getState();

      //friends={props.state.navbar.friends}
      return <Navbar friends={state.navbar.friends} ></Navbar>

    }
    }
  </StoreContext.Consumer>

} */

let mapStatetoProps = (state) => {

  return {
    friends: state.navbar.friends
  }
}

let mapDispatchToProps = (dispatch) => {
return{

}

}

const NavbarContainer = connect(mapStatetoProps,mapDispatchToProps)(Navbar);

export default NavbarContainer;