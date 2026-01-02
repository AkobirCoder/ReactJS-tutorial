import React from 'react';
import { useDispatch } from 'react-redux';
import { plusCounter } from '../reducers/countSlice';

// const AddCounter = ({increment}) => {
//     return (
//         <button className='btn btn-success' onClick={increment}>Plus</button>
//     );
// }

const AddCounter = () => {
    // React Redux:

    const dispatch = useDispatch();

    const plusHandler = () => {
        return dispatch(plusCounter());
    }

    return (
        // <button className='btn btn-success' onClick={() => dispatch(plusCounter())}>Plus</button>
        <button className='btn btn-success' onClick={plusHandler}>Plus</button>
    );
}

export default AddCounter;