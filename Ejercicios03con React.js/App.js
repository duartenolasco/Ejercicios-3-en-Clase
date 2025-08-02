import './App.css';
import React, { useState, useEffect } from 'react';

function ListaTareas() {

  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [tarea, setTarea] = useState('');

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const guardar = () => {
    if (tarea.trim() !== '') {
      setTareas([...tareas, tarea]);
      setTarea('');
    }
  };

  const eliminar = (indexToRemove) => {
    setTareas(tareas.filter((_, index) => index !== indexToRemove));
  };


  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  return (
    
    <div  className="App">
      <div>
        Ingresar una tarea: 
        <input type="text" value={tarea} onChange={handleChange} />
        <button onClick={guardar}>Enviar</button>
      </div>
      <ul>
        {tareas.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => eliminar(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
   
  );
}

export default ListaTareas;
