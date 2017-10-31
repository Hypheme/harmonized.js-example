import React from 'react';
import { observer } from 'mobx-react';

const AuthorsView = observer(({ authors }) => {
  return (
    <div>
      <h2>authors</h2>
      <ul>{authors.map((todo) => <li key={todo.id}>{todo.name}</li>)}</ul>
    </div>
  );
});

export default AuthorsView;
