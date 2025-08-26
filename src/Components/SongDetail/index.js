import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SongDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { nombre, año, artist } = location.state || {};

    if (!nombre) return <div>No hay detalles para mostrar.</div>;

    return (
        <div>
            <h2>Detalles del Álbum</h2>
            <p>Artista: {artist}</p>
            <p>Nombre del álbum: {nombre}</p>
            <p>Año de lanzamiento: {año}</p>
            <button onClick={() => navigate('/')}>Regresar</button>


        </div>
    );
};

export default SongDetail;