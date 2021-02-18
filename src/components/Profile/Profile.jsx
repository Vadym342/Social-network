
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
     
        post={props.profilePage.post}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}

        addPost={props.addPost}

      />



    </div>
  )
}


export default Profile;