import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  return (
    <div className={s.postsBlock}>

      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message='Hello world' countLike='5' />
        <Post message="it's my first post" countLike='15' />


      </div>
    </div>


  )

}


export default MyPosts;