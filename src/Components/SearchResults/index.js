import React,{Fragment} from 'react';

const SearchResults = ({ albums = [], artistName = '', loading = false, error = null, handleVerMas }) => {
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message || String(error)}</div>;
    if (!albums || albums.length === 0) return <div>No se encontraron álbumes{artistName ? ` para ${artistName}` : ''}.</div>;
console.log(albums);
    return (   
        <Fragment>     
            {albums.map((album, idx) => (                
                <div key={idx}>
                    <div>{album.nombre}</div>
                    <div>{album.año}</div>
                    <button onClick={e => handleVerMas && handleVerMas(e, album)}>Ver Más</button>
                </div>
            ))}
        </Fragment>
    );
}

export default SearchResults;