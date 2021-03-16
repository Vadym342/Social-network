const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {

    newMessageText: '',
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
    ]


}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                messages: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });

export default dialogsReducer;