import DialogItem from './DialogItem/DialogIteam';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {

    
    let dialogsElements = props.dialogs.map(d => <DialogItem d={props.dialogs} m={props.messages} name={d.name} id={d.id} />);
    let messagesElements = props.messages.map(m =><Message   d={props.dialogs} m={props.messages} message={m.messages} id={m.id} />)

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>


    )
}



export default Dialogs;
