import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {v1 as uuid} from "uuid"; 
import { addTodoAction } from '../action/todoaction';

const TodoInput=()=>{
    const[todo,setTodo]=useState("");
    const dispatch = useDispatch();
    const addTodo=((todo)=>dispatch(addTodoAction(todo)));
    const onChange=event=>{
         setTodo(event.target.value)
      } 
    const onSubmit=event=>{
        event.preventDefault();
        if(todo.trim() ==="") return;
        addTodo({
            id:uuid(),
            name:todo,

        })
        setTodo("")
    }
    
    return(
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" name="todo" placeholder="enter value" value={todo} onChange={onChange} />
                <button type="submit" >Add Todo</button>
            </div>
            
        </form>
    )
}

export default TodoInput;
