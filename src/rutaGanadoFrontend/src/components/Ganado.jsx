import React, { useState } from 'react';
import { Backend } from 'declarations/Backend';

function App() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(null);

  async function handleConsultarCabeza() {
    try {
      // Aquí puedes agregar la lógica para autenticar al usuario antes de consultar la cabeza
      // Por ejemplo, verificar si el usuario está logueado o tiene permisos adecuados.

      const datosUsuario = {
        usuario,
        contraseña,
      };

      // Luego, puedes usar datosUsuario para consultar la información relevante.

      setError(null); // Limpiar errores previos
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Consultar Cabeza</h2>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Usuario"
      />
      <input
        type="password"
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
        placeholder="Contraseña"
      />
      <button onClick={handleConsultarCabeza}>Consultar</button>
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default App;