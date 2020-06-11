import { createStore } from 'redux';
import {v1 as uuid} from "uuid"; 
import{composeWithDevTools} from 'redux-devtools-extension';
import Rootreducer from "../reducer/Rootreducer"

// const initialstage = {
//     todos:[
//          {
//          id:uuid(),
//          name:"go to gym"
//          },
//          {
//             id:uuid(),
//             name:"go to gym2"
//          }
//       ]
// }

const store = createStore(Rootreducer,composeWithDevTools())
export default store;