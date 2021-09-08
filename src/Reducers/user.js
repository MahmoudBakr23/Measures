import { GET_USERS, CREATE_USER } from '../Actions/user';

const initialUsers = []

const userReducer = (state = initialUsers, action) => {
    switch(action.type) {
        case GET_USERS:
            return action.payload;
        case CREATE_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default userReducer;