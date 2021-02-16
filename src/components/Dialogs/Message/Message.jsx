
import s from './Message.module.css'

const Message = (props) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>


    )


}

export default Message;
