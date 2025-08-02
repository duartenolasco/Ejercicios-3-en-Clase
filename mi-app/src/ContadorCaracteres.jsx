import React, { useState } from 'react';
import './ContadorCaracteres.css';

function ContadorCaracteres() {
  const [texto, setTexto] = useState('');

  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div className="contenedor">
      <h2>Contador de Caracteres</h2>
      <input
        type="text"
        value={texto}
        onChange={handleChange}
        placeholder="Escriba acá..."
        className="entrada"
      />
      <p>Caracteres: {texto.length}</p>
      {texto.length > 20 && (
        <p className="limite">Límite alcanzado</p>
      )}
    </div>
  );
}

export default ContadorCaracteres;
