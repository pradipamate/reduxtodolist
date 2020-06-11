import React, { useState } from 'react';
import './App.css';
import { v1 as uuid } from "uuid";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodoAction } from './action/todoaction';
import { addTodoAction } from './action/todoaction';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const App =()=> {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = ((todo) => dispatch(addTodoAction(todo)));
  const onChange = event => {
     setTodo(event.target.value)
  }
  const onSubmit = event => {
    event.preventDefault();
    if (todo.trim() === "") return;
      addTodo({
        id: uuid(),
        name: todo,
      })
    setTodo("")
  }

  // way to fecth data
  const todos = useSelector((state) => state.Todos);
  console.log("todo", todos);
   //Dispatch Data
  const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));
  var TodoList;
  if (todos !== undefined) {
    TodoList = todos.map(todo => (
      <li key={todo.id}>
        <span>{todo.name}</span>
        <span className="delete-button" onClick={deleteTodo.bind(null, todo.id)}>x</span>
      </li>
    ))
  }

  return (
    <div className="todolist_div">
      <Container >
        <Row>
          <Col sm={{ span: 6, offset: 4 }} >
            <h1>Todo List using Redux</h1>
            <form onSubmit={onSubmit}>
              <div>
                <input type="text" className="form-control" name="todo" placeholder="enter value" value={todo} onChange={onChange} />
                <Button type="submit">Add Todo </Button>
              </div>
            </form>
            <ul className="list">
              {TodoList}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
