import React from 'react';
import {  gql, useMutation } from '@apollo/client';

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;
const AddPerson = () => {
         let input;
  const [addTodo] = useMutation(ADD_TODO);

         return (
                  <div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      addTodo({ variables: { type: input.value } });
                      input.value = "";
                    }}
                  >
                    <input
                      ref={(node) => {
                        input = node;
                      }}
                    />
                    <button type="submit">Add Todo</button>
                  </form>
                </div>
         )
}
export default AddPerson;