import InitialState from './InitialState'
import { CHANGE_APP } from '../actions/actions_appChange';
import _ from 'lodash';
export const App = (state = InitialState , action ) => {
    switch(action.type){
        case CHANGE_APP:

            return _.merge({},state,{name : action.payload});

        default:
            return state;
    }
}



