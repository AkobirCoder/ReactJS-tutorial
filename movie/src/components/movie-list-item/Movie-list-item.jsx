import './Movie-list-item.css';

const MovieListItem = () => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className='list-group-item-label'>Empire of Osman</span>
            <input type="number" className='list-group-item-input' defaultValue='989' />
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

export default MovieListItem;