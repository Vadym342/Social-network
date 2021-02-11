import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts=()=>{

return <div>
   
       My posts
     <div>
      <textarea></textarea>
      <button>Add post</button>
     </div>
     <div className={s.posts}>
    <Post message='Hello world' countLike='5'/>
    <Post message="it's my first post" countLike='15'/>
    

    </div>
   </div>




}


export default MyPosts;