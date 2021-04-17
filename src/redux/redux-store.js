import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});


let store = createStore(reducers);

window.store = store;
export default store;