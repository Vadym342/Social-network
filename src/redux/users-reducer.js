const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


const initialState = {
    users: [
        // { id: 1, followed: false, fullName: 'Vasyan', status: ' Blablabla', location: { city: 'Lviv', country: 'Ukraine' } },
        // { id: 2, followed: true, fullName: 'BoB', status: ' Blablabla', location: { city: 'New York', country: 'USA' } },
        // { id: 3, followed: true, fullName: 'Marli', status: ' Blablabla', location: { city: 'Berlin', country: 'Germany' } },
    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed:true }
                    }
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed:false }
                    }
                    return u;
                })
            }

        }

        case SET_USERS: {
            return { ...state, users: [...state, ...action.users] }
        }

        default:
            return state;
    }


}
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });


export default usersReducer;