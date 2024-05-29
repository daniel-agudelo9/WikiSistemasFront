import React, { useState } from 'react';
import '../style/Calculadora.css';

const Calculadora = () => {
  const [notas, setNotas] = useState([{ nota: '', porcentaje: '' }]);
  const [resultado, setResultado] = useState('');

  const handleChange = (index, field, value) => {
    const newNotas = [...notas];
    newNotas[index][field] = value;
    setNotas(newNotas);
  };

  const handleAddNota = () => {
    if (notas.length < 10) {
      setNotas([...notas, { nota: '', porcentaje: '' }]);
    } else {
      setResultado('No se pueden ingresar más de 10 notas.');
    }
  };

  const handleRemoveNota = (index) => {
    const newNotas = [...notas];
    newNotas.splice(index, 1);
    setNotas(newNotas);
  };

  const handleSubmit = () => {
    const totalNotas = notas.reduce((acc, nota) => acc + parseFloat(nota.nota || 0), 0);
    const totalPorcentaje = notas.reduce((acc, nota) => acc + parseFloat(nota.porcentaje || 0), 0);

    if (totalPorcentaje > 100) {
      setResultado('La suma de los porcentajes no puede ser mayor a 100%.');
    } else if (totalPorcentaje < 100) {
      const porcentajeRestante = 100 - totalPorcentaje;
      const notaNecesaria = totalNotas / (100 - totalPorcentaje);
      setResultado(`Te hace falta sacar ${notaNecesaria.toFixed(2)} en el ${porcentajeRestante}% restante.`);
    } else {
      const notaFinal = totalNotas / notas.length;
      if (notaFinal >= 3 || notas.some(nota => nota.porcentaje === '')) {
        setResultado(`La nota final te quedó en ${notaFinal.toFixed(2)} porque ya ingresaste el 100% de las notas.`);
      } else {
        setResultado('No necesitas sacar nota para el final.');
      }
    }
  };

  return (
    <div className='container'>
    <div className="calculadora-container">
      <table>
        <thead>
          <tr>
            <th>Nota</th>
            <th>Porcentaje</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {notas.map((nota, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  value={nota.nota}
                  onChange={(e) => handleChange(index, 'nota', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={nota.porcentaje}
                  onChange={(e) => handleChange(index, 'porcentaje', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleRemoveNota(index)}>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddNota}>+</button>
      <button onClick={handleSubmit}>Calcular</button>
      {resultado && <p>{resultado}</p>}
    </div>
    </div>
  );
};

export default Calculadora;















