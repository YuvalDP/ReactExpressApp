export const ADD_FRIENDS = 'ADD_FRIENDS';
export const DELETE_FRIENDS ='DELETE_FRIENDS';
export const UPDATE_FRIENDS = 'UPDATE_FRIENDS';
export const EDIT_FRIEND = 'EDIT_FRIEND';

export const Add_Friend = (friend) => {
    return {
        type :ADD_FRIENDS,
        payload : friend
    };
}
export const deleteFriends  = (firstname) => {
    return {
        type:DELETE_FRIENDS,
        payload: {firstname}
    }
}
export const updateFriend  = (friend) => {
    return {
        type:UPDATE_FRIENDS,
        payload: friend
    }
}

export const editFriend = (firstname) => {
    return {
        type:EDIT_FRIEND,
        payload : {firstname}

    }
}
export const UpdateFriends = (friend) => {

    return {
        type : UPDATE_FRIENDS,
        payload : friend
    }

}