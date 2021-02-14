
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
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name="Vasyan" id="1" />
                <DialogItem name="Blabla" id="2" />
                <DialogItem name="Oleg" id="3" />
                <DialogItem name="bbb" id="4" />
            </div>

            <div className={s.messages}>
                <Message message="hi" />
                <Message message="hello" />
                <Message message="blabla" />
            </div>



        </div>


    )
}



export default Dialogs;
