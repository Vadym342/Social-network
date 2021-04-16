import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
//import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';
/* const DialogsContainer = (props) => {


  return <StoreContext.Consumer>
    {store => {
      let state = store.getState().dialogsPage;
      let addMessage = () => {
        store.dispatch(addMessageActionCreator());
      }

      let onDialogsChange = (text) => {
        store.dispatch(updateNewMessageTextActionCreator(text));
      }

      return <Dialogs updateNewMessageText={onDialogsChange} addMessages={addMessage}
        dialogsPage={state} newMessageText={state.newMessageText} />
    }
    }
  </StoreContext.Consumer>
} */

let mapStatetoProps = (state) => {

  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
  }

};
let mapDispatchToProps = (dispatch) => {

  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    addMessages: () => {
      dispatch(addMessageActionCreator());
    }
  } 

};
const DialogsContainer = connect(mapStatetoProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
