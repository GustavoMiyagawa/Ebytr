import React, { useContext } from 'react';
import Context from '../context/Context';
import { AddTaskAPI } from '../services/API';

function AddTask() {
  const { task, setTask, refrech, setRefrech } = useContext(Context);

  const handleChange = ({target}) => {
    setTask({
      task: target.value
    });
  };

  const handleClick = () => {
    AddTaskAPI(task)
    refrech ? setRefrech(false) : setRefrech(true);
  };

  return (
    <section>
      <textarea
        type="text"
        onChange={ handleChange }
      />
      <button
        type="button"
        onClick={ handleClick }
      >
        enviar
      </button>
    </section>
  );
}

export default AddTask;
