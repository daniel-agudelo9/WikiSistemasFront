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
    const totalPorcentaje = notas.reduce((acc, nota) => acc + parseFloat(nota.porcentaje || 0), 0);
    
    if (totalPorcentaje > 100) {
      setResultado('La suma de los porcentajes no puede ser mayor a 100%.');
      return;
    }

    const notaFinal = notas.reduce((acc, nota) => acc + (parseFloat(nota.nota || 0) * (parseFloat(nota.porcentaje || 0) / 100)), 0);

    if (totalPorcentaje < 100) {
      const porcentajeRestante = 100 - totalPorcentaje;
      const notaNecesaria = (3 - notaFinal) / (porcentajeRestante / 100);

      if (notaNecesaria > 5) {
        setResultado(`No es posible alcanzar 3.0 con el porcentaje restante.`);
      } else if (notaNecesaria <= 0) {
        setResultado('No necesitas sacar nota para el final.');
      } else {
        setResultado(`Te hace falta sacar ${notaNecesaria.toFixed(2)} en el ${porcentajeRestante}% restante.`);
      }
    } else {
      if (notaFinal >= 3) {
        setResultado(`La nota final te quedó en ${notaFinal.toFixed(2)}`);
      } else {
        setResultado(`Tu nota final es ${notaFinal.toFixed(2)}. Necesitas mejorar para alcanzar 3.0.`);
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
                    step="0.01"
                    value={nota.nota}
                    onChange={(e) => handleChange(index, 'nota', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    step="0.01"
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

















