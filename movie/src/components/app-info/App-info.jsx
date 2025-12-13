import { useContext } from 'react';
import { Context } from '../../context';
import './App-info.scss';

// const AppInfo = ({allMoviesCount, favouriteMoviesCount}) => {
const AppInfo = () => {
    const {state} = useContext(Context);

    const allMoviesCount = state.data.length;
    const favouriteMoviesCount = state.data.filter((item) => item.favourite).length;

    return (
        <div className='app-info'>
            <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
            <p className='fs-4 text-uppercase'>Sevimli kinolar soni: {favouriteMoviesCount}</p>

            {/* <p className='fs-3 text-uppercase'>Barcha kinolar soni: {state.data.length}</p>
            <p className='fs-4 text-uppercase'>Sevimli kinolar soni: {state.data.filter((item) => item.favourite).length}</p> */}
        </div>
    );
}

export default AppInfo;