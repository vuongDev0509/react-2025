import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';

function SingleAnime() {
  const { id } = useParams(); // get id anime from url
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
        setAnime(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching anime details:', error);
        setLoading(false);
      }
    };

    fetchAnime();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!anime) return <p>Anime not found.</p>;

  return (
    <div className="anime-detail container">
        <Link to="/" className="back-button">← Back to Home</Link>
        <h1>{anime.title}</h1>
        <img src={anime.images.webp.image_url} alt={anime.title} />
        <p><strong>Type:</strong> {anime.type}</p>
        <p><strong>Episodes:</strong> {anime.episodes}</p>
        <p><strong>Score:</strong> {anime.score}</p>
        <p><strong>Status:</strong> {anime.status}</p>
        <p><strong>Synopsis:</strong> {anime.synopsis}</p>
    </div>
  );
}

export default SingleAnime;
