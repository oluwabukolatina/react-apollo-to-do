import React from 'react';
import { UPDATE_TODO_STATUS,DELETE_TODO } from './../graphql/mutation';
import {useMutation} from '@apollo/client'
import { GET_TODOS } from '../graphql/queries';

const Todo = ({ todo }) => {
         console.log(todo)
         const [toggleTodo,] = useMutation(UPDATE_TODO_STATUS);
         const [deleteATodo]= useMutation(DELETE_TODO)
         const handleToggle = async ({ id, done }) => {
                  const variables = {id, done: !done}
                  console.log(!done)
                  await toggleTodo({variables})
         }
         const deleteTodo = async({id}) => {
                  const variables = { id }
                  await deleteATodo({
                           variables, update: cache => {
                                    const prevData = cache.readQuery({ query: GET_TODOS })
                                    console.log(cache)
                                    const newData = prevData.todos.filter(todo => todo.id !== id)
                                    cache.writeQuery({query: GET_TODOS, data: {todos: newData}})
}})
         }
         return (<div className="todo">
                  <p style={{textDecoration : todo.done === true ?  'line-through' : 'none'}} className="todo-name" onClick={() => handleToggle(todo)}>{todo.text
                  
         }</p>
                  <button onClick={() => deleteTodo(todo)}>x</button>
         </div>)
}
export default Todo;