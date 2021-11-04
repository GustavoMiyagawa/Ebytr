import React, { useState, useEffect } from 'react';

export default function ListToDo() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001')
    .then((data) => data.json())
    .then((list) => setList(list));
  }, []);

  return (
    <ul>
      { list.map((l) => (
        <li>teste: {l.nome}</li>
      ))}
    </ul>
  );
}
