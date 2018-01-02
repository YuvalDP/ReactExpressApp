import  { ADD_FRIENDS,DELETE_FRIENDS,UPDATE_FRIENDS,EDIT_FRIEND  } from '../actions';
import InitialState from './InitialState';

export const friendsListReducer = (state = InitialState.friendsListReducer, action) => {
    switch(action.type){
        case ADD_FRIENDS:
            return Object.assign({},state,{friends_list:[...state.friends_list,action.payload]});


        case DELETE_FRIENDS:
                const BackUpFriendArray = [...state.friends_list];
                const index = BackUpFriendArray.findIndex(
                    function (friend) {
                        return friend.firstname === action.payload.firstname;
                    }
                );
              return Object.assign({},state,{friends_list:[...BackUpFriendArray.slice(0,index),...BackUpFriendArray.slice(index+1)]});



        case EDIT_FRIEND:
            console.log('Hello');
            return Object.assign({},state,{edit_friend:action.payload.firstname},{friends_list : [...state.friends_list]});


        case UPDATE_FRIENDS :
                const newFriendArray = [...state.friends_list];
                const indexOf = newFriendArray.findIndex(
                    function (friend) {
                        return friend.firstname === action.payload.firstname
                    }
                );
                console.log('index' , indexOf , 'firstname' , action.payload.firstname);

                const UpdatedFriend = {
                    ...newFriendArray[indexOf],firstname : action.payload.firstname,lastname : action.payload.lastname, email : action.payload.email , city : action.payload.city, mobileno : action.payload.mobileno
                };

                return Object.assign({},state , {friends_list :[...newFriendArray.splice(0,indexOf),UpdatedFriend ,...newFriendArray.splice(indexOf+1)]});

        default :
            return state;


    }

}