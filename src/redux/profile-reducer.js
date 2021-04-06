const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const initialState = {
    newPostText: 'newPostText',
    post: [
        { id: 1, messages: 'ffffff', likecount: 5 },
        { id: 2, messages: 'aaaaaaa', likecount: 15 }
    ]
}


const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                messages: state.newPostText,
                likecount: 0
            };
            let stateCopy ={...state};
            stateCopy.post = [...state.post];
            stateCopy.post.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    }


}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export default profileReducer;