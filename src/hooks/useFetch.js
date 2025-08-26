import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (url) => {
    const [albums, setAlbums] = useState([]);
    const [artistName, setArtistName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url);
                const albumsData = response.data?.album || [];
                setAlbums(albumsData.map(i => ({
                    nombre: i.strAlbum,
                    año: i.intYearReleased
                })));
                
                console.log(response)
                
                //console.log(`Artista: ${response.data.artists[0].strArtist}`);
              //  console.log(`Imagen: ${response.data.artists[0].strArtistLogo}`);
               // console.log(`Informacion de albumes`);
                setArtistName(albumsData[0]?.strArtist || '');

                
            } catch (error) {
                setError(error);
            }
            setLoading(false);
            
        };
    fetchData();
    }, [url]);
    return { albums, artistName, loading, error };
};

export default useFetch;

            
