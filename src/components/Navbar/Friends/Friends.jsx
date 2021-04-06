import s from './Friends.module.css'



const Friends = (props) => {

    let friends = props.friends.map(f => <div>
        <img img src="{f.img}"></img><div>{f.name}
        </div>
    </div>)
    return (
        <div>
            <h3>Friends</h3>
            <div>
                {friends}
            </div>
        </div>

    )
}


export default Friends;