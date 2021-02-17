import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react'
const MyPosts = (props) => {

  let postElements = props.post.map(p => <Post message={p.messages} id={p.id} countLike={p.likecount} />)

  let newPostElement = React.createRef();

  let addPost = () => {

    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value='';

  }

  return (
    <div className={s.postsBlock}>

      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost} >Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>


  )

}


export default MyPosts;