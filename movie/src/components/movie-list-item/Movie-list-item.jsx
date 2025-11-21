// import { Component } from 'react';
import './Movie-list-item.css';

// class MovieListItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             favourite: false,
//             like: false,
//         }
//     }

//     onFavourite = () => {
//         this.setState(({favourite}) => {
//             return {
//                 favourite: !favourite,
//             }
//         });
//     }

//     onLike = () => {
//         this.setState(({like}) => {
//             return {
//                 like: !like,
//             }
//         });
//     }
    
//     render() {
//         // const {name, viewers, favourite, like, onDelete, onToggleFavourite, onToggleLike} = this.props;
//         const {name, viewers, favourite, like, onDelete, onToggleProp} = this.props;
//         // const {favourite, like} = this.state;
//         // const {onFavourite, onLike} = this;

//         return (
//             <li 
//                 className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}
//             >
//                 {/* <span className='list-group-item-label' onClick={onLike}> */}
//                 {/* <span className='list-group-item-label' onClick={onToggleLike}> */}
//                 <span className='list-group-item-label' data-toggle='like' onClick={onToggleProp}>
//                     {name}
//                 </span>
//                 <input type="number" className='list-group-item-input' defaultValue={viewers} />
//                 <div className='d-flex justify-content-center align-items-center'>
//                     {/* <button className='btn-sm btn-cookie' type='button' onClick={onFavourite}> */}
//                     {/* <button className='btn-sm btn-cookie' type='button' onClick={onToggleFavourite}> */}
//                     <button className='btn-sm btn-cookie' type='button' data-toggle='favourite' onClick={onToggleProp}>
//                         <i className='fas fa-cookie'></i>
//                     </button>
//                     <button className='btn-sm btn-trash' type='button' onClick={onDelete}>
//                         <i className='fas fa-trash'></i>
//                     </button>
//                     <i className='fas fa-star'></i>
//                 </div>
//             </li>
//         );
//     }
// }

const MovieListItem = (props) => {
    const {name, viewers, favourite, like, onDelete, onToggleProp} = props;    

    return (
        <li 
            className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}
        >
            {/* <span className='list-group-item-label' onClick={onLike}> */}
            {/* <span className='list-group-item-label' onClick={onToggleLike}> */}
            <span className='list-group-item-label' data-toggle='like' onClick={onToggleProp}>
                {name}
            </span>
            <input type="number" className='list-group-item-input' defaultValue={viewers} />
            <div className='d-flex justify-content-center align-items-center'>
                {/* <button className='btn-sm btn-cookie' type='button' onClick={onFavourite}> */}
                {/* <button className='btn-sm btn-cookie' type='button' onClick={onToggleFavourite}> */}
                <button className='btn-sm btn-cookie' type='button' data-toggle='favourite' onClick={onToggleProp}>
                    <i className='fas fa-cookie'></i>
                </button>
                <button className='btn-sm btn-trash' type='button' onClick={onDelete}>
                    <i className='fas fa-trash'></i>
                </button>
                <i className='fas fa-star'></i>
            </div>
        </li>
    );
}

export default MovieListItem;