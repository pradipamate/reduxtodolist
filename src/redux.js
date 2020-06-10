import { createStore } from 'redux';
import {v1 as uuid} from "uuid"; 


const initialstage = {
    todos:[
         {
         id:uuid(),
         name:"go to gym1"
         },
         {
            id:uuid(),
            name:"go to gym2"
         }
      ]
}

export const store = createStore(
    reducer,
    initialstage
)

function reducer(state,action){
   switch(action.type){
     case 'ADD_TODO':
       return{
           ...state,
           todos:[...state.todos,action.payload]

        };
        case 'DELETE_TODO':
            return{
                ...state,
                todos:state.todos.filter((todo)=>todo.id!==action.payload)
     
             };
     default :
       return state;
   }
}

export const addTodoAction = (todo)=>({
    type:'ADD_TODO',
    payload:todo
})

export const deleteTodoAction = todoid=>({
    type:'DELETE_TODO',
    payload:todoid
})