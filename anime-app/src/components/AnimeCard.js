import {Link } from 'react-router-dom';

function AnimeCard ({anime, toggleWishlist, isInWishlist}){
    const image = anime.images.webp.image_url;
    const type  = anime.type
    const score = anime.score

    console.log(anime)

    return(
        <div className="item-anime">  
            {image && 
                <div className="item-anime__image"> 
                    <img src={image} alt={anime.title} /> 
                </div>
            }
            <div className="item-anime-inner"> 
                <h3>
                    <Link to={`/anime/${anime.mal_id}`}>{anime.title}</Link>
                </h3>
                <div className="item-anime-meta"> 
                    { type &&
                        <p className="item-anime__type"> {type} </p>
                    }

                    { score &&
                        <p className="item-anime__score"> 
                            <svg class="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            {score} 
                        </p>
                    }
                </div>

                <button className="item-anime__btn" onClick={() => toggleWishlist(anime)}>
                    {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>

            </div>
        </div>
    )
}

export default AnimeCard;
