import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
      }
    
      let onDialogsChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
      }

    return (
        <Dialogs updateNewMessageText={onDialogsChange} addMessages={addMessage}
        dialogsPage={state}  newMessageText={state.newMessageText}/>
    )
}



export default DialogsContainer;
