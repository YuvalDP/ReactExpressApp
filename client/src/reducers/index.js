import { combineReducers } from 'redux';
import {friendsListReducer} from './reducer_friends';
import googleDriveReducer from './reducer_drive_files'
import { App } from './reducer_App';
import { reducer as formReducer } from 'redux-form';
import { reducer_user } from './reducer_user';

const friends = combineReducers({
    friendsListReducer,
    googleDriveReducer,
    App,
    form: formReducer,
    reducer_user

});

export default  friends;
