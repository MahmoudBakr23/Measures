const GET_USERS = 'GET_USERS';

const getUsers = (users) => {
    return {
        type: GET_USERS,
        payload: users
    }
}

export { GET_USERS, getUsers };
