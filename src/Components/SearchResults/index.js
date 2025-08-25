import React,{Fragment} from 'react';
import {albums, artistName, loading, error} from '../../hooks/useFetch';

const SearchResults = ({albums, artistName, handleClick}) =>{
    return (
        <Fragment>
            {albums.map((album, idx) => (
                <article className="cancion" key={idx}>
                    <div className="slotA">
                        <h3>{album.nombre}</h3>
                    </div>
                    <div className="slotC">
                        <p>{album.año}</p>
                        <button className="btn" onClick={(e) => handleClick(e, album)}>Add to Library</button>
                    </div>
                </article>
            ))}
        </Fragment>
    )
}

export default SearchResults;