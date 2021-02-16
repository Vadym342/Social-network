import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let post = [
    { id: 1, messages: 'ffffff', likecount: 5 },
    { id: 2, messages: 'aaaaaaa', likecount: 15 }
  ]

  let postElements = post.map(p => <Post message={p.messages} id={p.id} countLike={p.likecount} />)


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
        {postElements}
      </div>
    </div>


  )

}


export default MyPosts;