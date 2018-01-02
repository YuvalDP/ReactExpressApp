import InitialState from './InitialState'
import { ADD_FILES, DELETE_FILES, GET_FILES } from '../actions/actions_gdrive';

export const googleDriveReducer = (state = InitialState.googleDriveReducer ,action) => {
    switch(action.type){
        case ADD_FILES :
            console.log('Add files called..')
            return Object.assign({},state);
        case DELETE_FILES :
            return Object.assign({}, state);
        case  GET_FILES:
            return Object.assign({}, state);

        default:
            return state;

    }
};

export default googleDriveReducer;