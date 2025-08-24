import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <input type="text" value={artist} onChange={e => setArtist(e.target.value)} placeholder="Nombre artista"/>
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchBar;