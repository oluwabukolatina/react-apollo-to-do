import React, { useState } from 'react';
import { ADD_TODO } from './../graphql/mutation';
import { useMutation } from '@apollo/client'
import { GET_TODOS } from './../graphql/queries';

const AddTodo = () => {
         const [addTodo] = useMutation(ADD_TODO);

         const [todo, setTodo] = useState('');

         const createTodo = async (e) => {
                  e.preventDefault()
                  console.log({ text: todo })
                  console.log(todo)
                  const variables = {text: todo}
                  await addTodo({
                           variables, refetchQueries: [{ query: GET_TODOS }]
                  });
                  setTodo('')
                  
         }
         return (
                  <div>
                           <form onSubmit={createTodo}>
                                    <input onChange={e => setTodo(e.target.value)} />
                                    </form>
                                    
                  </div>
         )
}
export default AddTodo;