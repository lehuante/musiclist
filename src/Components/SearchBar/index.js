import React, { useState } from 'react';
import { SearchForm } from './styles';

const SearchBar = ({ onSearch }) => {
    const [artist, setArtist] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (artist.trim()) {
            onSearch(artist.trim());
        } else {
            alert("Ingresa el nombre de un artista");
        }
    };

    return (
        <SearchForm onSubmit={handleSubmit}>
            <h3>Busqueda</h3>
            <input type="text" value={artist} onChange={e => setArtist(e.target.value)} placeholder="Nombre artista"/>
            <button type="submit">Buscar</button>
        </SearchForm>
    );
};

export default SearchBar;