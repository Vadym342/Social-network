const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {


    dialogs: [
        { id: 1, name: 'Vasyan' },
        { id: 2, name: 'Max' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Blabla' },

    ],

    messages: [
        { id: 1, messages: 'hi' },
        { id: 2, messages: 'hello' },
        { id: 3, messages: 'blabla' },
    ],
    newMessageText: '',

}


const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            };
        case ADD_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 4, messages: newMessage }]
            };
        //stateCopy.messages.push({ id: 4, messages: newMessage });
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });

export default dialogsReducer;