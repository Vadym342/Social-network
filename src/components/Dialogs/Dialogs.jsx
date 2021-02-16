
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>

        </div>


    )


}




const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Vasyan' },
        { id: 2, name: 'Max' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Blabla' },

    ]
    let messages = [
        { id: 1, messages: 'hi' },
        { id: 2, messages: 'hello' },
        { id: 3, messages: 'blabla' },
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.messages} id={m.id} />)

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
