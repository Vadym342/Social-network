
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts addPost={props.addPost} post={props.post}/>



    </div>
  )
}


export default Profile;