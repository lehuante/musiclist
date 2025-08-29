import { MusicSlot, AlbumInfo, AlbumYear,StyledButton } from './styles';



const SearchResults = ({ albums = [], artistName = '', loading = false, error = null, handleVerMas }) => {
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message || String(error)}</div>;
    if (!albums || albums.length === 0) return <div>No se encontraron álbumes{artistName ? ` para ${artistName}` : ''}.</div>;
console.log(albums);
    return (   
        <div>     
            {albums.map((album, idx) => (                
                <MusicSlot año={album.año} key={idx}>
                    <AlbumInfo>{album.nombre}</AlbumInfo>
                    <AlbumYear>Lanzamiento: {album.año}</AlbumYear>
                    <StyledButton onClick={e => handleVerMas && handleVerMas(e, album)}>Ver Más</StyledButton>
                </MusicSlot>
            ))}
        </div>
    );
}

export default SearchResults;