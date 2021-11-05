import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import * as API from '../services/API';

export default function ContextProvider({ children }) {
  const [list, setList] = useState([]);
  const [task, setTask] = useState({});
  const [refrech, setRefrech] = useState(false);

  async function fetchList() {
    const arrayList = await API.getList();
    setList(arrayList);
  }

  useEffect(() => {
    fetchList();
  }, [refrech]);

  const stateGlobal = { list, task, setTask, refrech, setRefrech };

  return (
    <Context.Provider value={ stateGlobal }>
      { children }
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
