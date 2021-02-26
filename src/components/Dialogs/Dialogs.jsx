import DialogItem from './DialogItem/DialogIteam';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';
const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem d={props.dialogs} m={props.messages} name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message d={props.dialogs} m={props.messages} message={m.messages} id={m.id} />)
    let send = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
      }
    
      let onDialogsChange = () => {
    
        let text = send.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
      }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

            <div>
                <textarea onChange={onDialogsChange}  ref={send} value={props.newMessageText} >
                </textarea>
            </div>
            <div>
                <button onClick={addMessage} >Send message </button>
            </div>
        </div>


    )
}



export default Dialogs;
