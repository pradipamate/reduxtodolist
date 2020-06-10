import { createStore } from 'redux';
import {v1 as uuid} from "uuid"; 
import Todoreducer from "../reducer/Todoreducer"

const initialstage = {
    todos:[
         {
         id:uuid(),
         name:"go to gym"
         },
         {
            id:uuid(),
            name:"go to gym2"
         }
      ]
}

export const store = createStore(
    Todoreducer,
    initialstage
)
export default store;