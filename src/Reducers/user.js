import { GET_USERS } from '../Actions/user';

const initialUsers = []

const userReducer = (state = initialUsers, action) => {
    switch(action.type) {
        case GET_USERS:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default userReducer;