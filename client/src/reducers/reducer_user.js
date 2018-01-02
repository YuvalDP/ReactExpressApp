import InitialState from './InitialState';
import _ from 'lodash';
import { ADD_USER, DELETE_USER, UPDATE_USER, GET_USERS, GET_AUTH } from '../actions/action_users';

export const reducer_user = (state = InitialState.reducer_user, action) => {
    switch (action.type){
        case ADD_USER:
            console.log('action = ',action);
            return state;
        case DELETE_USER:
            return _.merge({});
        case UPDATE_USER:
            return _.merge({});
        case GET_AUTH:
            if(action.payload.data._id){
                return _.merge({}, state, {
                    login_user_detail : action.payload.data
                });
            }else{
                return _.merge({}, state, {
                    login: false
                });
            }

        case GET_USERS:
            return _.merge({},state,{
                    all_users : [...action.payload.data],
                    Loaded:true
            });
        default :
            return state;
    }


};