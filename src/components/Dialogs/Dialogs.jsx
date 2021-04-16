import DialogItem from './DialogItem/DialogIteam';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import React from 'react';
const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name}  id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.messages} id={m.id} />);
    let send = React.createRef();

    let addMessage = () => {
        props.addMessages();
    }

    let onDialogsChange = () => {

        let text = send.current.value;
        props.updateNewMessageText(text);
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
                <textarea onChange={onDialogsChange} placeholder="Enter your message" ref={send} value={props.newMessageText} >
                </textarea>
            </div>
            <div>
                <button onClick={addMessage} >Send message </button>
            </div>
        </div>


    )
}



export default Dialogs;
