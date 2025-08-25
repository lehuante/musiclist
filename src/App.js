import React, {useState,useEffect} from 'react'
import './App.css';
import Header from './Components/Header';
import HeaderB from './Components/Headerb';
import SearchResults from './Components/SearchResults'; 
import Library from './Components/Library';
import SongInfo from './Components/SongInfo'; 
import { Routes, Route } from 'react-router-dom';
import SearchBar from './Components/SearchBar';
import useFetch from './hooks/useFetch';


function App() {
  //const [titulo, setTitulo] = useState([]);
  const [searchUrl, setSearchUrl] = useState(null);
  const { albums, artistName, loading, error } = useFetch(searchUrl);
    
  const handleSearch = (artist) => {
    setSearchUrl(`https://www.theaudiodb.com/api/v1/json/2/discography.php?s=${artistName}`);
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
            <SearchResults className="search"   artist={artistName} albums={albums} loading={loading} error={error}/>             
          </>
        } />
        <Route path='/song/:id' element={<SongInfo />} />
      </Routes>
    </div>
  );
}

export default App;
