import React, { useContext } from 'react';
import Context from '../context/Context';
import { removeTaskAPI } from '../services/API';

export default function ListToDo() {
  const { list, refrech, setRefrech } = useContext(Context);

  const handleClick = (idTask) => {
    removeTaskAPI({ id: idTask })
    refrech ? setRefrech(false) : setRefrech(true);
  };

  return (
    <ul>
      {list.map((l) => (
        <li key={l._id}>
          {l.task}
          <button
            type='button'
            onClick={() => handleClick(l._id) }
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
}
