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
  const [titulo, setTitulo] = useState([]);
  const [track, setTrack] = useState([]);
  const [searchUrl, setSearchUrl] = useState(null);
    
  const { data } = useFetch(searchUrl);
    
  const handleSearch = (artistName) => {
    setSearchUrl(`https://pokeapi.co/api/v2/pokemon/${artistName}`);
  };
  
 
  
    const handleClick = (e, cancion) => {
    console.log('Canción clicada:', cancion.title); 
    setTrack(prevTrack => [...prevTrack, cancion]);
   };
  
  useEffect(() => {
    console.log("Actualizado");
  }, [data]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <SearchBar onSearch={handleSearch}/>
            <Header />
            <SearchResults className="search"  titulo={data?.album || []} handleClick={handleClick}/> 
            <HeaderB />
            <Library track={track}  />
          </>
        } />
        <Route path='/song/:id' element={<SongInfo />} />
      </Routes>
    </div>
  );
}

export default App;
