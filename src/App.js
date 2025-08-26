import React, {useState,useEffect} from 'react'
import './App.css';
import Header from './Components/Header';
import HeaderB from './Components/Headerb';
import SearchResults from './Components/SearchResults'; 
import Library from './Components/Library';
import SongInfo from './Components/SongInfo'; 
import { Routes, Route, useNavigate } from 'react-router-dom';
import SearchBar from './Components/SearchBar';
import useFetch from './hooks/useFetch';
import SongDetail from './Components/SongDetail';


function App() {
  //const [titulo, setTitulo] = useState([]);
  const [track, setTrack] = useState([]);
  const [searchUrl, setSearchUrl] = useState(null);
  const { albums, artistName, loading, error } = useFetch(searchUrl);
    
  const handleSearch = (artist) => {
    setSearchUrl(`https://www.theaudiodb.com/api/v1/json/2/discography.php?s=${encodeURIComponent(artist)}`);
  }; 
  const navigate = useNavigate();
  const handleVerMas = (e, album) => {
    // Navega a la ruta y pasa los datos del álbum
    navigate(`/song/${album.nombre || album.strAlbum}`, {
        state: {
            nombre: album.nombre || album.strAlbum,
            año: album.año || album.intYearReleased,
            artist: artistName
        }
    });
    console.log('Ver mas', album);
  };
  
 
  
   /* const handleClick = (e, cancion) => {
    console.log('Canción clicada:', cancion.title); 
    setTrack(prevTrack => [...prevTrack, cancion]);
   };
  
  useEffect(() => {
    console.log("Actualizado");
  }, [data]);*/

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <SearchBar onSearch={handleSearch}/>
            <Header />
            <SearchResults className="search"   artistName={artistName} albums={albums} loading={loading} error={error} handleVerMas={handleVerMas}/>             
          </>
        } />
        <Route path='/song/:id' element={<SongDetail />} />
      </Routes>
    </div>
  );
}

export default App;
