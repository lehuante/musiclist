import {useState} from 'react'
import Header from './Components/Header';
import SearchResults from './Components/SearchResults'; 
import { Routes, Route, useNavigate } from 'react-router-dom';
import SearchBar from './Components/SearchBar';
import useFetch from './hooks/useFetch';
import SongDetail from './Components/SongDetail';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import GlobalStyle from './theme/GlobalStyle';



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
    navigate(`/song/id`, {
        state: {
            nombre: album.nombre || album.strAlbum,
            año: album.año || album.intYearReleased,
            artist: artistName
        }
    });
    console.log('Ver mas', album);
  };
  
 

  return (
    <ThemeProvider theme={Theme}>
    <GlobalStyle />
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
    </ThemeProvider>
  );
}

export default App;
