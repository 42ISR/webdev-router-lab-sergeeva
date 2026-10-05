import { useSearchParams } from 'react-router-dom';

export default function GenreFilter({ genres }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeGenre = searchParams.get('genre') || '';

  function handleSelect(genreId) {
    if (genreId) {
      setSearchParams({ genre: genreId });
    } else {
      setSearchParams({});
    }
  }

  return (
    <div className="genres">
      {genres.map((genre) => (
        <button
          key={genre.id || 'all'}
          type="button"
          onClick={() => handleSelect(genre.id)}
          className={'genre-btn' + (genre.id === activeGenre ? ' active' : '')}
        >
          {genre.label}
        </button>
      ))}
    </div>
  );
}