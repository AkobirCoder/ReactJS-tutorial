import { Component } from 'react';
import MovieListItem from '../movie-list-item/Movie-list-item';

import './Movie-list.scss';

const MovieList = ({data, onDelete, onToggleProp}) => {
    return (
        <ul className='movie-list'>
            {
                data.map((item) => (
                    <MovieListItem
                        key={item.id}
                        name={item.name}
                        viewers={item.viewers}
                        favourite={item.favourite}
                        like={item.like}
                        onDelete={() => onDelete(item.id)}   
                        onToggleProp={(event) => onToggleProp(item.id, event.currentTarget.getAttribute('data-toggle'))}
                    />
                ))
            }
        </ul>
    );
}

// class MovieList extends Component { 
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }

//     render() {
//         // const {data, onDelete, onToggleFavourite, onToggleLike} = this.props;
//         const {data, onDelete, onToggleProp} = this.props;
//         // console.log(data);

//         return (
//             <ul className='movie-list'>
//                 {
//                     data.map(item => (
//                         <MovieListItem 
//                             key={item.id} 
//                             name={item.name} 
//                             viewers={item.viewers} 
//                             favourite={item.favourite} 
//                             like={item.like}
//                             onDelete={() => onDelete(item.id)}
//                             // onToggleFavourite={() => onToggleFavourite(item.id)}
//                             // onToggleLike={() => onToggleLike(item.id)}
//                             onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
//                         />
//                         // <MovieListItem {...item} />
//                     ))
//                 }
//             </ul>
//         );
//     }
// }

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