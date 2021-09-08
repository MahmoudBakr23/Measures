const GET_USERS = 'GET_USERS';
const CREATE_USER = 'CREATE_USER';

const getUsers = (users) => {
    return {
        type: GET_USERS,
        payload: users
    }
}

const createUser = (user) => {
    return {
        type: CREATE_USER,
        payload: user
    }
}

export { GET_USERS, CREATE_USER, getUsers, createUser };
