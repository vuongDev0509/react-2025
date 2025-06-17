import AnimeCard from "./AnimeCard";

function AnimeList({ animeList }) {
    return (
        <div className="vv-anime__list">
            {animeList.map(anime => (
                <AnimeCard anime={anime}/>
            ))}
        </div>
    );
}

export default AnimeList;
