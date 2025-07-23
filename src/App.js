import React, {useState,useEffect} from 'react'
import './App.css';
import Header from './Components/Header';
import HeaderB from './Components/Headerb';
import SearchResults from './Components/SearchResults'; // Importa el componente
import Library from './Components/Library';


function App() {

  const [titulo, setTitulo] = useState([
            { key:1, title: "I kissed a Girl", author:"Katy Perry", time:"3:39"},
            { key:2, title: "King of pain", author:"Sting", time:"5:49"},
            { key:3, title: "Merimbula", author:"Flight Facilities", time:"4:44"},
            { key:4, title: "Jubel", author:"Klingande", time:"3:23"},
            { key:5, title: "Kevin ", author:"Ferran Palau", time:"5:32"},
            { key:8, title: "PÃĪris in the Rain", author:"Lauv", time:"3:39"},
            { key:9, title: "24k Magic", author:"Bruno MArs", time:"5:49"},
            { key:10, title: "Amor, amor, amor", author:"Luis Miguel", time:"4:44"},
            { key:11, title: "Jubel", author:"Klingande", time:"3:23"},
            { key:12, title: "The Finishing", author:"Stravoz", time:"5:32"}
        ]);
        
  const [track, setTrack] = useState([
                //{ title: "I kissed a Girl", author:"Katy Perry", time:"3:39"},

  ]);
  
  const handleClick = (e, cancion) => {
    console.log('Canción:', cancion.title); 
    setTrack(prevTrack => [...prevTrack, cancion]);
   };
  
  useEffect(() => {
    console.log("Actualizado");
  }, [track]);

  return (
    <div className="App">
      <Header />
      <SearchResults className="search" titulo={titulo} handleClick={handleClick}/> 
      <HeaderB />
      <Library track={track}  />
     
    </div>
  );
}

export default App;
