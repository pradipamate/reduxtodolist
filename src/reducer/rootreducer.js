import {combineReducers} from 'redux';
import Todoreducer from "../reducer/Todoreducer";

export default combineReducers({
    Todos:Todoreducer,
})