import { Component } from 'react';
import MovieListItem from '../movie-list-item/Movie-list-item';

import './Movie-list.css';

class MovieList extends Component { 
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {data, onDelete, onToggleFavourite, onToggleLike} = this.props;
        // console.log(data);

        return (
            <ul className='movie-list'>
                {
                    data.map(item => (
                        <MovieListItem 
                            key={item.id} 
                            name={item.name} 
                            viewers={item.viewers} 
                            favourite={item.favourite} 
                            onDelete={() => onDelete(item.id)}
                            onToggleFavourite={() => onToggleFavourite(item.id)}
                            onToggleLike={() => onToggleLike(item.id)}
                        />
                        // <MovieListItem {...item} />
                    ))
                }
            </ul>
        );
    }
}

// const MovieList = ({data, onDelete}) => {
//     return (
//         <ul className='movie-list'>
//             {
//                 data.map(item => (
//                     <MovieListItem key={item.id} name={item.name} viewers={item.viewers} favourite={item.favourite} onDelete={() => onDelete(item.id)} />
//                     // <MovieListItem {...item} />
//                 ))
//             }
//         </ul>
//     );
// }

export default MovieList;