import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import AnimeList from './components/AnimeList';
import AnimeFilter from './components/AnimeFilter';
import AnimeSearch from './components/AnimeSearch';

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Call API when component is first loaded
    const fetchAnime = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/anime');
        setAnimeList(response.data.data); 
      } catch (error) {
        console.error('Error getting anime list:', error);
      }
    }

    fetchAnime()
  }, []);

  // const filteredAnimeList =
  // selectedType.length === 0
  //   ? animeList
  //   : animeList.filter(anime => selectedType.includes(anime.type));

  // Filter the anime list based on the selected type (selectedType) and the search keyword (searchQuery)
  const filteredAnimeList = animeList.filter(anime => {
    // // Check filter condition by type:
    const matchType  = selectedType.length === 0 || selectedType.includes(anime.type);

    // Check search conditions:
    const matchTitle = anime.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Only keep anime that satisfies both conditions: the correct type and the correct keywords.
    return matchType && matchTitle;
  });
  

  // get all types for animes
  const animeTypes = [...new Set(animeList.map(anime => anime.type))];

  console.log(selectedType)

  return (
    <div className="vv-anime"> 
      <div className="container"> 
        <div className='vv-anime-inner'> 
            <div className='vv-anime-sedebar'> 
              <AnimeSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <AnimeFilter animeTypes={animeTypes} 
                          selectedType={selectedType}
                          setSelectedType={setSelectedType}
              />
            </div>
            <div className='vv-anime-content'> 
              <h1>List Anime</h1>
              <AnimeList animeList={filteredAnimeList} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;