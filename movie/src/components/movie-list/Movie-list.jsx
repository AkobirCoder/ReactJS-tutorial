import MovieListItem from '../movie-list-item/Movie-list-item';

import './Movie-list.css';

const MovieList = () => {
    return (
        <div className='movie-list'>
            <MovieListItem />
            <MovieListItem />
            <MovieListItem />
        </div>
    );
}

export default MovieList;