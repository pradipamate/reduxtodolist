import { combineReducers } from 'redux';
import Todoreducer from "./Todoreducer";

const Rootreducer = combineReducers({
    Todos: Todoreducer,
})

export default Rootreducer;