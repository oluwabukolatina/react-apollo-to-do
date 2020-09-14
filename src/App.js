import React from 'react';
import './App.css';
// import Launches from './Launches';
// import Query from './components/Query';
import { useQuery} from '@apollo/client';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import { GET_TODOS } from './graphql/queries';
function App() {
  
const { data } = useQuery(GET_TODOS);
  return (
    <div className="App">
      <h1>GQL Todo</h1>
      <AddTodo />
      <div className="todos">

      {data && data.todos.length && data.todos.map((todo) => (
        <Todo key={todo.id} todo={todo}/>
      ))}
      </div>
        

      </div>
  );
}

export default App;
