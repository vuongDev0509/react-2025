import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';


import './App.css';
import AnimeList from './components/AnimeList';
import AnimeFilter from './components/AnimeFilter';
import AnimeSearch from './components/AnimeSearch';
import Header from './components/Header';
import Wishlist from './pages/Wishlist';
import SingleAnime from './pages/SingleAnime';
import Pagination from './components/Pagination';

function App() {
  const [animeList, setAnimeList]       = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [searchQuery, setSearchQuery]   = useState('');
  const [currentPage, setCurrentPage]   = useState(1);
  const itemsPerPage = 12;

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedType]);  

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

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


  // Filter the anime list based on the selected type (selectedType) and the search keyword (searchQuery)
  const filteredAnimeList = animeList.filter(anime => {
    // // Check filter condition by type:
    const matchType  = selectedType.length === 0 || selectedType.includes(anime.type);

    // Check search conditions:
    const matchTitle = anime.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Only keep anime that satisfies both conditions: the correct type and the correct keywords.
    return matchType && matchTitle;
  });

  const indexOfLastItem  = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAnimeList = filteredAnimeList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAnimeList.length / itemsPerPage);



  // Add or remove from wishlist
  const toggleWishlist = (anime) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.mal_id === anime.mal_id);
      return exists
        ? prev.filter(item => item.mal_id !== anime.mal_id) // remove
        : [...prev, anime]; // add
    });
  };

  // get all types for animes
  const animeTypes = [...new Set(animeList.map(anime => anime.type))];

  console.log(wishlist)

  return (
    <div className="vv-anime"> 
      <Header wishlistCount={wishlist.length} />
      <div className="container"> 
        <Routes> 
          <Route
            path="/"
            element={
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
                    <AnimeList animeList={currentAnimeList} 
                               wishlist={wishlist}
                               toggleWishlist={toggleWishlist}
                    />

                    { totalPages > 1 &&
                        <Pagination
                          currentPage={currentPage}
                          totalPages={totalPages}
                          setCurrentPage={(page) => setCurrentPage(page)}
                        />
                    }
                  </div>
              </div>
            }
          />

          <Route
            path="/wishlist"
            element={
              <Wishlist wishlist={wishlist} toggleWishlist={toggleWishlist}/>
            }
          />

          <Route path="/anime/:id" element={<SingleAnime />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;