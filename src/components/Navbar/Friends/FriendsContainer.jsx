import Friends from './Friends'
import s from './Friends.module.css'



const FriendsContainer = (props) => {
    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState();

                //friends={props.state.navbar.friends}
                return <Friends friends={state.navbar.friends} ></Friends>

            }
        }
    </StoreContext.Consumer>
    
}


export default FriendsContainer;