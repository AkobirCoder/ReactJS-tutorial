import { Component } from 'react';
import './Movie-list-item.css';

class MovieListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite: false,
            like: false,
        }
    }
    
    render() {
        const {name, viewers} = this.props;
        const {favourite, like} = this.state;

        return (
            <li 
                className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}
            >
                <span className='list-group-item-label'>
                    {name}
                </span>
                <input type="number" className='list-group-item-input' defaultValue={viewers} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button className='btn-sm btn-cookie' type='button'>
                        <i className='fas fa-cookie'></i>
                    </button>
                    <button className='btn-sm btn-trash' type='button'>
                        <i className='fas fa-trash'></i>
                    </button>
                    <i className='fas fa-star'></i>
                </div>
            </li>
        );
    }
}

// const MovieListItem = ({name, viewers, favourite}) => {
//     // console.log(favourite);

//     // 2-usul: class qo'shish:
//     // let classNames = 'list-group-item d-flex justify-content-between';

//     // if (favourite) {
//     //     classNames += ' favourite';
//     // }

//     return (
//         // 2 - usul:
//         // <li className={classNames}>

//         // 1-usul: class qo'shish:
//         <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
//             <span className='list-group-item-label'>{name}</span>
//             <input type="number" className='list-group-item-input' defaultValue={viewers} />
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button className='btn-sm btn-cookie' type='button'>
//                     <i className='fas fa-cookie'></i>
//                 </button>
//                 <button className='btn-sm btn-trash' type='button'>
//                     <i className='fas fa-trash'></i>
//                 </button>
//                 <i className='fas fa-star'></i>
//             </div>
//         </li>
//     );
// }

export default MovieListItem;