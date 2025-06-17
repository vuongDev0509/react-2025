import AnimeList from '../components/AnimeList';
function Wishlist({wishlist, toggleWishlist}){
    return(
        <div className="vv-anime-content">
            {wishlist.length === 0 ? (
                <p>You haven't added anything yet.</p>
            ) : (
                <AnimeList
                animeList={wishlist}
                wishlist={wishlist}
                toggleWishlist={toggleWishlist}
                />
            )}
        </div>
    )
}

export default Wishlist;