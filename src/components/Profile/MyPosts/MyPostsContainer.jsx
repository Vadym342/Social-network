import React from 'react'
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
//import StoreContext from '../../../StoreContext';
import MyPosts from "./MyPosts";

/* const MyPostsContainer = (props) => {
  return <StoreContext.Consumer >
    {store => {
      let state = store.getState();
      let addPost = () => {
        store.dispatch(addPostActionCreator());
      }

      let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        store.dispatch(action);
      }
      return <MyPosts updateNewPostText={onPostChange}
        addPost={addPost}
        post={state.profilePage.post}
        newPostText={state.profilePage.newPostText} />
    }
    }
  </StoreContext.Consumer>
}
 */



let mapStatetoProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    post: state.profilePage.post
  }
}
let mapDispatchToProps = (dispatch) => {

  return {
    addPost: ()=>{
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text)=>{
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
}


const MyPostsContainer = connect(mapStatetoProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;