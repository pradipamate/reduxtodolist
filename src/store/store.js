import { createStore } from 'redux';
import {v1 as uuid} from "uuid"; 
import{composeWithDevTools} from 'redux-devtools-extension';
import Rootreducer from "../reducer/Rootreducer"


const store = createStore(Rootreducer,composeWithDevTools())
export default store;