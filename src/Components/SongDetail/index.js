import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledButton } from '../SearchResults/styles';
import { AlbumName, DetailContainer } from './styles';

const SongDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { nombre, año, artist } = location.state || {};

    if (!nombre) return <div>No hay detalles para mostrar.</div>;

    return (
        <DetailContainer>   
            <h2>Detalles del Álbum</h2>
            <AlbumName>Nombre del álbum: {nombre}</AlbumName>
            <p>Año de lanzamiento: {año}</p>
            <StyledButton onClick={() => navigate('/')}>Regresar</StyledButton>
        </DetailContainer>
    );
};

export default SongDetail;