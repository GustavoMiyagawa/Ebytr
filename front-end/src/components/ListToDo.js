import React, { useContext } from 'react';
import Context from '../context/Context';

export default function ListToDo() {
  const { list } = useContext(Context);

  return (
    <ul>
      {list.map((l) => (
        <li>
          {l.task}
          <button>{l._id}</button>
        </li>
      ))}
    </ul>
  );
}
