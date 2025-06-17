import AnimeCard from "./AnimeCard";

function AnimeList({ animeList, wishlist, toggleWishlist }) {
    return (
        <div className="vv-anime__list">
            {animeList.map(anime => (
                <AnimeCard key={anime.mal_id} 
                            anime={anime} 
                            wishlist={wishlist} 
                            toggleWishlist={toggleWishlist}
                            isInWishlist={wishlist.some(item => item.mal_id === anime.mal_id)}            
                />
            ))}
        </div>
    );
}

export default AnimeList;
