import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodoAction } from '../action/todoaction';

const Todolist = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  //Dispatch Data
  const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));
  console.log("todos list", todos);
  if (todos.length !== "" && todos !== undefined) {
    var TodoList = todos.map(todo => (
      <li key={todo.id}>
        <span>{todo.name}</span>
        <span className="delete-button" onClick={deleteTodo.bind(null, todo.id)}>x</span>
      </li>
    ))
  }

  return (
    <ul className="">
      {TodoList}
    </ul>
  )
}
export default Todolist;