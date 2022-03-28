import React from 'react';

import CompleteButton from './CompleteButton';

export default function Todo({ todo, setTodos }) {
  const { id, value } = todo;
  return (
    <>
      <li key={id}>
        {value}
      </li>
      <CompleteButton
        todoId={id}
        setTodos={setTodos}
      />
    </>
  );
}
