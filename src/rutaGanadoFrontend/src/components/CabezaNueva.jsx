import React, { useState } from 'react';
import { Backend } from 'declarations/Backend';
import prueba from "./prueba";
import { Link } from 'react-router-dom';

function App() {
    const [message, setMessage] = useState('');
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [arete, setArete] = useState('');

    function handleSaveCabeza(event) {
        event.preventDefault();
        const datosCabeza = {
            usuario,
            contraseña,
        };
        Backend
            .saveCabeza(datosCabeza, arete)
            .then(() => {
                setMessage('Tu cabeza fue agregada correctamente, gracias!');
            })
            .catch((error) => {
                setMessage(`Error: ${error}`);
            });
    }

    function handleReset(event) {
        event.preventDefault();
        setUsuario('');
        setContraseña('');
        setArete('');
        setMessage('');
    }

    return (
        <div className="container p-sm-2">
            <h2 className="text-center p-sm-2">Agregar Datos de Cabeza</h2>
            <div className="row">
                <form className="col-md-6" onSubmit={handleSaveCabeza}>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Usuario"
                        className="form-control mb-2"
                    />
                    <input
                        type="password"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        placeholder="Contraseña"
                        className="form-control mb-2"
                    />
                    <button type="submit" className="btn btn-primary mr-2"><Link to="./prueba">Guardar</Link></button>
                    <button type="button" className="btn btn-secondary" onClick={handleReset}>Nuevo ingreso</button>
                </form>
                {/* ... */}
            </div>
            {/* ... */}
        </div>
    );
}

export default App;